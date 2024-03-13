use super::{SuperUser, User, UserData, UserType, SuperUserRole, AccountCreator};

// Define a trait for admin-specific functionality
pub trait AdminActions {
    fn create_super_user(&mut self, name: &str, email: &str, password: &str, dob: &str, work_role: &str);
    fn verify_user(&mut self, user: &mut User);
    fn unverify_user(&mut self, user: &mut User);
    fn view_seller_properties(&self);
    fn flag_seller_properties(&mut self, property: &str, flag: &str);
    fn view_orders(&self);
    fn confirm_orders(&mut self, order: &str);
}

// Struct to represent admin users
#[derive(Debug)]
pub struct Admin {
    pub super_user: SuperUser,
}

// Implement the AdminActions trait for Admin
impl AdminActions for Admin {
    fn create_super_user(&mut self, name: &str, email: &str, password: &str, dob: &str, work_role: &str) {
        // TODO: Implement logic to create super users with work_role "ceo"
        // Only admins with work_role "ceo" should be able to create super users
    }

    fn verify_user(&mut self, user: &mut User) {
        // TODO: Implement logic to verify normal users
    }

    fn unverify_user(&mut self, user: &mut User) {
        // TODO: Implement logic to unverify normal users
    }

    fn view_seller_properties(&self) {
        // TODO: Implement logic to view properties posted by sellers
    }

    fn flag_seller_properties(&mut self, property: &str, flag: &str) {
        // TODO: Implement logic to flag properties as [legit, scam, unclear]
    }

    fn view_orders(&self) {
        // TODO: Implement logic to view orders
    }

    fn confirm_orders(&mut self, order: &str) {
        // TODO: Implement logic to confirm orders
    }
}

// Implementation of User trait for admin users
impl User for Admin {
    fn get_info(&self) -> String {
        format!("{}", self.super_user.get_info())
    }

    // TODO: Implement other User trait methods if needed
}

// Implement the AccountCreator trait for Admin
impl AccountCreator for Admin {
    fn create_account(
        name: &str,
        email: &str,
        password: &str,
        dob: &str,
        work_role: &str,
        super_user_role: SuperUserRole,
    ) -> Admin {
        Admin {
            super_user: SuperUser::create_account(name, email, password, dob, work_role, super_user_role),
        }
    }
}
