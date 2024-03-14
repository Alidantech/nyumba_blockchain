import * as React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import {Link} from 'react-router-dom';

const data = [
  {
    name: "Lakefront Serenity",
    avatar: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400",
    avatar2x: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400",
    date: "$450,000",
    title: "Cozy Lake House",
    body: "Nestled on the shores of Crystal Lake, this cozy 3-bedroom house offers stunning water views, private dock access, and a sprawling deck for entertaining. Perfect for those seeking tranquility and outdoor adventure.",
    color: "warning.400"
  },
  {
    name: "Sunny Meadows",
    avatar: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=400",
    avatar2x: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=400",
    date: "$375,000",
    title: "Modern Gazebo",
    body: "Discover the charm of country living in our 4-bedroom farmhouse at Sunny Meadows. Featuring a spacious open-plan kitchen, wrap-around porch, and over two acres of lush gardens.",
    color: "success.400"
  },
  {
    name: "Downtown Loft",
    avatar: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400",
    avatar2x: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400",
    date: "$525,000",
    title: "Urban Chic Apartment",
    body: "Experience the heart of the city in our luxurious 2-bedroom loft. Boasting floor-to-ceiling windows, a gourmet kitchen, and access to premium amenities. Ideal for those who love vibrant city life.",
    color: "primary.500"
  }
];

export default function EmailList() {
  return (
  
      <List
        sx={{
          [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]:
            {
              borderLeft: "2px solid",
              borderLeftColor: "var(--joy-palette-primary-outlinedBorder)",
            },
        }}
      >
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemButton
                {...(index === 0 && {
                  selected: true,
                  color: "neutral",
                })}
                sx={{ p: 2 }}
              >
                <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                  <Avatar sx={{
                    borderRadius: "0%",
                    width: "80px",  
                    height: "auto",
                    mr: 4,
                  }} alt="" srcSet={item.avatar2x} src={item.avatar} />
                </ListItemDecorator>
                <Box sx={{ pl: 2, width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 0.5,
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <Typography level="body-xs">{item.name}</Typography>
                      <Box
                        sx={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "99px",
                          bgcolor: item.color,
                        }}
                      />
                    </Box>
                    <Typography level="body-xs" textColor="text.tertiary">
                      {item.date}
                    </Typography>
                  </Box>
                  <div>
                    <Typography level="title-sm" sx={{ mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography level="body-sm">{item.body}</Typography>
                  </div>
                </Box>
              </ListItemButton>
            </ListItem>
            <ListDivider sx={{ m: 0 }} />
          </React.Fragment>
        ))}
      </List>
  );
}
