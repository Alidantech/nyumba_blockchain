use super::{NormalUser, User, UserData, UserType, NormalUserRole, AccountCreator};

// Define a trait for seller-specific functionality
pub trait SellerActions {
    fn post_property(&mut self, property: &str);
    fn view_orders(&self);
    fn accept_order(&mut self, order: &str);
    fn decline_order(&mut self, order: &str);
}

// Struct to represent sellers
#[derive(Debug)]
pub struct Seller {
    pub normal_user: NormalUser,
    pub properties: Vec<String>,
    pub orders: Vec<String>,
}

// Implement the SellerActions trait for Seller
impl SellerActions for Seller {
    fn post_property(&mut self, property: &str) {
        println!("Seller {} posted a new property: {}", self.normal_user.user_data.name, property);
        self.properties.push(property.to_string());
    }

    fn view_orders(&self) {
        println!("TODO: Implement order viewing logic for Seller {}", self.normal_user.user_data.name);
        // Implement order viewing logic here
    }

    fn accept_order(&mut self, order: &str) {
        println!("TODO: Implement order acceptance logic for Seller {}", self.normal_user.user_data.name);
        // Implement order acceptance logic here
        // Move items from orders to accepted orders, etc.
    }

    fn decline_order(&mut self, order: &str) {
        println!("TODO: Implement order decline logic for Seller {}", self.normal_user.user_data.name);
        // Implement order decline logic here
        // Remove items from orders, etc.
    }
}

// Implementation of User trait for sellers
impl User for Seller {
    fn get_info(&self) -> String {
        format!("{}\nProperties: {:?}\nOrders: {:?}", self.normal_user.get_info(), self.properties, self.orders)
    }

    // TODO: Implement other User trait methods if needed
}

// Implement the AccountCreator trait for Seller
impl AccountCreator for Seller {
    fn create_account(
        name: &str,
        email: &str,
        password: &str,
        dob: &str,
        normal_user_role: NormalUserRole,
    ) -> Seller {
        Seller {
            normal_user: NormalUser::create_account(name, email, password, dob, normal_user_role),
            properties: Vec::new(),
            orders: Vec::new(),
        }
    }
}
