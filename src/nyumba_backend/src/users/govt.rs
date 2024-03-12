// Define a struct named 'Official'
struct Official {
    username: String,
}

// Implement the 'User' trait for 'Official'
impl User for Official {
    fn get_username(&self) -> &str {
        &self.username
    }

    fn get_role(&self) -> &str {
        "Official"
    }
}