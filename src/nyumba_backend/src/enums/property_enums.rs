use crate::models::property_models::{LeaseLand, RealEstate, Rental, SaleLand};
use candid::CandidType;
use serde::{Deserialize, Serialize};

// Type of a property can be a land or a house
#[allow(dead_code)]
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub enum PropertyType {
    House(HouseType),
    Land(LandType),
}

// Type of a property can be a land or a house
#[allow(dead_code)]
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub enum HouseType {
    Rental(Rental),
    RealEstate(RealEstate),
}

// Type of a property can be a land or a house
#[allow(dead_code)]
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub enum LandType {
    Lease(LeaseLand),
    Sale(SaleLand),
}

// Enum to represent location in logitude and latitude
#[allow(dead_code)]
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub enum Location {
    Longitude,
    Latitude,
}

// The types of rooms available
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
#[allow(dead_code)]
pub enum RoomUnitType {
    Bedsitter,
    Rooms,    
    Bedrooms, 
}

// The types for land size
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
#[allow(dead_code)]
pub enum LandSizeType {
    SquareMeter(f64),
    SquareFoot(f64),
    Acre(f64),
    Hectare(f64),
    Custom(String),
}

// Enum to represent the type of land sale
#[allow(dead_code)]
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub enum LandSaleType {
    ForSale,
    Auction,
}

// Enum to represent the type of house sale
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
#[allow(dead_code)]

pub enum HouseSaleType {
    ForSale,
    Auction,
    Tokenize,
}

// Enum to represent the type of rental
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
#[allow(dead_code)]

pub enum RentalType {
    ShortTerm,
    LongTerm,
}

#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
#[allow(dead_code)]

pub enum PropertyStatus {
    Sold,
    Rented,
    Available,
    Pending,
    UnAvailable,
}
