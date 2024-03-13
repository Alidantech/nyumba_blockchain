use crate::enums::shop_enums::{CartPropertyStatus, OrderStatus};

// Struct to represent an order
#[derive(Debug)]
pub struct Order {
    pub order_id: u64,
    pub properties_id: Vec<String>,
    pub status: OrderStatus,
    pub total_amount: u64,
}

// Struct to represent a Property in the cart
#[derive(Debug)]
pub struct CartProperty {
    pub property_id: String,
    pub quantity: u32,
    pub is_liked: bool,
    pub status: CartPropertyStatus,
}

// Struct to represent a shopping cart
#[derive(Debug)]
pub struct Cart {
    pub cart_id: String,
    pub properties: Vec<CartProperty>,
}
