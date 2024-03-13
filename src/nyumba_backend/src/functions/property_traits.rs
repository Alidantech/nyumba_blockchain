use crate::{enums::property_enums::*, models::property_models::Property};

// Trait for common property actions
pub trait CommonPropertyActions {
    fn get_info(&self) -> &Property;
    fn update_info(&mut self, new_data: Property) -> bool;
    fn delete_property(&mut self) -> bool;
}

// Trait for land property actions
pub trait LandActions: CommonPropertyActions {
    fn set_land_data(&mut self, size: LandSizeType) -> bool;
}

// Trait for sale land property actions
pub trait SaleLandActions: LandActions {
    fn set_sale_type(&mut self, sale_type: LandSaleType) -> bool;
}

// Trait for lease land property actions
pub trait LeaseLandActions: LandActions {
    fn set_lease_terms(&mut self, lease_period: u32, monthly_charges: f64) -> bool;
}

// Trait for house property actions
pub trait HouseActions: CommonPropertyActions {
    fn set_house_data(&mut self, year_built: &str, square_footage: f64) -> bool;
}

// Trait for real estate property actions
pub trait RealEstateActions: HouseActions {
    fn set_real_estate_details(&mut self, bedrooms: u32, bathrooms: u32, sale_type: HouseSaleType) -> bool;
}

// Trait for rental property actions
pub trait RentalActions: HouseActions {
    fn set_rental_details(&mut self, rooms_unit: RoomUnitType, bathrooms: u32, rental_type: RentalType, monthly_rent: f64) -> bool;
}
