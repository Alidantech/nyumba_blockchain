import * as React from "react";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

interface HeaderSectionProps {
  title: string;
  subTitle: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ title, subTitle }) => {
  return (
    <Stack sx={{ p: 1 }} display={"flex"}>
      <Stack
        justifyContent="space-between"
        sx={{ width: "100%", flexDirection: { xs: "column", md: "row" } }}
      >
        <Typography level="h3">{title}</Typography>
        <Typography level="body-md" color="neutral">
          {subTitle}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default HeaderSection;
