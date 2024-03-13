// Define the User trait with common methods for all users
pub trait User {
    fn get_info(&self) -> String;
    fn login(&self);
    fn logout(&self);
    fn update_info(&mut self, new_email: &str, new_password: &str, new_dob: &str);
    fn delete_account(&mut self);
}

// Enum to represent the type of user (normal user or super user)
#[derive(Debug)]
pub enum UserType {
    NormalUser,
    SuperUser,
}

// Struct to hold user data common to all users
#[derive(Debug)]
pub struct UserData {
    pub name: String,
    pub email: String,
    pub password: String,
    pub dob: String,
    pub user_type: UserType,
}

// Enum to represent the role of normal users (buyer or seller)
#[derive(Debug)]
pub enum NormalUserRole {
    Buyer,
    Seller,
}

// Enum to represent the role of super users (admin or official)
#[derive(Debug)]
pub enum SuperUserRole {
    Admin,
    Official,
}

// Enum to represent gender
#[derive(Debug)]
pub enum Gender {
    Male,
    Female,
    Other,
}

