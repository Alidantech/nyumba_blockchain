// Define a struct named 'Admin'
struct Admin {
    username: String,
}

// Implement the 'User' trait for 'Admin'
impl User for Admin {
    fn get_username(&self) -> &str {
        &self.username
    }

    fn get_role(&self) -> &str {
        "Admin"
    }
}