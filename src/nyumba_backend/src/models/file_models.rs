use candid::CandidType;
use crate::enums::file_enums::MediaType;

// media file data
#[derive(CandidType, Debug)]
pub struct MediaInfo {
    pub media_type: MediaType,
    pub url: String,
}

// verification document data
#[derive(CandidType, Debug)]
pub struct VerificationDocument {
    pub id: String,
    pub date_updated: String,
    pub is_verified: bool,
    pub is_declined: bool,
    pub media: MediaInfo,
}
