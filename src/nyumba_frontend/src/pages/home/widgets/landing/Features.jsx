import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";

const items = [
	{
		icon: <ViewQuiltRoundedIcon />,
		title: "EASY ACCESS TO INFORMATION",
		description:
			"You don't have to incur the extra cost of asking around for a house anymore, we tell you everything.That land you desire to own, you get to know everything about it saving you the cost of getting that information from middlemen involved.",
		imageLight:
			'url("https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
		imageDark:
			'url("https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
	},
	{
		icon: <ViewQuiltRoundedIcon />,
		title: "TOKENIZATION",
		description:
			"Want to be a house owner, with the housing project endorsed by the president , we offer you a chance to be a house owner by the art of tokenization where with little funds you get to invest in a house as we incorporate Real Estate Investment Trusts (REITs)",
		imageLight:
			'url("https://images.pexels.com/photos/8370813/pexels-photo-8370813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
		imageDark:
			'url("https://images.pexels.com/photos/8370813/pexels-photo-8370813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
	},
	{
		icon: <EdgesensorHighRoundedIcon />,
		title: "INVESTORS",
		description:
			"We easen the land procurement processes that weigh you down. With our all inclusive platform, we offer land history for investors seeking to own a land. You get to track the title deed and land owners from the comfort of your own home",
		imageLight:
			'url("https://images.pexels.com/photos/6289069/pexels-photo-6289069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
		imageDark:
			'url("https://images.pexels.com/photos/6289069/pexels-photo-6289069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
	},
	{
		icon: <DevicesRoundedIcon />,
		title: "EASY TRANSFER OF LANDS",
		description:
			"We provide an easy way of land succession and purchase, where we use smart contracts which are legally binding to both the land owner and potential owner.",
		imageLight:
			'url("https://images.pexels.com/photos/2476015/pexels-photo-2476015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
		imageDark:
			'url("https://images.pexels.com/photos/2476015/pexels-photo-2476015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
	},
];

export default function Features() {
	const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

	const handleItemClick = (index) => {
		setSelectedItemIndex(index);
	};

	const selectedFeature = items[selectedItemIndex];

	return (
		<Container
			id="features"
			sx={{ py: { xs: 8, sm: 16 } }}
		>
			<Grid
				container
				spacing={6}
			>
				<Grid
					item
					xs={12}
					md={6}
				>
					<div>
						<Typography
							component="h2"
							variant="h4"
							color="text.primary"
						>
							WHAT DO WE OFFER
						</Typography>
						{/* <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Here you can provide a brief overview of the key features of the
              product. For example, you could list the number of features, the
              types of features, add-ons, or the benefits of the features.
            </Typography> */}
					</div>
					<Grid
						container
						item
						gap={1}
						sx={{ display: { xs: "auto", sm: "none" } }}
					>
						{items.map(({ title }, index) => (
							<Chip
								key={index}
								label={title}
								onClick={() => handleItemClick(index)}
								sx={{
									borderColor: (theme) => {
										if (theme.palette.mode === "light") {
											return selectedItemIndex === index ? "primary.light" : "";
										}
										return selectedItemIndex === index ? "primary.light" : "";
									},
									background: (theme) => {
										if (theme.palette.mode === "light") {
											return selectedItemIndex === index ? "none" : "";
										}
										return selectedItemIndex === index ? "none" : "";
									},
									backgroundColor:
										selectedItemIndex === index ? "primary.main" : "",
									"& .MuiChip-label": {
										color: selectedItemIndex === index ? "#fff" : "",
									},
								}}
							/>
						))}
					</Grid>
					<Box
						component={Card}
						variant="outlined"
						sx={{
							display: { xs: "auto", sm: "none" },
							mt: 4,
						}}
					>
						<Box
							sx={{
								backgroundImage: (theme) =>
									theme.palette.mode === "light"
										? items[selectedItemIndex].imageLight
										: items[selectedItemIndex].imageDark,
								backgroundSize: "cover",
								backgroundPosition: "center",
								minHeight: 280,
							}}
						/>
						<Box sx={{ px: 2, pb: 2 }}>
							<Typography
								color="text.primary"
								variant="body2"
								fontWeight="bold"
							>
								{selectedFeature.title}
							</Typography>
							<Typography
								color="text.secondary"
								// variant="small"
								fontSize="0.8em"
								sx={{ my: 0.5 }}
							>
								{selectedFeature.description}
							</Typography>
							<Link
								color="primary"
								variant="body2"
								fontWeight="bold"
								sx={{
									display: "inline-flex",
									alignItems: "center",
									"& > svg": { transition: "0.2s" },
									"&:hover > svg": { transform: "translateX(2px)" },
								}}
							>
								<span>Learn more</span>
								<ChevronRightRoundedIcon
									fontSize="small"
									sx={{ mt: "1px", ml: "2px" }}
								/>
							</Link>
						</Box>
					</Box>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="flex-start"
						spacing={2}
						useFlexGap
						sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
					>
						{items.map(({ icon, title, description }, index) => (
							<Card
								key={index}
								variant="outlined"
								component={Button}
								onClick={() => handleItemClick(index)}
								sx={{
									p: 3,
									height: "fit-content",
									width: "100%",
									background: "none",
									backgroundColor:
										selectedItemIndex === index ? "action.selected" : undefined,
									borderColor: (theme) => {
										if (theme.palette.mode === "light") {
											return selectedItemIndex === index
												? "primary.light"
												: "grey.200";
										}
										return selectedItemIndex === index
											? "primary.dark"
											: "grey.800";
									},
								}}
							>
								<Box
									sx={{
										width: "100%",
										display: "flex",
										textAlign: "left",
										flexDirection: { xs: "column", md: "row" },
										alignItems: { md: "center" },
										gap: 2.5,
									}}
								>
									{/* <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === "light") {
                          return selectedItemIndex === index
                            ? "primary.main"
                            : "grey.300";
                        }
                        return selectedItemIndex === index
                          ? "primary.main"
                          : "grey.700";
                      },
                    }}
                  >
                    {icon}
                  </Box> */}
									<Box sx={{ textTransform: "none" }}>
										<Typography
											color="text.primary"
											variant="body2"
											fontWeight="bold"
										>
											{title}
										</Typography>
										<Typography
											color="text.secondary"
											variant="body2"
											sx={{ my: 0.5 }}
										>
											{description}
										</Typography>
										<Link
											color="primary"
											variant="body2"
											fontWeight="bold"
											sx={{
												display: "inline-flex",
												alignItems: "center",
												"& > svg": { transition: "0.2s" },
												"&:hover > svg": { transform: "translateX(2px)" },
											}}
											onClick={(event) => {
												event.stopPropagation();
											}}
										>
											<span>Learn more</span>
											<ChevronRightRoundedIcon
												fontSize="small"
												sx={{ mt: "1px", ml: "2px" }}
											/>
										</Link>
									</Box>
								</Box>
							</Card>
						))}
					</Stack>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
				>
					<Card
						variant="outlined"
						sx={{
							height: "100%",
							width: "100%",
							display: { xs: "none", sm: "flex" },
							pointerEvents: "none",
						}}
					>
						<Box
							sx={{
								m: "auto",
								width: "100%",
								height: "100%",
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
								backgroundImage: (theme) =>
									theme.palette.mode === "light"
										? items[selectedItemIndex].imageLight
										: items[selectedItemIndex].imageDark,
							}}
						/>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}
