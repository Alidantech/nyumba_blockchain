use std::cell::{Cell, RefCell};
use std::collections::BTreeMap;

use ic_cdk::{query, update};

use crate::models::property_models::LeaseLand; // Assuming LeaseLand model is used for lease land type

type LeaseLandStore = BTreeMap<u64, LeaseLand>;

thread_local! {
    static LEASE_LAND_STORE: RefCell<LeaseLandStore> = RefCell::default();
    static NEXT_ID: Cell<u64> = Cell::new(0);
}

// 1. Create a new lease land entry
#[update]
pub fn create_lease_land(lease_land: LeaseLand) -> u64 {
    let id = NEXT_ID.with(|next_id| {
        let id = next_id.get();
        next_id.set(id + 1);
        id
    });
    LEASE_LAND_STORE.with(|lease_land_store| {
        lease_land_store.borrow_mut().insert(id, lease_land);
    });
    id // Return the assigned ID
}

// 2. Get a lease land entry by ID
#[query]
pub fn get_lease_land(id: u64) -> Option<LeaseLand> {
    LEASE_LAND_STORE.with(|lease_land_store| lease_land_store.borrow().get(&id).cloned())
}

// 3. Get all lease land entries
#[query]
pub fn get_all_lease_lands() -> Vec<LeaseLand> {
    LEASE_LAND_STORE.with(|lease_land_store| {
        lease_land_store.borrow().values().cloned().collect()
    })
}

// 4. Update a lease land entry
#[update]
pub fn update_lease_land(id: u64, lease_land: LeaseLand) -> bool {
    LEASE_LAND_STORE.with(|lease_land_store| {
        let mut lease_land_store = lease_land_store.borrow_mut();
        if lease_land_store.contains_key(&id) {
            lease_land_store.insert(id, lease_land);
            true // Return true on successful update
        } else {
            false // Return false if the entry doesn't exist
        }
    })
}

// 5. Delete a lease land entry
#[update]
pub fn delete_lease_land(id: u64) -> bool {
    LEASE_LAND_STORE.with(|lease_land_store| {
        let mut lease_land_store = lease_land_store.borrow_mut();
        if lease_land_store.contains_key(&id) {
            lease_land_store.remove(&id);
            true // Return true on successful deletion
        } else {
            false // Return false if the entry doesn't exist
        }
    })
}
