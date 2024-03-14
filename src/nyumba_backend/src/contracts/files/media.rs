use crate::models::file_models::MediaInfo;
use ic_cdk::{query, update};
use std::{
    cell::{Cell, RefCell},
    collections::HashMap,
};

// Thread and map for storing media
thread_local! {
    static MEDIA_INFO: RefCell<HashMap<u64, MediaInfo>> = RefCell::default();
    static NEXT_ID: Cell<u64> = Cell::new(0);
}


#[update]
pub fn create_media(new_media: MediaInfo) -> u64 {
    NEXT_ID.with(|next_id| {
        let id = next_id.get();
        next_id.set(id + 1);
        MEDIA_INFO.with(|media_info| {
            media_info.borrow_mut().insert(id, new_media);
        });
        id
    })
}

#[query]
pub fn get_info(id: u64) -> Option<MediaInfo> {
    MEDIA_INFO.with(|media_info| media_info.borrow().get(&id).cloned())
}
