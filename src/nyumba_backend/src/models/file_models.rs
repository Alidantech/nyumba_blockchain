use candid::CandidType;
use serde::{Deserialize, Serialize};
use crate::enums::file_enums::MediaType;

// media file data
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct MediaInfo {
    pub media_type: MediaType,
    pub url: String,
}

// verification document data
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct VerificationDocument {
    pub id: String,
    pub date_updated: String,
    pub is_verified: bool,
    pub is_declined: bool,
    pub media: MediaInfo,
}
