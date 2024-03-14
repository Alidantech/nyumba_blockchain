use candid::CandidType;
use serde::{Deserialize, Serialize};

use crate::models::file_models::{MediaInfo, VerificationDocument};

// Enum to represent different types of files, including media and verification documents
#[allow(dead_code)]
#[derive(Debug, CandidType)]
pub enum FileType {
    Media(MediaInfo),
    VerificationDocument(VerificationDocument),
}

// Enum to represent different media types
#[allow(dead_code)]
#[derive(Debug, CandidType, Clone, Serialize, Deserialize)]
pub enum MediaType {
    Image,
    Video,
    PDF,
    Word,
    Other(String),
}


