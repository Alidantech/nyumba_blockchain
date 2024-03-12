// Define a struct named 'Seller'
struct Seller {
    username: String,
}

// Implement the 'User' trait for 'Seller'
impl User for Seller {
    fn get_username(&self) -> &str {
        &self.username
    }

    fn get_role(&self) -> &str {
        "Seller"
    }
}