use crate::{enums::user_enums::{AdminWorkRole, Gender}, models::{property_models::Property, user_models::*}};

// Trait for common user actions
pub trait CommonUserActions {
    fn get_info(&self) -> &UserData;
    fn login(&self, email: &str, password: &str) -> bool;
    fn logout(&self) -> bool;
    fn update_info(&mut self, new_data: UserData) -> bool;
    fn delete_account(&mut self) -> bool;
}

// Trait for normal user actions
pub trait NormalUserActions: CommonUserActions {
    fn create_account(
        name: &str,
        email: &str,
        password: &str,
        dob: &str,
        gender: Gender,
    ) -> Self;
    fn verify_account(&mut self, documents: Vec<String>) -> bool;
}

// Trait for buyer actions
pub trait BuyerActions: NormalUserActions {
    fn add_to_cart(&mut self, property_id: &str) -> bool;
    fn place_order(&mut self, property_id: &str) -> bool;
    fn cancel_order(&mut self, order_id: &str) -> bool;
    fn pay_for_items(&mut self, order_id: &str, amount: f64) -> bool;
}

// Trait for seller actions
pub trait SellerActions: NormalUserActions {
    fn post_property(&mut self, property: &Property) -> bool;
    fn view_orders(&self) -> Vec<Property>;
    fn accept_order(&mut self, order_id: &str) -> bool;
    fn decline_order(&mut self, order_id: &str) -> bool;
}

// Trait for super user actions
pub trait SuperUserActions: CommonUserActions {
    fn create_user(&mut self, name: &str, email: &str, password: &str, dob: &str) -> bool;
    fn verify_user(&mut self, user_id: &str) -> bool;
    fn unverify_user(&mut self, user_id: &str) -> bool;
    fn view_seller_properties(&self) -> Vec<String>;
    fn flag_seller_property(&mut self, property_id: &str, flag: &str) -> bool;
    fn view_orders(&self) -> Vec<String>;
    fn confirm_order(&mut self, order_id: &str) -> bool;
}

// Trait for admin actions
pub trait AdminActions: SuperUserActions {
    fn assign_work_role(&mut self, user_id: &str, work_role: AdminWorkRole) -> bool;
}

// Trait for official actions
pub trait OfficialActions: SuperUserActions {
    fn view_properties(&self) -> Vec<String>;
    fn verify_property_documents(&mut self, property_id: &str) -> bool;
    fn decline_property_documents(&mut self, property_id: &str) -> bool;
    fn flag_property(&mut self, property_id: &str, flag: &str) -> bool;
}
