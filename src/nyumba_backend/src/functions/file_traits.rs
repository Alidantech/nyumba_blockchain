use crate::{enums::file_enums::*, models::file_models::MediaInfo};

// Trait for common file actions
pub trait CommonFileActions {
    fn get_info(&self) -> &MediaInfo;
    fn update_info(&mut self, new_data: MediaInfo) -> bool;
    fn delete_file(&mut self) -> bool;
}

// Trait for media file actions
pub trait MediaFileActions: CommonFileActions {
    fn set_media_info(&mut self, media_type: MediaType, url: &str) -> bool;
}

// Trait for verification document actions
pub trait VerificationDocumentActions: CommonFileActions {
    fn set_verification_info(
        &mut self,
        date_updated: &str,
        is_verified: bool,
        is_declined: bool,
        media: MediaInfo,
    ) -> bool;
}
