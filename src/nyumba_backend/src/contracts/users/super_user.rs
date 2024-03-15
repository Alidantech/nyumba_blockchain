use ic_cdk::{query, update};
use std::{
    cell::{Cell, RefCell},
    collections::HashMap,
};

use crate::{
    enums::user_enums::SuperUserRole,
    models::user_models::{SuperUser, User},
};

// Thread and map for storing media
thread_local! {
    static SUPER_USER_INFO: RefCell<HashMap<u64, SuperUser>> = RefCell::default();
    static NEXT_ID: Cell<u64> = Cell::new(0);
}

// Update function to create a normal user based on the selected role
#[update]
pub fn create_super_user(user_data: User, role: SuperUserRole) -> Option<SuperUser> {
    let super_user = match role {
        SuperUserRole::Admin => SuperUser {
            user_data,
            super_user_role: SuperUserRole::Admin,
        },
        SuperUserRole::Official => SuperUser {
            user_data,
            super_user_role: SuperUserRole::Official,
        },
    };

    NEXT_ID.with(|next_id| {
        let id = next_id.get();
        next_id.set(id + 1);
        SUPER_USER_INFO.with(|super_user_info| {
            super_user_info.borrow_mut().insert(id, super_user.clone());
        });
    });

    Some(super_user)
}

#[query]
pub fn get_super_user(id: u64) -> Option<SuperUser> {
    {
        SUPER_USER_INFO.with(|super_user_info| super_user_info.borrow().get(&id).cloned())
    }
}

#[update]
pub fn update_super_user(id: u64, new_user_data: User) -> Option<SuperUser> {
    {
        SUPER_USER_INFO.with(|super_user_info| {
            let mut super_user_info = super_user_info.borrow_mut();
            if let Some(existing_super_user) = super_user_info.get(&id) {
                {
                    let new_super_user = SuperUser {
                        user_data: new_user_data,
                        super_user_role: existing_super_user.super_user_role.clone(),
                    };
                    super_user_info.insert(id, new_super_user.clone());
                    Some(new_super_user)
                }
            } else {
                {
                    None
                }
            }
        })
    }
}

#[update]
pub fn delete_super_user(id: u64) -> Option<SuperUser> {
    {
        SUPER_USER_INFO.with(|super_user_info| super_user_info.borrow_mut().remove(&id))
    }
}

#[query]
pub fn super_user_login(email: String, password: String) -> Option<SuperUser> {
    SUPER_USER_INFO.with(|super_user_info| {
        for user in super_user_info.borrow().values() {
            if user.user_data.email == email && user.user_data.password == password {
                return Some(user.clone());
            }
        }
        None
    })
}
