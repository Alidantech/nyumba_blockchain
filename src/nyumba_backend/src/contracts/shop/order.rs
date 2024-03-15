use ic_cdk::{query, update};
use std::cell::{Cell, RefCell};
use std::collections::HashMap;

use crate::enums::shop_enums::OrderStatus;
use crate::models::shop_models::Order;

thread_local! {
    static ORDERS: RefCell<HashMap<u64, Order>> = RefCell::new(HashMap::new());
    static NEXT_ID: Cell<u64> = Cell::new(0);
}

// 1. Place a new order
#[update]
pub fn place_order(order: Order) -> u64 {
    let order_id = NEXT_ID.get();
    NEXT_ID.set(order_id + 1);
    ORDERS.with(|orders| {
        orders.borrow_mut().insert(order_id, order);
    });
    order_id
}

// 2. Cancel an order by ID
#[update]
pub fn cancel_order(order_id: u64) -> bool {
    ORDERS.with(|orders| {
        if let Some(order) = orders.borrow_mut().get_mut(&order_id) {
            order.status = OrderStatus::Cancelled;
            true
        } else {
            false
        }
    })
}

// 3. Confirm an order by ID
#[update]
pub fn confirm_order(order_id: u64) -> bool {
    ORDERS.with(|orders| {
        if let Some(order) = orders.borrow_mut().get_mut(&order_id) {
            order.status = OrderStatus::Confirmed;
            true
        } else {
            false
        }
    })
}

// 4. Accept an order by ID
#[update]
pub fn accept_order(order_id: u64) -> bool {
    ORDERS.with(|orders| {
        if let Some(order) = orders.borrow_mut().get_mut(&order_id) {
            order.status = OrderStatus::Accepted;
            true
        } else {
            false
        }
    })
}

// 5. Get order information by ID
#[query]
pub fn get_order(order_id: u64) -> Option<Order> {
    ORDERS.with(|orders| orders.borrow().get(&order_id).cloned())
}

// 6. Get all orders
#[query]
pub fn get_all_orders() -> Vec<Order> {
    ORDERS.with(|orders| orders.borrow().values().cloned().collect())
}

// 7. Get orders by user ID
#[query]
pub fn get_orders_by_buyer_id(user_id: u64) -> Vec<Order> {
    ORDERS.with(|orders| {
        orders
            .borrow()
            .values()
            .filter(|order| order.buyer_id == user_id)
            .cloned()
            .collect()
    })
}

// 8. Get orders by seller ID
#[query]
pub fn get_orders_by_seller_id(seller_id: u64) -> Vec<Order> {
    ORDERS.with(|orders| {
        orders
            .borrow()
            .values()
            .filter(|order| order.seller_id == seller_id)
            .cloned()
            .collect()
    })
}