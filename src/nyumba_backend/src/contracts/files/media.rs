use crate::enums::file_enums::MediaType;
use crate::models::file_models::MediaInfo;

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

// Implement CommonFileActions for MediaInfo
impl CommonFileActions for MediaInfo {
    fn get_info(&self) -> &MediaInfo {
        self
    }

    fn update_info(&mut self, new_data: MediaInfo) -> bool {
        // Update implementation
        *self = new_data;
        true
    }

    fn delete_file(&mut self) -> bool {
        // Delete implementation
        true
    }
}

// Implement MediaFileActions for MediaInfo
impl MediaFileActions for MediaInfo {
    fn set_media_info(&mut self, media_type: MediaType, url: &str) -> bool {
        // Media file actions implementation
        self.media_type = media_type;
        self.url = url.to_string();
        true
    }
}
