use super::{SuperUser, User, UserData, UserType, SuperUserRole, AccountCreator};

// Define a trait for official-specific functionality
pub trait OfficialActions {
    fn view_properties(&self);
    fn view_property_documents(&self, property: &str);
    fn verify_property_documents(&mut self, property: &str);
    fn decline_property_documents(&mut self, property: &str);
}

// Enum to represent official work roles
#[derive(Debug)]
pub enum OfficialWorkRole {
    NCA,
    LandOffices,
    CountyGovernment,
}

// Struct to represent officials
#[derive(Debug)]
pub struct Official {
    pub super_user: SuperUser,
    pub work_role: OfficialWorkRole,
}

// Implement the OfficialActions trait for Official
impl OfficialActions for Official {
    fn view_properties(&self) {
        // TODO: Implement logic to view properties based on work_role
    }

    fn view_property_documents(&self, property: &str) {
        // TODO: Implement logic to view property documents
    }

    fn verify_property_documents(&mut self, property: &str) {
        // TODO: Implement logic to verify property documents
    }

    fn decline_property_documents(&mut self, property: &str) {
        // TODO: Implement logic to decline property documents
    }
}

// Implementation of User trait for officials
impl User for Official {
    fn get_info(&self) -> String {
        format!("{}\nWork Role: {:?}", self.super_user.get_info(), self.work_role)
    }

    // TODO: Implement other User trait methods if needed
}

// Implement the AccountCreator trait for Official
impl AccountCreator for Official {
    fn create_account(
        name: &str,
        email: &str,
        password: &str,
        dob: &str,
        work_role: &str,
        super_user_role: SuperUserRole,
    ) -> Official {
        Official {
            super_user: SuperUser::create_account(name, email, password, dob, work_role, super_user_role),
            work_role: match work_role {
                "NCA" => OfficialWorkRole::NCA,
                "LandOffices" => OfficialWorkRole::LandOffices,
                "CountyGovernment" => OfficialWorkRole::CountyGovernment,
                _ => panic!("Invalid work role for Official"),
            },
        }
    }
}
