"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import PageHero from "@/app/(DashboardLayout)/pages/_components/PageHero";
import { Avatar, Box, Card, CardContent, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { blue, orange, teal } from "@mui/material/colors";
import { IconBuildingCommunity } from "@tabler/icons-react";

const serviceCards = [
  {
    title: "Advisory Sprint",
    description:
      "Strategy workshops aligning business goals to Modernize capabilities with prioritized roadmap.",
    color: teal[50],
  },
  {
    title: "Implementation Pod",
    description:
      "Cross-functional pod delivering integrations, automations, and rollout training in 6 weeks.",
    color: blue[50],
  },
  {
    title: "Enablement Program",
    description:
      "Role-based enablement tracks with certification, office hours, and peer communities.",
    color: orange[50],
  },
];

const lifecycle = [
  {
    stage: "Discover",
    description:
      "Stakeholder interviews, systems audit, and success metric alignment led by advisory specialists.",
  },
  {
    stage: "Design",
    description:
      "Solution architecture, integration mappings, and security reviews with implementation leads.",
  },
  {
    stage: "Activate",
    description:
      "Enablement playbooks, launch support, and adoption dashboards for every team.",
  },
  {
    stage: "Optimize",
    description:
      "Quarterly value reviews and experimentation backlog to expand automation coverage.",
  },
];

const enablementAssets = [
  "Role-based training paths",
  "Template library with automation blueprints",
  "Executive scorecards with benchmarking",
  "Office hours and community cohorts",
];

const ServicesPage = () => (
  <PageContainer
    title="Services"
    description="Purpose-built services that accelerate every stage of a Modernize rollout, from strategy to adoption."
  >
    <Stack spacing={6}>
      <PageHero
        title="Services"
        description="Purpose-built services that accelerate every stage of a Modernize rollout, from strategy to adoption."
        highlights={["Advisory", "Implementation", "Enablement"]}
        primaryAction={{
          label: "Request Engagement",
          href: "/pages/contact",
        }}
      />

      <Grid container spacing={3}>
        {serviceCards.map((card) => (
          <Grid key={card.title} size={{ xs: 12, md: 4 }}>
            <Card sx={{ backgroundColor: card.color, height: "100%" }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
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

      <Stack spacing={5}>
        <Stack spacing={2}>
          <Typography variant="h5" fontWeight={700}>
            Engagement Lifecycle
          </Typography>
          <Stack spacing={4}>
            {lifecycle.map((step) => (
              <Box key={step.stage}>
                <Typography fontWeight={600}>{step.stage}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>

        <Divider />

        <Stack spacing={2}>
          <Typography variant="h5" fontWeight={700}>
            Enablement Assets
          </Typography>
          <Grid container spacing={3}>
            {enablementAssets.map((asset) => (
              <Grid key={asset} size={{ xs: 12, md: 6 }}>
                <Card>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar sx={{ bgcolor: blue[500] }}>
                        <IconBuildingCommunity size={18} />
                      </Avatar>
                      <Typography variant="body2" color="text.secondary">
                        {asset}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  </PageContainer>
);

export default ServicesPage;
