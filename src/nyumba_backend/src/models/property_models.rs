use crate::enums::property_enums::{
    HouseSaleType, LandSaleType, LandSizeType, Location, PropertyType, RentalType, RoomUnitType,
};

use super::file_models::{MediaInfo, VerificationDocument};

// Struct for common data in properties
#[derive(Debug)]
pub struct Property {
    pub id: String,
    pub title: String,
    pub description: String,
    pub location: Location,
    pub address: String,
    pub price: f64,
    pub media: MediaInfo,
    pub documents: VerificationDocument,
    pub property_type: PropertyType,
}

// Struct for specific data in land properties
#[derive(Debug)]
pub struct LandData {
    pub size: LandSizeType,
}

// Struct for land sale properties
#[derive(Debug)]
pub struct SaleLand {
    pub land_data: LandData,
    pub sale_type: LandSaleType,
}

// Struct for land lease properties
#[derive(Debug)]
pub struct LeaseLand {
    pub land_data: LandData,
    pub lease_period: u32,
    pub monthly_charges: f64,
}

// Struct for specific data in houses
#[derive(Debug)]
pub struct HouseData {
    pub year_built: String,
    pub square_footage: f64,
}

// Struct for real estate sale properties
#[derive(Debug)]
pub struct RealEstate {
    pub house_data: HouseData,
    pub bedrooms: u32,
    pub bathrooms: u32,
    pub sale_type: HouseSaleType,
}

// Struct for rental properties
#[derive(Debug)]
pub struct Rental {
    pub house_data: HouseData,
    pub rooms_unit: RoomUnitType,
    pub bathrooms: u32,
    pub monthly_rent: f64,
    pub rental_type: RentalType,
}
