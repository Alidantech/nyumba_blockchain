// Module containing enums.
mod enums {
    pub mod file_enums;
    pub mod property_enums;
    pub mod shop_enums;
    pub mod user_enums;
}
// Module containing data models.
mod models {
    pub mod file_models;
    pub mod property_models;
    pub mod shop_models;
    pub mod user_models;
}

// main canister code is contained in this file
// Module containing contracts specifying the expected behavior of the canister functionalities.
mod contracts {
    pub(crate) mod files {
        pub mod media;
        pub mod verification;
    }
    mod properties {
        pub mod land;
        pub mod lease_land;
        pub mod real_estate;
        pub mod rental;
    }
    mod shop {
        pub mod cart;
        pub mod order;
    }
    mod users {
        pub mod admin;
        pub mod buyer;
        pub mod official;
        pub mod seller;
        pub mod user;
    }
}
// Module containing test cases for canister-related functionalities.
mod test {
    pub mod file_test;
    pub mod property_test;
    pub mod shop_test;
    pub mod user_test;
}

pub use contracts::files::media::{get_info, create_media};
