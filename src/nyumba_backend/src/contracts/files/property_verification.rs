use crate::models::file_models::VerificationDocument;
use ic_cdk::{query, update};
use std::{
    cell::{Cell, RefCell},
    collections::HashMap,
};

// Thread and map for storing PROPERTY verification documents
thread_local! {
    static PROPERTY_VERIFICATION: RefCell<HashMap<u64, VerificationDocument>> = RefCell::default();
    static NEXT_ID: Cell<u64> = Cell::new(0);
}

// 1. Create a new property verification document takes in a VerificationDocument and returns a u64
#[update]
pub fn create_property_verification(new_documents: VerificationDocument) -> u64 {
    NEXT_ID.with(|next_id| {
        let id = next_id.get();
        next_id.set(id + 1);
        PROPERTY_VERIFICATION.with(|property_verification| {
            property_verification.borrow_mut().insert(id, new_documents);
        });
        id
    })
}

// 2. Get a property verification document takes in a u64 and returns an Option<VerificationDocument>
#[query]
pub fn get_property_verification(id: u64) -> Option<VerificationDocument> {
    PROPERTY_VERIFICATION
        .with(|property_verification| property_verification.borrow().get(&id).cloned())
}

// 3. Get all property verification documents returns a Vec<VerificationDocument>
#[query]
pub fn get_all_property_verifications() -> Vec<VerificationDocument> {
    PROPERTY_VERIFICATION
        .with(|property_verification| property_verification.borrow().values().cloned().collect())
}
