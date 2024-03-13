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

// Module containing traits defining functions related to canister actions and behavior.
mod functions {
    pub mod file_traits;
    pub mod property_traits;
    pub mod shop_traits;
    pub mod user_traits;
}

// main canister code is contained in this file
// Module containing contracts specifying the expected behavior of the canister functionalities.
mod contracts {
    mod files {
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
    }
}

// Module containing test cases for canister-related functionalities.
mod test {
    pub mod file_test;
    pub mod property_test;
    pub mod shop_test;
    pub mod user_test;
}


