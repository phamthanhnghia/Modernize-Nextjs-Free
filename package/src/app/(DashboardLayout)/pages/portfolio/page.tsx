"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import PageHero from "@/app/(DashboardLayout)/pages/_components/PageHero";
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { blue, orange, teal } from "@mui/material/colors";
import { IconSparkles } from "@tabler/icons-react";

const caseStudies = [
  {
    title: "Lifecycle Automation",
    industry: "SaaS Platform",
    outcome: "45% faster onboarding using automated milestones and alerts.",
    color: teal[50],
  },
  {
    title: "Revenue Intelligence",
    industry: "Financial Services",
    outcome: "Unified dashboards reduced manual reporting by 18 hours each week.",
    color: orange[50],
  },
  {
    title: "Operational Analytics",
    industry: "Retail",
    outcome: "Edge analytics provided store managers real-time performance benchmarks.",
    color: blue[50],
  },
];

const deliveryPhases = [
  {
    title: "Blueprint",
    description:
      "Co-create target journey maps and analytics models with executive stakeholders.",
  },
  {
    title: "Build",
    description: "Rapid iteration with shared sprints, demos, and QA sign-offs.",
  },
  {
    title: "Scale",
    description:
      "Enablement cohorts, train-the-trainer programs, and embedded analytics dashboards.",
  },
];

const PortfolioPage = () => (
  <PageContainer
    title="Portfolio"
    description="A snapshot of Modernize deployments showcasing measurable impact across key industries."
  >
    <Stack spacing={6}>
      <PageHero
        title="Portfolio"
        description="A snapshot of Modernize deployments showcasing measurable impact across key industries."
        highlights={["SaaS", "Financial services", "Retail"]}
        secondaryAction={{
          label: "See Case Studies",
          href: "#case-studies",
        }}
      />

      <Grid container spacing={3} id="case-studies">
        {caseStudies.map((item) => (
          <Grid key={item.title} size={{ xs: 12, md: 4 }}>
            <Card sx={{ height: "100%", backgroundColor: item.color }}>
              <CardContent>
                <Chip label={item.industry} color="primary" variant="outlined" sx={{ mb: 2 }} />
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.outcome}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider />

      <Stack spacing={4}>
        <Typography variant="h5" fontWeight={700}>
          Delivery Framework
        </Typography>
        <List>
          {deliveryPhases.map((phase) => (
            <ListItem key={phase.title} disableGutters>
              <ListItemAvatar>
                <Avatar>
                  <IconSparkles size={18} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={phase.title}
                secondary={phase.description}
                primaryTypographyProps={{ fontWeight: 600 }}
                secondaryTypographyProps={{ variant: "body2", color: "text.secondary" }}
              />
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  </PageContainer>
);

export default PortfolioPage;
