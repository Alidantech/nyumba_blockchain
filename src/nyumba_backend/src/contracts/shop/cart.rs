use ic_cdk::{query, update};
use std::{
    cell::{Cell, RefCell},
    collections::HashMap,
};

use crate::enums::shop_enums::CartPropertyStatus;
use crate::models::shop_models::{Cart, CartProperty};

thread_local! {
    static CART: RefCell<HashMap<u64, Cart>> = RefCell::new(HashMap::new());
    static NEXT_ID: Cell<u64> = Cell::new(0);
}

#[update]
pub fn create_cart(buyer_id: u64) -> u64 {
    let id = NEXT_ID.with(|next_id| {
        let id = next_id.get();
        next_id.set(id + 1);
        id
    });
    CART.with(|cart| {
        cart.borrow_mut().insert(
            id,
            Cart {
                user_id: buyer_id,
                properties: None,
            },
        );
    });
    id
}

#[update]
pub fn add_item_to_cart(cart_id: u64, property_id: u64, quantity: u32) -> bool {
    CART.with(|cart| {
        if let Some(user_cart) = cart.borrow_mut().get_mut(&cart_id) {
            if let Some(properties) = &mut user_cart.properties {
                properties.push(CartProperty {
                    property_id,
                    quantity,
                    is_liked: false,
                    status: CartPropertyStatus::InCart,
                });
                return true;
            }
        }
        false
    })
}

#[update]
pub fn remove_item_from_cart(cart_id: u64, property_id: u64) -> bool {
    CART.with(|cart| {
        if let Some(user_cart) = cart.borrow_mut().get_mut(&cart_id) {
            if let Some(properties) = &mut user_cart.properties {
                properties.retain(|property| property.property_id != property_id);
                return true;
            }
        }
        false
    })
}

#[update]
pub fn like_cart_item(cart_id: u64, property_id: u64) -> bool {
    CART.with(|cart| {
        if let Some(user_cart) = cart.borrow_mut().get_mut(&cart_id) {
            if let Some(properties) = &mut user_cart.properties {
                if let Some(property) = properties
                    .iter_mut()
                    .find(|property| property.property_id == property_id)
                {
                    property.is_liked = true;
                    return true;
                }
            }
        }
        false
    })
}

#[update]
pub fn archive_cart_item(cart_id: u64, property_id: u64) -> bool {
    CART.with(|cart| {
        if let Some(user_cart) = cart.borrow_mut().get_mut(&cart_id) {
            if let Some(properties) = &mut user_cart.properties {
                if let Some(property) = properties
                    .iter_mut()
                    .find(|property| property.property_id == property_id)
                {
                    property.status = CartPropertyStatus::Archived;
                    return true;
                }
            }
        }
        false
    })
}

#[update]
pub fn return_item_to_cart(cart_id: u64, property_id: u64) -> bool {
    CART.with(|cart| {
        if let Some(user_cart) = cart.borrow_mut().get_mut(&cart_id) {
            if let Some(properties) = &mut user_cart.properties {
                if let Some(property) = properties
                    .iter_mut()
                    .find(|property| property.property_id == property_id)
                {
                    property.status = CartPropertyStatus::InCart;
                    return true;
                }
            }
        }
        false
    })
}

#[query]
pub fn view_cart_items(cart_id: u64) -> Option<Vec<CartProperty>> {
    CART.with(|cart| {
        cart.borrow()
            .get(&cart_id)
            .and_then(|user_cart| user_cart.properties.clone())
    })
}
