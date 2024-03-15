use candid::CandidType;
use serde::{Deserialize, Serialize};

// Enum to represent the status of an order
#[allow(dead_code)]
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub enum OrderStatus {
    Pending,
    Confirmed,
    Accepted,
    Shipped,
    Delivered,
    Cancelled,
}

// Enum to represent the status of a Property in the cart
#[allow(dead_code)]
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub enum CartPropertyStatus {
    InCart,
    Archived,
}
