use crate::models::shop_models::Order;

// Trait for common order actions
pub trait CommonOrderActions {
    fn get_info(&self) -> &Order;
    fn update_info(&mut self, new_data: Order) -> bool;
    fn cancel_order(&mut self) -> bool;
}

// Trait for cart actions
pub trait CartActions {
    fn add_to_cart(&mut self, property_id: &str) -> bool;
    fn remove_from_cart(&mut self, property_id: &str) -> bool;
    fn view_cart(&self) -> Vec<String>;
    fn clear_cart(&mut self) -> bool;
}

// Trait for buyer order actions
pub trait BuyerOrderActions: CommonOrderActions {
    fn place_order(&mut self) -> bool;
    fn pay_for_order(&mut self, amount: f64) -> bool;
}

// Trait for seller order actions
pub trait SellerOrderActions: CommonOrderActions {
    fn accept_order(&mut self) -> bool;
    fn decline_order(&mut self) -> bool;
}

// Trait for admin order actions
pub trait AdminOrderActions: CommonOrderActions {
    fn confirm_order(&mut self) -> bool;
}
