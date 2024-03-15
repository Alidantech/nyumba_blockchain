use ic_cdk::{Principal, query, update};
use std::{
    cell::{Cell, RefCell},
    collections::HashMap,
};

#[derive(Clone, Debug)]
pub struct Token {
    pub id: u64,
    pub owner: Principal,
}

// Thread and map for storing PROPERTY verification token
thread_local! {
    static TOKEN_STORE: RefCell<HashMap<u64, Vec<Token>>> = RefCell::default();
    static NEXT_ID: Cell<u64> = Cell::new(0);
}

// Create land tokens
#[update]
pub fn create_land_tokens(land_id: u64, size: u64, owner: Principal) {
    let mut tokens = Vec::new();

    for _ in 0..size {
        let token = Token {
            id: NEXT_ID.with(|next_id| {
                let id = next_id.get();
                next_id.set(id + 1);
                id
            }),
            owner: owner,
        };

        tokens.push(token);
    }

    TOKEN_STORE.with(|token_store| {
        token_store.borrow_mut().insert(land_id, tokens);
    });
}

// Query to get the ownership information of land tokens
#[query]
pub fn get_land_token_owners(land_id: u64) -> Option<Vec<Principal>> {
    TOKEN_STORE.with(|token_store| {
        token_store
            .borrow()
            .get(&land_id)
            .map(|tokens| tokens.iter().map(|token| token.owner.clone()).collect())
    })
}
