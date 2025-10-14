"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import PageHero from "@/app/(DashboardLayout)/pages/_components/PageHero";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { blue, pink, teal } from "@mui/material/colors";
import {
  IconArrowUpRight,
  IconBrandLinkedin,
  IconExternalLink,
  IconUserStar,
} from "@tabler/icons-react";

const summaryCards = [
  {
    title: "15+ countries",
    description:
      "Distributed team members collaborating across GTM, product, and operations hubs.",
    color: blue[50],
  },
  {
    title: "98% satisfaction",
    description:
      "Customer health tracked through quarterly surveys and shared success metrics.",
    color: teal[50],
  },
  {
    title: "Quarterly releases",
    description: "Transparent roadmap with release reviews open to the Modernize community.",
    color: pink[50],
  },
];

const leadership = [
  {
    name: "Gabriella Stone",
    role: "Chief Executive Officer",
    bio: "Steers company strategy with two decades of experience in operations platforms.",
  },
  {
    name: "Malik Chen",
    role: "Chief Technology Officer",
    bio: "Leads product engineering with a focus on resilient, scalable cloud infrastructure.",
  },
  {
    name: "Isla Freeman",
    role: "Chief Customer Officer",
    bio: "Partners with customers to convert insights into measurable business outcomes.",
  },
];

const values = [
  "Empathy over assumptions",
  "Transparency by default",
  "Outcomes over outputs",
];

const AboutUsPage = () => (
  <PageContainer
    title="About Us"
    description="Discover the mission, people, and values powering Modernize for modern operations teams."
  >
    <Stack spacing={6}>
      <PageHero
        title="About Us"
        description="Discover the mission, people, and values powering Modernize for modern operations teams."
        highlights={["Global teams", "Innovation DNA", "Customer first"]}
        primaryAction={{
          label: "Meet Leadership",
          href: "#leadership",
          icon: <IconArrowUpRight size={18} />,
        }}
        secondaryAction={{
          label: "View Careers",
          href: "/pages/careers",
          variant: "outlined",
          icon: <IconExternalLink size={18} />,
        }}
      />

      <Grid container spacing={3}>
        {summaryCards.map((card) => (
          <Grid key={card.title} size={{ xs: 12, md: 4 }}>
            <Card sx={{ height: "100%", backgroundColor: card.color }}>
              <CardContent>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider />

      <Stack spacing={5} id="leadership">
        <Typography variant="h5" fontWeight={700}>
          Leadership Team
        </Typography>
        <Grid container spacing={3}>
          {leadership.map((leader) => (
            <Grid key={leader.name} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Avatar sx={{ bgcolor: blue[500], mb: 2 }}>
                    {leader.name.charAt(0)}
                  </Avatar>
                  <Typography fontWeight={600}>{leader.name}</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {leader.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {leader.bio}
                  </Typography>
                  <Button
                    component={"a"}
                    href="https://www.linkedin.com/company/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="text"
                    endIcon={<IconBrandLinkedin size={18} />}
                    sx={{ mt: 2, px: 0 }}
                  >
                    Connect
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider />

        <Stack spacing={2}>
          <Typography variant="h5" fontWeight={700}>
            Our Values
          </Typography>
          <List>
            {values.map((value) => (
              <ListItem key={value} disableGutters>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: teal[500] }}>
                    <IconUserStar size={18} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={value}
                  primaryTypographyProps={{ variant: "body2" }}
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Stack>
    </Stack>
  </PageContainer>
);

export default AboutUsPage;
