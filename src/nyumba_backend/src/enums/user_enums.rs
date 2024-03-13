// Define user types
#[allow(dead_code)]
#[derive(Debug)]
pub enum UserType {
    NormalUser, 
    SuperUser,  
}

// Define gender options
#[allow(dead_code)]
#[derive(Debug)]
pub enum Gender {
    Male,
    Female,
    Other,
}

// Define roles for normal users
#[allow(dead_code)]
#[derive(Debug)]
pub enum NormalUserRole {
    Buyer,  
    Seller, 
}

// Define roles for super users
#[allow(dead_code)]
#[derive(Debug)]
pub enum SuperUserRole {
    Admin,   
    Official,
}

// Define work roles for admin users
#[allow(dead_code)]
#[derive(Debug)]
pub enum AdminWorkRole {
    CEO,     
    Manager, 
    Employee,
}

// Define work roles for official users
#[allow(dead_code)]
#[derive(Debug)]
pub enum OfficialWorkRole {
    NCA,
    LandOffices,
    CountyGovernment,
}
