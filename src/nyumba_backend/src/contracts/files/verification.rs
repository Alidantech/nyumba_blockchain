use crate::{
    functions::file_traits::{CommonFileActions, VerificationDocumentActions},
    models::file_models::{MediaInfo, VerificationDocument},
};

impl VerificationDocumentActions for VerificationDocument {
    fn set_verification_info(
        &mut self,
        date_updated: &str,
        is_verified: bool,
        is_declined: bool,
        media: MediaInfo,
    ) -> bool {
        // Verification document actions implementation
        self.date_updated = date_updated.to_string();
        self.is_verified = is_verified;
        self.is_declined = is_declined;
        self.media = media;
        true
    }
}

// Implement CommonFileActions for VerificationDocument
impl CommonFileActions for VerificationDocument {
    fn get_info(&self) -> &MediaInfo {
        &self.media
    }

    fn update_info(&mut self, new_data: MediaInfo) -> bool {
        // Update implementation
        self.media = new_data;
        true
    }

    fn delete_file(&mut self) -> bool {
        // Delete implementation
        true
    }
}
