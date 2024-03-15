// use crate::users::{Admin, Buyer, NormalUser, Official, Seller, SuperUser};
// use crate::enums::user_enums::*;

// fn main() {
//     // Normal user actions
//     let mut normal_user = NormalUser::create_account("Bob", "bob@example.com", "password", "1995-08-22", Gender::Other);
//     normal_user.verify_account(vec!["doc1".to_string(), "doc2".to_string()]);

//     // Buyer actions
//     let mut buyer = Buyer::create_account("Charlie", "charlie@example.com", "password", "1998-03-10", Gender::Male);
//     buyer.add_to_cart("xyz456");
//     buyer.place_order("xyz456");

//     // Seller actions
//     let mut seller = Seller::create_account("Eve", "eve@example.com", "password", "1980-12-05", Gender::Female);
//     seller.post_property("xyz456");

//     // Super user actions
//     let mut super_user = SuperUser::create_account("Admin", "admin@example.com", "adminpassword", "1975-01-30", Gender::Male);
//     super_user.create_user("NewUser", "newuser@example.com", "newuserpassword", "2000-06-18");

//     // Admin actions
//     let mut admin = Admin::create_account("CEOAdmin", "ceo@admin.com", "ceopassword", "1960-10-25", AdminWorkRole::CEO);
//     admin.assign_work_role("newuser@example.com", AdminWorkRole::Employee);

//     // Official actions
//     let mut official = Official::create_account("NCAOfficial", "nca@official.com", "officialpassword", "1988-07-15", OfficialWorkRole::NCA);
//     official.view_properties();
// }
