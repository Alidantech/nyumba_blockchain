use std::cell::{Cell, RefCell};
use std::collections::BTreeMap;

use ic_cdk::{query, update};

use crate::models::property_models::Rental; // Assuming Rental model is used for rentals

type RentalStore = BTreeMap<u64, Rental>;

thread_local! {
    static RENTAL_STORE: RefCell<RentalStore> = RefCell::default();
    static NEXT_ID: Cell<u64> = Cell::new(0);
}

// 1. Create a new rental entry
#[update]
pub fn create_rental(rental: Rental) -> u64 {
    let id = NEXT_ID.with(|next_id| {
        let id = next_id.get();
        next_id.set(id + 1);
        id
    });
    RENTAL_STORE.with(|rental_store| {
        rental_store.borrow_mut().insert(id, rental);
    });
    id // Return the assigned ID
}

// 2. Get a rental entry by ID
#[query]
pub fn get_rental(id: u64) -> Option<Rental> {
    RENTAL_STORE.with(|rental_store| rental_store.borrow().get(&id).cloned())
}

// 3. Get all rental entries
#[query]
pub fn get_all_rentals() -> Vec<Rental> {
    RENTAL_STORE.with(|rental_store| {
        rental_store.borrow().values().cloned().collect()
    })
}

// 4. Update a rental entry
#[update]
pub fn update_rental(id: u64, rental: Rental) -> bool {
    RENTAL_STORE.with(|rental_store| {
        let mut rental_store = rental_store.borrow_mut();
        if rental_store.contains_key(&id) {
            rental_store.insert(id, rental);
            true // Return true on successful update
        } else {
            false // Return false if the entry doesn't exist
        }
    })
}

// 5. Delete a rental entry
#[update]
pub fn delete_rental(id: u64) -> bool {
    RENTAL_STORE.with(|rental_store| {
        let mut rental_store = rental_store.borrow_mut();
        if rental_store.contains_key(&id) {
            rental_store.remove(&id);
            true // Return true on successful deletion
        } else {
            false // Return false if the entry doesn't exist
        }
    })
}
