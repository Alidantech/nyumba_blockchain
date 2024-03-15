// use crate::orders::{Order, Cart};
// use crate::users::{Buyer, Seller};
// use crate::properties::Property;

// fn main() {
//     // Buyer placing an order
//     let mut buyer = Buyer::create_account("John", "john@example.com", "password", "1990-01-01", Gender::Male);
//     let property_id = "abc123";
//     buyer.add_to_cart(property_id);
//     buyer.place_order(property_id);

//     // Seller viewing and managing orders
//     let mut seller = Seller::create_account("Alice", "alice@example.com", "password", "1985-05-15", Gender::Female);
//     let orders = seller.view_orders();
//     for order_id in orders {
//         seller.accept_order(&order_id);
//     }
// }
