import * as React from "react";
import CssBaseline from "@mui/joy/CssBaseline";
import Autocomplete from "@mui/joy/Autocomplete";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import RadioGroup from "@mui/joy/RadioGroup";
import Radio from "@mui/joy/Radio";
import Slider from "@mui/joy/Slider";
import Sheet from "@mui/joy/Sheet";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Layout from "./widgets/Layout";
import Navigation from "./widgets/Navigation";
export default function TeamExample() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const peopleData = [
    {
      name: "Milimani Block",
      position: "$300 per month",
      avatar2x: "https://picsum.photos/267",
      companyData: [
        {
          role: "Water",
          name: "per month",
          logo: "https://picsum.photos/229",
          years: "$10",
        },
        {
          role: "Electricity",
          name: "Per week",
          logo: "https://picsum.photos/220",
          years: "$30",
        },
      ],
      skills: ["2 bedrooms", "Balcony"],
    },
    {
      name: "Upper Hill Flats",
      position: "$250 per month",
      avatar2x: "https://picsum.photos/200",
      companyData: [
        {
          role: "Decorated kitchem",
          name: "Decor",
          logo: "https://picsum.photos/201",
          years: "",
        },
        {
          role: "A park for relaxing",
          name: "Trees",
          logo: "https://picsum.photos/202",
          years: "",
        },
      ],
      skills: ["Rooms", "Bedsitter", "2 bedroom"],
    },
    {
      name: "Ruiru Flats",
      position: "$60 per month",
      avatar2x: "https://picsum.photos/202",
      companyData: [
        {
          role: "Water",
          name: "per month",
          logo: "https://picsum.photos/203",
          years: "$40",
        },
        {
          role: "Electricity",
          name: "per month",
          logo: "https://picsum.photos/205",
          years: "$20",
        },
      ],
      skills: ["3 bedroom", "Single Rooms"],
    },
    {
      name: "Kahawa Wendani Heights",
      position: "$400 per month",
      avatar2x: "https://picsum.photos/208",
      companyData: [
        {
          role: "Water and electricity",
          name: "new",
          logo: "https://picsum.photos/210",
          years: "every month",
        },
        {
          role: "Free waste collection",
          name: "new",
          logo: "https://picsum.photos/290",
          years: "every week",
        },
      ],
      skills: ["Spacious", "Bedsitters"],
    },
  ];

  return (
    <>
      <Layout.Root
        sx={{
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Layout.SidePane>
          <Box
            sx={{
              height: "auto",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "transparent",
            }}
          >
            <Typography
              level="title-lg"
              textColor="text.secondary"
              component="h1"
            >
              Real Estates
            </Typography>
            <Button
              // startDecorator={<PersonRoundedIcon />}
              size="sm"
            >
              Add new
            </Button>
          </Box>
          <Box
            sx={{
              // height: "90vh",
              overflow: "auto",
            }}
          >
            <AccordionGroup
              sx={{
                [`& .${accordionDetailsClasses.content}`]: {
                  px: 2,
                },
                [`& .${accordionSummaryClasses.button}`]: {
                  px: 2,
                },
              }}
            >
              <Accordion defaultExpanded>
                <AccordionSummary>
                  <Typography level="title-sm">Keywords</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ my: 2 }}>
                    <Autocomplete
                      size="sm"
                      placeholder="bedrooms, type, etc…"
                      options={[
                        {
                          category: "Bedrooms",
                          title: "1 bedroom",
                        },
                        {
                          category: "Bedrooms",
                          title: "2 bedroom",
                        },
                        {
                          category: "Bedrooms",
                          title: "3 bedroom",
                        },
                        {
                          category: "type",
                          title: "bedsitter",
                        },
                        {
                          category: "type",
                          title: "Single rooms",
                        },
                        {
                          category: "type",
                          title: "Double rooms",
                        },
                      ]}
                      groupBy={(option) => option.category}
                      getOptionLabel={(option) => option.title}
                    />
                    <Box sx={{ my: 2, display: "flex", gap: 1 }}>
                      <Chip
                        variant="soft"
                        size="sm"
                        endDecorator={<ChipDelete variant="soft" />}
                      >
                        3 bedrooms
                      </Chip>
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary>
                  <Typography level="title-sm">Location</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ my: 2 }}>
                    <Autocomplete
                      size="sm"
                      placeholder="Country, city, etc…"
                      options={[
                        // some of Thailand provinces
                        "Bangkok",
                        "Amnat Charoen",
                        "Ang Thong",
                        "Bueng Kan",
                        "Buriram",
                        "Chachoengsao",
                        "Chai Nat",
                        "Chaiyaphum",
                        "Chanthaburi",
                        "Chiang Mai",
                        "Chiang Rai",
                        "Chonburi",
                      ]}
                    />
                    <Box
                      sx={{ mt: 3, display: "flex", flexDirection: "column" }}
                    >
                      <Typography level="title-sm">
                        Distance from the Highway
                      </Typography>
                      <Slider
                        size="sm"
                        variant="solid"
                        valueLabelFormat={(value) => `${value} km`}
                        defaultValue={6}
                        step={1}
                        min={0}
                        max={20}
                        valueLabelDisplay="on"
                      />
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary>
                  <Typography level="title-sm">Rooms Types</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ my: 2 }}>
                    <RadioGroup name="education" defaultValue="any">
                      <Radio label="All" value="any" size="sm" />
                      <Radio label="Bedrooms" value="high-school" size="sm" />
                      <Radio label="Bedsitter" value="college" size="sm" />
                      <Radio label="Rooms" value="post-graduate" size="sm" />
                    </RadioGroup>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary>
                  <Typography level="title-sm">
                    Years since Construction
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ my: 2 }}>
                    <Slider
                      size="sm"
                      valueLabelFormat={(value) => `${value} years`}
                      defaultValue={[5, 10]}
                      step={1}
                      min={0}
                      max={30}
                      valueLabelDisplay="on"
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary>
                  <Typography level="title-sm">Waste Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ my: 2 }}>
                    <Autocomplete
                      size="sm"
                      multiple
                      placeholder="Select"
                      options={["Free", "Individual"]}
                      getOptionLabel={(option) => option}
                      filterSelectedOptions
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
            </AccordionGroup>
          </Box>
        </Layout.SidePane>
        <Layout.Main
          sx={{
            height: "100vh",
            overflow: "auto",
            paddingTop: { sx: 10, md: 1 },
          }}
        >
          <List
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 2,
            }}
          >
            {peopleData.map((person, index) => (
              <Sheet
                key={index}
                component="li"
                variant="outlined"
                sx={{
                  borderRadius: "sm",
                  p: 2,
                  listStyle: "none",
                }}
              >
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Avatar
                    variant="outlined"
                    src={person.avatar2x}
                    srcSet={`${person.avatar2x} 2x`}
                    sx={{ borderRadius: "50%" }}
                  />
                  <div>
                    <Typography level="title-md">{person.name}</Typography>
                    <Typography level="body-xs">{person.position}</Typography>
                  </div>
                </Box>
                <Divider component="div" sx={{ my: 2 }} />
                <List sx={{ "--ListItemDecorator-size": "40px", gap: 2 }}>
                  {person.companyData.map((company, companyIndex) => (
                    <ListItem
                      key={companyIndex}
                      sx={{ alignItems: "flex-start" }}
                    >
                      <ListItemDecorator
                        sx={{
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            height: "100%",
                            width: "1px",
                            bgcolor: "divider",
                            left: "calc(var(--ListItem-paddingLeft) + 12px)",
                            top: "50%",
                          },
                        }}
                      >
                        <Avatar
                          src={company.logo}
                          sx={{ "--Avatar-size": "24px" }}
                        />
                      </ListItemDecorator>
                      <ListItemContent>
                        <Typography level="title-sm">{company.role}</Typography>
                        <Typography level="body-xs">{company.name}</Typography>
                      </ListItemContent>
                      <Typography level="body-xs">{company.years}</Typography>
                    </ListItem>
                  ))}
                </List>
                <Button
                  size="sm"
                  variant="plain"
                  endDecorator={
                    <KeyboardArrowRightRoundedIcon fontSize="small" />
                  }
                  sx={{ px: 1, mt: 1 }}
                >
                  Expand
                </Button>
                <Divider component="div" sx={{ my: 2 }} />
                <Typography level="title-sm">Skills tags:</Typography>
                <Box sx={{ mt: 1.5, display: "flex", gap: 1 }}>
                  {person.skills.map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      variant="outlined"
                      color="neutral"
                      size="sm"
                    >
                      {skill}
                    </Chip>
                  ))}
                </Box>
              </Sheet>
            ))}
          </List>
        </Layout.Main>
      </Layout.Root>
    </>
  );
}
