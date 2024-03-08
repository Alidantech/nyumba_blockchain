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
    route: "/dashboard//products",
    icon: <StorefrontRoundedIcon />,
    title: " Products",
    currentPage: "Products",
  },
  {
    route: "/dashboard//orders",
    icon: <AssignmentRoundedIcon />,
    title: "Orders",
    currentPage: "Orders",
  },
  {
    route: "/dashboard//customers",
    icon: <GroupRoundedIcon />,
    title: "Customers",
    currentPage: "Customers",
  },
  {
    route: "/dashboard//messages",
    icon: <ContactMailRoundedIcon />,
    title: "Messages",
    currentPage: "Messages",
  },
  {
    route: "/dashboard//finance",
    icon: <AccountBalanceRoundedIcon />,
    title: "Finance",
    currentPage: "Finance",
  },
  {
    route: "/dashboard//settings",
    icon: <SettingsRoundedIcon />,
    title: " Settings",
    currentPage: "Settings",
  },
];

// Define navigation data for govtAgents
export const govtAgentNavigationData: NavigationData = [
  {
    route: "/dashboard/govtAgent/cases",
    icon: <AssignmentRoundedIcon />,
    title: "Cases",
    currentPage: "govtAgentCases",
  },
  {
    route: "/dashboard/govtAgent/documents",
    icon: <ContactMailRoundedIcon />,
    title: "Documents",
    currentPage: "govtAgentDocuments",
    nested: [
      {
        route: "/dashboard/govtAgent/documents/requests",
        title: "Requests",
        currentPage: "govtAgentDocumentRequests",
      },
      {
        route: "/dashboard/govtAgent/documents/accepted",
        title: "Accepted",
        currentPage: "govtAgentDocumentAccepted",
      },
      {
        route: "/dashboard/govtAgent/documents/declined",
        title: "Declined",
        currentPage: "govtAgentDocumentDeclined",
      },
    ],
  },
  {
    route: "/dashboard/chat",
    icon: <QuestionAnswerRoundedIcon />,
    title: "chat",
    currentPage: "chat",
    badge: 4,
  },
];

// Define navigation data for admin
export const adminNavigationData: NavigationData = [
  {
    route: "/dashboard/orders",
    icon: <ShoppingCartRoundedIcon />,
    title: "Orders",
    currentPage: "orders",
  },
  {
    route: "/dashboard/tasks",
    icon: <AssignmentRoundedIcon />,
    title: "Tasks",
    currentPage: "tasks",
    nested: [
      {
        route: "/dashboard/tasks/all",
        title: "All tasks",
        currentPage: "allTasks",
      },
      {
        route: "/dashboard/tasks/backlog",
        title: "Backlog",
        currentPage: "backlog",
      },
      {
        route: "/dashboard/tasks/in-progress",
        title: "In progress",
        currentPage: "inProgress",
      },
      { route: "/dashboard/tasks/done", title: "Done", currentPage: "done" },
    ],
  },
  {
    route: "/dashboard/chat",
    icon: <QuestionAnswerRoundedIcon />,
    title: "Messages",
    currentPage: "chat",
    badge: 4,
  },
  {
    route: "/dashboard/users",
    icon: <GroupRoundedIcon />,
    title: "Users",
    currentPage: "users",
    nested: [
      {
        route: "/dashboard/profile",
        title: "My Profile",
        currentPage: "profile",
      },
      {
        route: "/dashboard/users/new",
        title: "Create a new user",
        currentPage: "createUser",
      },
      {
        route: "/dashboard/users/roles",
        title: "Roles & Permissions",
        currentPage: "rolesPermissions",
      },
    ],
  },
];

// Define navigation data for buyers
export const buyerNavigationData: NavigationData = [
  {
    route: "/dashboard/properties",
    icon: <BusinessRoundedIcon />,
    title: "Properties",
    currentPage: "buyerProperties",
    nested: [
      {
        route: "/dashboard/rentals",
        title: "Rentals",
        currentPage: "buyerRentals",
      },
      {
        route: "/dashboard/lands",
        title: "Lands",
        currentPage: "buyerLands",
      },
      {
        route: "/dashboard/houses",
        title: "Houses",
        currentPage: "buyerHouses",
      },
      {
        route: "/dashboard/real-estates",
        title: "Real Estates",
        currentPage: "buyerRealEstates",
      },
    ],
  },
  {
    route: "/dashboard/cart",
    icon: <ShoppingCartRoundedIcon />,
    title: "Cart",
    currentPage: "cart",
  },
  {
    route: "/dashboard/orders",
    icon: <AssignmentRoundedIcon />,
    title: "My Orders",
    currentPage: "Orders",
  },
  {
    route: "/dashboard/chat",
    icon: <QuestionAnswerRoundedIcon />,
    title: "Chat",
    currentPage: "chat",
  },
];
