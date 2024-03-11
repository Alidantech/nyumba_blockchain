import React from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import { NavigationData } from "../../types/NavItem";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import LandscapeRoundedIcon from "@mui/icons-material/LandscapeRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
// import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";

// Define navigation data for s
export const sellerNavigationData: NavigationData = [
  {
    route: "/products",
    icon: <StorefrontRoundedIcon />,
    title: "My Properties",
    currentPage: "Products",
    nested: [
      {
        route: "/properties/my-rental",
        title: "Rentals",
        currentPage: "rentals",
      },
      {
        route: "/properties/my-real-estate",
        title: "Real Estates",
        currentPage: "real-estates",
      },
      {
        route: "/properties/my-land",
        title: "Lands",
        currentPage: "lands",
      },
      {
        route: "/properties/my-lease-land",
        title: "Lease Lands",
        currentPage: "lease-land",
      },
    ],
  },
  {
    route: "/orders",
    icon: <AssignmentRoundedIcon />,
    title: "Orders",
    currentPage: "Orders",
  },
  // {
  //   route: "/customers",
  //   icon: <GroupRoundedIcon />,
  //   title: "Customers",
  //   currentPage: "Customers",
  // },
  {
    route: "/chat",
    icon: <ContactMailRoundedIcon />,
    title: "Chat",
    currentPage: "chat",
  },
  // {
  //   route: "/finance",
  //   icon: <AccountBalanceRoundedIcon />,
  //   title: "Finance",
  //   currentPage: "Finance",
  // },
];

// Define navigation data for govtAgents
export const govtAgentNavigationData: NavigationData = [
  // {
  //   route: "/cases",
  //   icon: <AssignmentRoundedIcon />,
  //   title: "Cases",
  //   currentPage: "govtAgentCases",
  // },
  {
    route: "/documents",
    icon: <ContactMailRoundedIcon />,
    title: "Documents",
    currentPage: "govtAgentDocuments",
    nested: [
      {
        route: "/documents/requests",
        title: "Requests",
        currentPage: "govtAgentDocumentRequests",
      },
      {
        route: "/documents/accepted",
        title: "Accepted",
        currentPage: "govtAgentDocumentAccepted",
      },
      {
        route: "/documents/declined",
        title: "Declined",
        currentPage: "govtAgentDocumentDeclined",
      },
    ],
  },
  {
    route: "/chat",
    icon: <QuestionAnswerRoundedIcon />,
    title: "Chat",
    currentPage: "chat",
    badge: 4,
  },
];

// Define navigation data for admin
export const adminNavigationData: NavigationData = [
  {
    route: "/orders",
    icon: <ShoppingCartRoundedIcon />,
    title: "Orders",
    currentPage: "orders",
  },
  {
    route: "/properties",
    icon: <AssignmentRoundedIcon />,
    title: "Properties",
    currentPage: "properties",
    nested: [
      {
        route: "/properties/rental",
        title: "Rentals",
        currentPage: "rentals",
      },
      {
        route: "/properties/real-estate",
        title: "Real Estates",
        currentPage: "real-estates",
      },
      {
        route: "/properties/land",
        title: "Lands",
        currentPage: "lands",
      },
      {
        route: "/properties/lease-land",
        title: "Lease Lands",
        currentPage: "lease-land",
      },
    ],
  },
  {
    route: "/users",
    icon: <GroupRoundedIcon />,
    title: "Users",
    currentPage: "users",
    nested: [
      {
        route: "/users/buyers",
        title: "Buyers",
        currentPage: "buyers",
      },
      {
        route: "/users/sellers",
        title: "Sellers",
        currentPage: "sellers",
      },
      {
        route: "/users/admins",
        title: "Admins",
        currentPage: "admins",
      },
      {
        route: "/users/govt",
        title: "Officials",
        currentPage: "govt",
      },
    ],
  },
  {
    route: "/chat",
    icon: <QuestionAnswerRoundedIcon />,
    title: "Messages",
    currentPage: "chat",
    badge: 4,
  },
];

// Define navigation data for buyers
export const buyerNavigationData: NavigationData = [
  {
    route: "/properties",
    icon: <BusinessRoundedIcon />,
    title: "Properties",
    currentPage: "properties",
    nested: [
      {
        route: "/properties/rental",
        title: "Rentals",
        currentPage: "rentals",
      },
      {
        route: "/properties/real-estate",
        title: "Real Estates",
        currentPage: "real-estates",
      },
      {
        route: "/properties/land",
        title: "Lands",
        currentPage: "lands",
      },
      {
        route: "/properties/lease-land",
        title: "Lease Lands",
        currentPage: "lease-land",
      },
    ],
  },
  {
    route: "/cart",
    icon: <ShoppingCartRoundedIcon />,
    title: "Cart",
    currentPage: "cart",
  },
  {
    route: "/orders",
    icon: <AssignmentRoundedIcon />,
    title: "My Orders",
    currentPage: "Orders",
  },
  {
    route: "/chat",
    icon: <QuestionAnswerRoundedIcon />,
    title: "Chat",
    currentPage: "chat",
  },
];
