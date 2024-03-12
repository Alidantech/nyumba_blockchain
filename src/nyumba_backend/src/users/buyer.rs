// Define a struct named 'Buyer'
struct Buyer {
    username: String,
}

// Implement the 'User' trait for 'Buyer'
impl User for Buyer {
    fn get_username(&self) -> &str {
        &self.username
    }

    fn get_role(&self) -> &str {
        "Buyer"
    }
}