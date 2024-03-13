// Struct to represent normal users
#[derive(Debug)]
pub struct NormalUser {
    pub user_data: UserData,
    pub normal_user_role: NormalUserRole,
    pub is_verified: bool,
    pub verification_documents: Vec<String>,
}

// Define a trait for account creation
pub trait AccountCreator {
    fn create_account(
        name: &str,
        email: &str,
        password: &str,
        dob: &str,
        normal_user_role: NormalUserRole,
    ) -> NormalUser;
}

impl AccountCreator for NormalUser {
    fn create_account(
        name: &str,
        email: &str,
        password: &str,
        dob: &str,
        normal_user_role: NormalUserRole,
    ) -> NormalUser {
        NormalUser {
            user_data: UserData {
                name: name.to_string(),
                email: email.to_string(),
                password: password.to_string(),
                dob: dob.to_string(),
                user_type: UserType::NormalUser,
            },
            normal_user_role,
            is_verified: false,
            verification_documents: Vec::new(),
        }
    }
}

