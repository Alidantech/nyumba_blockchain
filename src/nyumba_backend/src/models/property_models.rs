use candid::CandidType;
use serde::{Deserialize, Serialize};

use crate::enums::property_enums::{
    HouseSaleType, LandSaleType, PropertyStatus, RentalType,
    RoomUnitType,
};

use super::file_models::{MediaInfo, VerificationDocument};

// Struct for common data in properties
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct Property {
    pub title: String,
    pub description: String,
    pub address: String,
    pub price: f64,
    pub status: PropertyStatus,
    pub location: String,
    pub media: MediaInfo,
    pub verification_documents: Vec<VerificationDocument>,
}

// Struct for specific data in land properties
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct LandData {
    pub property: Property,
    pub size: u64,
}

// Struct for land sale properties
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct SaleLand {
    pub land_data: LandData,
    pub sale_type: LandSaleType,
}

// Struct for land lease properties
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct LeaseLand {
    pub land_data: LandData,
    pub lease_period: u32,
    pub monthly_charges: f64,
}

// Struct for specific data in houses
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct HouseData {
    pub property: Property,
    pub year_built: String,
    pub square_footage: f64,
}

// Struct for real estate sale properties
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct RealEstate {
    pub house_data: HouseData,
    pub bedrooms: u32,
    pub bathrooms: u32,
    pub sale_type: HouseSaleType,
}

// Struct for rental properties
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct Rental {
    pub house_data: HouseData,
    pub rooms_unit: RoomUnitType,
    pub number_of_units: u32,
    pub bathrooms: u32,
    pub monthly_rent: f64,
    pub rental_type: RentalType,
}
