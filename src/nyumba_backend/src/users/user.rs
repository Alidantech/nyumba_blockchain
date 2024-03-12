// Define a trait named 'User'
trait User {
    fn get_username(&self) -> &str;
    fn get_role(&self) -> &str;
    fn login(&self);
    fn logout(&self);
    fn get_bio_data(&self) -> &str;
}

// Define a struct named 'CommonUser' implementing the 'User' trait
struct CommonUser {
    username: String,
    role: String,
    bio_data: String,
}

// Implement the 'User' trait for 'CommonUser'
impl User for CommonUser {
    fn get_username(&self) -> &str {
        &self.username
    }

    fn get_role(&self) -> &str {
        &self.role
    }

    fn login(&self) {
        println!("{} is now logged in.", self.username);
    }

    fn logout(&self) {
        println!("{} has logged out.", self.username);
    }

    fn get_bio_data(&self) -> &str {
        &self.bio_data
    }
}

