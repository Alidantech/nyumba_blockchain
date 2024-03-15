// // Assuming MediaInfo struct definition
// #[derive(Debug)]
// pub struct MediaInfo {
//     filename: String,
//     media_type: MediaType,
//     url: String,
// }

// impl MediaInfo {
//     // Constructor method for MediaInfo
//     pub fn new(filename: &str) -> Self {
//         MediaInfo {
//             filename: filename.to_string(),
//             media_type: MediaType::Image,  // Set a default value, adjust as needed
//             url: String::new(),  // Set a default value, adjust as needed
//         }
//     }

//     // Getter method to retrieve media information
//     pub fn get_info(&self) -> &MediaInfo {
//         self
//     }

//     // Setter method to set media information
//     pub fn set_media_info(&mut self, media_type: MediaType, url: &str) {
//         self.media_type = media_type;
//         self.url = url.to_string();
//     }
// }

// // Assuming MediaType enum definition
// #[derive(Debug)]
// pub enum MediaType {
//     Image,
//     Video,
//     // Add more variants as needed
// }

// fn main() {
//     // Media file actions
//     let mut media_file = MediaInfo::new("image1.jpg");
//     media_file.set_media_info(MediaType::Image, "https://example.com/images/image1.jpg");

//     // Access media information
//     println!("{:?}", media_file.get_info());
// }

