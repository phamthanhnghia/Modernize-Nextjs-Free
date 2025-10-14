"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import PageHero from "@/app/(DashboardLayout)/pages/_components/PageHero";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { IconArrowUpRight, IconCheck, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

const plans = [
  {
    title: "Starter",
    price: "$29",
    cadence: "per user / month",
    features: ["Core dashboards", "Automation templates", "Email support"],
    highlighted: false,
  },
  {
    title: "Growth",
    price: "$59",
    cadence: "per user / month",
    features: ["Advanced analytics", "Sandbox workspace", "Success manager"],
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    cadence: "annual agreement",
    features: ["Unlimited workspaces", "Dedicated pod", "Security reviews"],
    highlighted: false,
  },
];

const includedItems = [
  "Dedicated workspace",
  "Security & compliance toolkit",
  "Customer success community",
];

const PricingPage = () => (
  <PageContainer
    title="Pricing"
    description="Transparent, scalable plans designed for teams of every size with predictable value delivery."
  >
    <Stack spacing={6}>
      <PageHero
        title="Pricing"
        description="Transparent, scalable plans designed for teams of every size with predictable value delivery."
        highlights={["Usage aligned", "No hidden fees", "Enterprise ready"]}
        primaryAction={{
          label: "Compare Plans",
          href: "#plans",
          icon: <IconArrowUpRight size={18} />,
        }}
        secondaryAction={{
          label: "Talk to Sales",
          href: "/pages/contact",
          variant: "outlined",
          icon: <IconExternalLink size={18} />,
        }}
      />

      <Grid container spacing={3} id="plans">
        {plans.map((plan) => (
          <Grid key={plan.title} size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                borderWidth: 2,
                borderStyle: plan.highlighted ? "solid" : "dashed",
                borderColor: plan.highlighted ? "primary.main" : "divider",
              }}
            >
              <CardHeader title={plan.title} subheader={plan.cadence} />
              <CardContent>
                <Typography variant="h3" fontWeight={700} gutterBottom>
                  {plan.price}
                </Typography>
                <Stack spacing={1.5}>
                  {plan.features.map((feature) => (
                    <Stack direction="row" spacing={1} alignItems="center" key={feature}>
                      <IconCheck size={18} color="#2e7d32" />
                      <Typography variant="body2" color="text.secondary">
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
                <Button
                  fullWidth
                  sx={{ mt: 3 }}
                  component={Link}
                  href="/pages/contact"
                  variant={plan.highlighted ? "contained" : "outlined"}
                  disableElevation
                >
                  Choose plan
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider />

      <Stack spacing={4}>
        <Typography variant="h5" fontWeight={700}>
          Frequently Asked Questions
        </Typography>
        <Accordion disableGutters>
          <AccordionSummary>
            <Typography fontWeight={600}>Can I switch plans later?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              Plans can be upgraded or downgraded mid-cycle with prorated billing and success team guidance.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters>
          <AccordionSummary>
            <Typography fontWeight={600}>Do you offer proof-of-concept engagements?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              Implementation pods partner with you on scoped pilots to validate workflows before wider rollout.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Divider />

        <Typography variant="h5" fontWeight={700}>
          Included in Every Plan
        </Typography>
        <Grid container spacing={3}>
          {includedItems.map((item) => (
            <Grid key={item} size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <IconCheck size={18} color="#2e7d32" />
                    <Typography variant="body2" color="text.secondary">
                      {item}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  </PageContainer>
);

export default PricingPage;
