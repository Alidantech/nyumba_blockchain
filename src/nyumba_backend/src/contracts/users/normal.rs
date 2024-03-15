use ic_cdk::{query, update};
use std::{
    cell::{Cell, RefCell},
    collections::HashMap,
};

use crate::{
    contracts::files::user_verification::create_user_verification,
    models::file_models::VerificationDocument,
};

use crate::{
    enums::user_enums::NormalUserRole,
    models::user_models::{NormalUser, User},
};

// Thread and map for storing media
thread_local! {
    static NORMAL_USER_INFO: RefCell<HashMap<u64, NormalUser>> = RefCell::default();
    static NEXT_ID: Cell<u64> = Cell::new(0);
}

// Update function to create a normal user based on the selected role
#[update]
pub fn create_normal_user(
    user_data: User,
    role: NormalUserRole,
    verification_docs: Vec<VerificationDocument>,
) -> Option<NormalUser> {
    let is_verified = false;
    // map through all verification documents and create and recieve the ids and put them in an array
    let verification_docs_ids: Vec<u64> = verification_docs
        .iter()
        .map(|verification_doc| create_user_verification(verification_doc.clone()))
        .collect();

    let normal_user = match role {
        NormalUserRole::Buyer => NormalUser {
            user_data,
            normal_user_role: NormalUserRole::Buyer,
            verification_documents: verification_docs_ids,
            is_verified,
        },
        NormalUserRole::Seller => NormalUser {
            user_data,
            normal_user_role: NormalUserRole::Seller,
            verification_documents: verification_docs_ids,
            is_verified,
        },
    };

    NEXT_ID.with(|next_id| {
        let id = next_id.get();
        next_id.set(id + 1);
        NORMAL_USER_INFO.with(|normal_user_info| {
            normal_user_info
                .borrow_mut()
                .insert(id, normal_user.clone());
        });
    });
    Some(normal_user)
}

#[query]
pub fn get_normal_user(id: u64) -> Option<NormalUser> {
    {
        NORMAL_USER_INFO.with(|normal_user_info| normal_user_info.borrow().get(&id).cloned())
    }
}

#[update]
pub fn update_normal_user(id: u64, new_user_data: User) -> Option<NormalUser> {
    {
        NORMAL_USER_INFO.with(|normal_user_info| {
            let mut normal_user_info = normal_user_info.borrow_mut();
            if let Some(existing_normal_user) = normal_user_info.get(&id) {
                {
                    let new_normal_user = NormalUser {
                        user_data: new_user_data,
                        normal_user_role: existing_normal_user.normal_user_role.clone(),
                        is_verified: existing_normal_user.is_verified,
                        verification_documents: existing_normal_user.verification_documents.clone(),
                    };
                    normal_user_info.insert(id, new_normal_user.clone());
                    Some(new_normal_user)
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
pub fn delete_normal_user(id: u64) -> Option<NormalUser> {
    {
        NORMAL_USER_INFO.with(|normal_user_info| normal_user_info.borrow_mut().remove(&id))
    }
}

#[query]
pub fn login(email: String, password: String) -> Option<NormalUser> {
    NORMAL_USER_INFO.with(|normal_user_info| {
        for user in normal_user_info.borrow().values() {
            if user.user_data.email == email && user.user_data.password == password {
                return Some(user.clone());
            }
        }
        None
    })
}
