// Enum to represent the status of an order
#[allow(dead_code)]
#[derive(Debug)]
pub enum OrderStatus {
    Pending,
    Shipped,
    Delivered,
    Cancelled,
}

// Enum to represent the status of a Property in the cart
#[allow(dead_code)]
#[derive(Debug)]
pub enum CartPropertyStatus {
    InCart,
    Archived,
}
