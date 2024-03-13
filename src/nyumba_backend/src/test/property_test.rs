// use crate::properties::{Property, SaleLand, LeaseLand, RealEstate, Rental};
// use crate::enums::property_enums::*;

// fn main() {
//     // Common property actions
//     let mut property = Property::new("Nice House", "A beautiful house with a garden", Location::Latitude, "123 Main St", 150000.0);
//     property.update_info(PropertyData {
//         title: "Upgraded House".to_string(),
//         description: "An even more beautiful house with added features".to_string(),
//         location: Location::Longitude,
//         address: "456 Side St".to_string(),
//         price: 200000.0,
//         ..Default::default()
//     });

//     // Land property actions
//     let mut sale_land = SaleLand::new("Big Land", "A large piece of land for sale", Location::Longitude, "789 End St", 1000000.0);
//     sale_land.set_land_data(LandSizeType::Acre);

//     // Lease land property actions
//     let mut lease_land = LeaseLand::new("Leased Land", "A land available for lease", Location::Latitude, "101 Leasing St", 500.0);
//     lease_land.set_land_data(LandSizeType::SquareMeter);
//     lease_land.set_lease_terms(12, 100.0);

//     // Real estate property actions
//     let mut real_estate = RealEstate::new("Modern Home", "A contemporary home with advanced features", Location::Longitude, "202 Modern Ave", 300000.0);
//     real_estate.set_house_data("2020", 1800.0);
//     real_estate.set_real_estate_details(3, 2, HouseSaleType::ForSale);

//     // Rental property actions
//     let mut rental = Rental::new("Cozy Apartment", "A small apartment with comfortable living spaces", Location::Latitude, "303 Cozy Blvd", 1200.0);
//     rental.set_house_data("2015", 1, 1);
//     rental.set_rental_details(RoomUnitType::Bedsitter, 1, RentalType::LongTerm);
// }
