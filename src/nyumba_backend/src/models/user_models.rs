use candid::CandidType;
use serde::{Deserialize, Serialize};

use crate::enums::user_enums::*;

// Struct to hold user data common to all users
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct User {
    pub name: String,
    pub email: String,
    pub password: String,
    pub dob: String,
    pub photo_url: String,
    pub user_type: UserType,
    pub gender: Gender,
}

// Struct to represent normal users
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct NormalUser {
    pub user_data: User,
    pub normal_user_role: NormalUserRole,
    pub is_verified: bool,
    pub verification_documents: Vec<String>,
}

// Struct to represent buyers
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct Buyer {
    pub normal_user: NormalUser,
    pub cart: Vec<String>,
    pub orders: Vec<String>,
}

// Struct to represent sellers
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct Seller {
    pub normal_user: NormalUser,
    pub properties: Vec<String>,
    pub orders: Vec<String>,
}

// Struct to represent super users
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct SuperUser {
    pub user_data: User,
    pub super_user_role: SuperUserRole,
}

// Struct to represent admin users
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct Admin {
    pub super_user_role: SuperUser,
    pub work_role: AdminWorkRole,
}

// Struct to represent officials
#[derive(Debug)]
pub struct Official {
    pub super_user: SuperUser,
    pub work_role: OfficialWorkRole,
}
