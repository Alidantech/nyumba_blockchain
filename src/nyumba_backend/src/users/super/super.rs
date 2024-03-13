use super::{User, UserData, UserType, SuperUserRole};

// Define a trait for account creation
pub trait AccountCreator {
    fn create_account(
        name: &str,
        email: &str,
        password: &str,
        dob: &str,
        work_role: &str,
        super_user_role: SuperUserRole,
    ) -> Self;
}



// Struct to represent super users
#[derive(Debug)]
pub struct SuperUser {
    pub user_data: UserData,
    pub super_user_role: SuperUserRole,
    pub work_role: String,
}

// Implement the AccountCreator trait for SuperUser
impl AccountCreator for SuperUser {
    fn create_account(
        name: &str,
        email: &str,
        password: &str,
        dob: &str,
        work_role: &str,
        super_user_role: SuperUserRole,
    ) -> SuperUser {
        SuperUser {
            user_data: UserData {
                name: name.to_string(),
                email: email.to_string(),
                password: password.to_string(),
                dob: dob.to_string(),
                user_type: UserType::SuperUser,
            },
            super_user_role,
            work_role: work_role.to_string(),
        }
    }
}

