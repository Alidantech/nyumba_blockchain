// src/main.rs

use candid::CandidType;
use ic_cdk::export::candid::{candid_method, CandidType};
use ic_cdk::export::Principal;
use std::collections::{HashMap, HashSet};

// Define the types for items and the shopping cart
#[derive(CandidType, Clone)]
struct Item {
    id: u64,
    name: String,
    price: f64,
}

#[derive(CandidType, Default)]
struct ShoppingCart {
    items: HashMap<u64, u32>, // Item ID to quantity mapping
}

// Define the types for user and orders
#[derive(CandidType, Default)]
struct User {
    cart: ShoppingCart,
    orders: Vec<HashSet<u64>>, // Set of item IDs in each order
}

#[derive(CandidType)]
struct Order {
    user: Principal,
    items: Vec<Item>,
    total_price: f64,
}

// Define the main service
#[derive(Default)]
struct ECommerceService {
    users: HashMap<Principal, User>,
    items: HashMap<u64, Item>,
    orders: Vec<Order>,
}

// Implement methods for adding items to the cart and placing orders
#[candid_method(query, name = "addItemToCart")]
fn add_item_to_cart(&mut self, item_id: u64, quantity: u32) {
    let caller = ic_cdk::caller();
    let user = self.users.entry(caller).or_default();

    // Check if the item exists
    if let Some(item) = self.items.get(&item_id) {
        user.cart.items.insert(item_id, quantity);
    }
}

#[candid_method(query, name = "placeOrder")]
fn place_order(&mut self) {
    let caller = ic_cdk::caller();
    let user = self.users.entry(caller).or_default();

    // Check if the user has items in the cart
    if !user.cart.items.is_empty() {
        // Create an order
        let order_items: Vec<Item> = user
            .cart
            .items
            .iter()
            .filter_map(|(item_id, quantity)| {
                if let Some(item) = self.items.get(item_id) {
                    Some(Item {
                        id: *item_id,
                        name: item.name.clone(),
                        price: item.price,
                    })
                } else {
                    None
                }
            })
            .collect();

        let total_price: f64 = order_items.iter().map(|item| item.price).sum();

        let order = Order {
            user: caller,
            items: order_items,
            total_price,
        };

        // Add the order to the list of orders
        self.orders.push(order);

        // Clear the user's cart
        user.cart.items.clear();
    }
}

// Other utility methods...

#[ic_cdk_macros::query]
fn canister_query() -> ECommerceService {
    ECommerceService::default()
}

#[ic_cdk_macros::update]
fn canister_update() {
    // Placeholder for any global initialization
}
