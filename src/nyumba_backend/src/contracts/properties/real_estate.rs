use std::cell::{Cell, RefCell};
use std::collections::BTreeMap;

use ic_cdk::{query, update};

use crate::models::property_models::RealEstate;

type RealEstateStore = BTreeMap<u64, RealEstate>;

thread_local! {
    static REAL_ESTATE_STORE: RefCell<RealEstateStore> = RefCell::default();
    static NEXT_ID: Cell<u64> = Cell::new(0);
}

// 1. Create a new real estate entry
#[update]
pub fn create_real_estate(real_estate: RealEstate) -> u64 {
    let id = NEXT_ID.with(|next_id| {
        let id = next_id.get();
        next_id.set(id + 1);
        id
    });
    REAL_ESTATE_STORE.with(|real_estate_store| {
        real_estate_store.borrow_mut().insert(id, real_estate);
    });
    id // Return the assigned ID
}

// 2. Get a real estate entry by ID
#[query]
pub fn get_real_estate(id: u64) -> Option<RealEstate> {
    REAL_ESTATE_STORE.with(|real_estate_store| real_estate_store.borrow().get(&id).cloned())
}

// 3. Get all real estate entries
#[query]
pub fn get_all_real_estates() -> Vec<RealEstate> {
    REAL_ESTATE_STORE
        .with(|real_estate_store| real_estate_store.borrow().values().cloned().collect())
}

// 4. Update a real estate entry
#[update]
pub fn update_real_estate(id: u64, real_estate: RealEstate) -> bool {
    REAL_ESTATE_STORE.with(|real_estate_store| {
        let mut real_estate_store = real_estate_store.borrow_mut();
        if real_estate_store.contains_key(&id) {
            real_estate_store.insert(id, real_estate);
            true // Return true on successful update
        } else {
            false // Return false if the entry doesn't exist
        }
    })
}

// 5. Delete a real estate entry
#[update]
pub fn delete_real_estate(id: u64) -> bool {
    REAL_ESTATE_STORE.with(|real_estate_store| {
        let mut real_estate_store = real_estate_store.borrow_mut();
        if real_estate_store.contains_key(&id) {
            real_estate_store.remove(&id);
            true // Return true on successful deletion
        } else {
            false // Return false if the entry doesn't exist
        }
    })
}
