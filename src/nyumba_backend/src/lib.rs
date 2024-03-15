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

// main canister code is contained in this module
// Module containing contracts specifying the expected behavior of the canister functionalities.
mod contracts {
    pub(crate) mod files {
        pub mod property_verification;
        pub mod user_verification;
    }
    pub(crate) mod properties {
        pub mod land;
        pub mod lease_land;
        pub mod real_estate;
        pub mod rental;
    }
    pub(crate) mod shop {
        pub mod cart;
        pub mod order;
    }
    pub(crate) mod users {
        pub mod normal;
        pub mod super_user;
    }
}

// export all the methods in the contract so that they can be exposed by the canister
pub use contracts::files::property_verification::{
    create_property_verification, get_all_property_verifications, get_property_verification,
};

pub use contracts::files::user_verification::{
    create_user_verification, get_all_user_verifications, get_user_verification,
};

pub use contracts::properties::land::{
    create_sale_land, delete_sale_land, get_all_sale_lands, get_sale_land, update_sale_land,
};

pub use contracts::properties::rental::{
    create_rental, delete_rental, get_all_rentals, get_rental, update_rental,
};

pub use contracts::properties::lease_land::{
    create_lease_land, delete_lease_land, get_all_lease_lands, get_lease_land, update_lease_land,
};

pub use contracts::properties::real_estate::{
    create_real_estate, delete_real_estate, get_all_real_estates, get_real_estate,
    update_real_estate,
};

pub use contracts::shop::order::{
    accept_order, cancel_order, confirm_order, get_all_orders, get_order, get_orders_by_buyer_id,
    get_orders_by_seller_id, place_order,
};

pub use contracts::shop::cart::{
    add_item_to_cart, archive_cart_item, create_cart, like_cart_item, remove_item_from_cart,
    return_item_to_cart, view_cart_items,
};

pub use contracts::users::normal::{
    create_normal_user, delete_normal_user, get_normal_user, update_normal_user,
};

pub use contracts::users::super_user::{
    create_super_user, delete_super_user, get_super_user, update_super_user,
};
