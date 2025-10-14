"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import PageHero from "@/app/(DashboardLayout)/pages/_components/PageHero";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { indigo } from "@mui/material/colors";
import { IconArrowUpRight, IconSparkles } from "@tabler/icons-react";
import Link from "next/link";

const cultureHighlights = [
  "Remote-first collaboration",
  "Quarterly in-person summits",
  "Learning stipends",
  "Inclusive hiring panels",
];

const openRoles = [
  {
    title: "Senior Frontend Engineer",
    team: "Product Engineering",
    location: "Remote - North America",
  },
  {
    title: "Implementation Consultant",
    team: "Customer Success",
    location: "Remote - EMEA",
  },
  {
    title: "Product Marketing Manager",
    team: "Go-To-Market",
    location: "Remote - APAC",
  },
];

const hiringSteps = [
  "Intentional application review focused on transferable impact.",
  "Conversation with hiring manager centered on collaboration and outcomes.",
  "Practical exercise that mirrors real team challenges.",
  "Final panel emphasizing culture add and growth mindset.",
];

const CareersPage = () => (
  <PageContainer
    title="Careers"
    description="Join a remote-first team building mission-critical tooling for the world's most ambitious operators."
  >
    <Stack spacing={6}>
      <PageHero
        title="Careers"
        description="Join a remote-first team building mission-critical tooling for the world's most ambitious operators."
        highlights={["Remote friendly", "Growth paths", "Inclusive culture"]}
        primaryAction={{
          label: "View Open Roles",
          href: "#open-roles",
          icon: <IconArrowUpRight size={18} />,
        }}
        secondaryAction={{
          label: "Life at Modernize",
          href: "#culture",
        }}
      />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Card id="culture">
            <CardHeader title="Life at Modernize" subheader="What to expect" />
            <CardContent>
              <Stack spacing={2.5}>
                {cultureHighlights.map((item) => (
                  <Stack key={item} direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: indigo[500] }}>
                      <IconSparkles size={18} />
                    </Avatar>
                    <Typography variant="body2" color="text.secondary">
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Card id="open-roles">
            <CardHeader title="Open Roles" subheader="Updated weekly" />
            <CardContent>
              <Stack spacing={3}>
                {openRoles.map((role) => (
                  <Stack
                    key={role.title}
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent="space-between"
                  >
                    <Stack spacing={0.5}>
                      <Typography fontWeight={600}>{role.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {role.team}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {role.location}
                      </Typography>
                    </Stack>
                    <Button
                      component={Link}
                      href="/pages/contact"
                      variant="outlined"
                      endIcon={<IconArrowUpRight size={18} />}
                    >
                      Apply
                    </Button>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider />

      <Stack spacing={4}>
        <Typography variant="h5" fontWeight={700}>
          Our Hiring Process
        </Typography>
        <Stack spacing={3}>
          {hiringSteps.map((step, index) => (
            <Stack key={step} direction="row" spacing={2} alignItems="flex-start">
              <Chip label={index + 1} color="primary" size="small" />
              <Typography variant="body2" color="text.secondary">
                {step}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  </PageContainer>
);

export default CareersPage;
