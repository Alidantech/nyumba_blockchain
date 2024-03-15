use std::cell::{Cell, RefCell};
use std::collections::BTreeMap;

use ic_cdk::{query, update};

use crate::models::property_models::SaleLand;

type SaleLandStore = BTreeMap<u64, SaleLand>;

thread_local! {
    static SALE_LAND_STORE: RefCell<SaleLandStore> = RefCell::default();
    static NEXT_ID: Cell<u64> = Cell::new(0);
}

// 1. Create a new sale land takes in a SaleLand and returns a u64
#[update]
pub fn create_sale_land(sale_land: SaleLand) -> u64 {
    let id = NEXT_ID.with(|next_id| {
        let id = next_id.get();
        next_id.set(id + 1);
        id
    });
    SALE_LAND_STORE.with(|sale_land_store| {
        sale_land_store.borrow_mut().insert(id, sale_land);
    });
    id // return the assigned ID
}

// 2. Get a sale land takes in a u64 and returns an Option<SaleLand>
#[query]
pub fn get_sale_land(id: u64) -> Option<SaleLand> {
    SALE_LAND_STORE.with(|sale_land_store| sale_land_store.borrow().get(&id).cloned())
}

// 3. Get all sale lands returns a Vec<SaleLand>
#[query]
pub fn get_all_sale_lands() -> Vec<SaleLand> {
    SALE_LAND_STORE.with(|sale_land_store| {
        sale_land_store.borrow().values().cloned().collect()
    })
}

// 4. Update a sale land takes in a u64 and a SaleLand and returns a bool
#[update]
pub fn update_sale_land(id: u64, sale_land: SaleLand) -> bool {
    SALE_LAND_STORE.with(|sale_land_store| {
        let mut sale_land_store = sale_land_store.borrow_mut();
        if sale_land_store.contains_key(&id) {
            sale_land_store.insert(id, sale_land);
            true
        } else {
            false
        }
    })
}

// 5. Delete a sale land takes in a u64 and returns a bool
#[update]
pub fn delete_sale_land(id: u64) -> bool {
    SALE_LAND_STORE.with(|sale_land_store| {
        let mut sale_land_store = sale_land_store.borrow_mut();
        if sale_land_store.contains_key(&id) {
            sale_land_store.remove(&id);
            true
        } else {
            false
        }
    })
}
