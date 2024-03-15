use candid::CandidType;
use serde::{Deserialize, Serialize};

use crate::enums::shop_enums::{CartPropertyStatus, OrderStatus};

// Struct to represent an order
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct Order {
    pub buyer_id: u64,
    pub seller_id: u64,
    pub properties_id: Vec<u64>,
    pub status: OrderStatus,
    pub shipping: ShippingDetails,
    pub total_amount: f64,
}

#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct ShippingDetails {
    pub country: String,
    pub city: String,
    pub county: String,
    pub zip_code: String,
    pub address: String,
}
// Struct to represent a Property in the cart
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct CartProperty {
    pub property_id: u64,
    pub quantity: u32,
    pub is_liked: bool,
    pub status: CartPropertyStatus,
}

// Struct to represent a shopping cart
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct Cart {
    pub user_id: u64,
    pub properties: Option<Vec<CartProperty>>,
}
