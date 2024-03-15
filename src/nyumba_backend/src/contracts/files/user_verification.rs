use crate::models::file_models::VerificationDocument;
use ic_cdk::{query, update};
use std::{
    cell::{Cell, RefCell},
    collections::HashMap,
};

// Thread and map for storing user verification documents
thread_local! {
    static USER_VERIFICATION: RefCell<HashMap<u64, VerificationDocument>> = RefCell::default();
    static NEXT_ID: Cell<u64> = Cell::new(0);
}

// 1. Create a new user verification document takes in a VerificationDocument and returns a u64
#[update]
pub fn create_user_verification(new_documents: VerificationDocument) -> u64 {
    NEXT_ID.with(|next_id| {
        let id = next_id.get();
        next_id.set(id + 1);
        USER_VERIFICATION.with(|user_verification| {
            user_verification.borrow_mut().insert(id, new_documents);
        });
        id
    })
}
// 2. Get a user verification document takes in a u64 and returns an Option<VerificationDocument>
#[query]
pub fn get_user_verification(id: u64) -> Option<VerificationDocument> {
    USER_VERIFICATION.with(|user_verification| user_verification.borrow().get(&id).cloned())
}

// 3. Get all user verification documents returns a Vec<VerificationDocument>
#[query]
pub fn get_all_user_verifications() -> Vec<VerificationDocument> {
    USER_VERIFICATION.with(|user_verification| {
        user_verification.borrow().values().cloned().collect()
    })
}