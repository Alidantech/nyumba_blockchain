use super::{NormalUser, User, UserData, UserType, NormalUserRole, AccountCreator};

// Define a trait for buyer-specific functionality
pub trait BuyerActions {
    fn view_properties(&self);
    fn add_to_cart(&mut self, property: &str);
    fn place_order(&mut self);
    fn cancel_order(&mut self);
    fn pay_for_items(&mut self);
}

// Struct to represent buyers
#[derive(Debug)]
pub struct Buyer {
    pub normal_user: NormalUser,
    pub cart: Vec<String>,
    pub orders: Vec<String>,
}

// Implement the BuyerActions trait for Buyer
impl BuyerActions for Buyer {
    fn view_properties(&self) {
        println!("TODO: Implement property viewing logic for Buyer {}", self.normal_user.user_data.name);
        // Implement property viewing logic here
    }

    fn add_to_cart(&mut self, property: &str) {
        println!("Buyer {} added property {} to the cart.", self.normal_user.user_data.name, property);
        self.cart.push(property.to_string());
    }

    fn place_order(&mut self) {
        println!("TODO: Implement order placement logic for Buyer {}", self.normal_user.user_data.name);
        // Implement order placement logic here
        // Move items from cart to orders, etc.
    }

    fn cancel_order(&mut self) {
        println!("TODO: Implement order cancellation logic for Buyer {}", self.normal_user.user_data.name);
        // Implement order cancellation logic here
        // Remove items from orders, etc.
    }

    fn pay_for_items(&mut self) {
        println!("TODO: Implement payment logic for Buyer {}", self.normal_user.user_data.name);
        // Implement payment logic here
    }
}

// Implementation of User trait for buyers
impl User for Buyer {
    fn get_info(&self) -> String {
        format!("{}\nCart: {:?}\nOrders: {:?}", self.normal_user.get_info(), self.cart, self.orders)
    }

    // TODO: Implement other User trait methods if needed
}

// Implement the AccountCreator trait for Buyer
impl AccountCreator for Buyer {
    fn create_account(
        name: &str,
        email: &str,
        password: &str,
        dob: &str,
        normal_user_role: NormalUserRole,
    ) -> Buyer {
        Buyer {
            normal_user: NormalUser::create_account(name, email, password, dob, normal_user_role),
            cart: Vec::new(),
            orders: Vec::new(),
        }
    }
}
