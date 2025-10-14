"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import PageHero from "@/app/(DashboardLayout)/pages/_components/PageHero";
import { Card, CardContent, Divider, Grid, Stack, Typography } from "@mui/material";
import { IconQuote } from "@tabler/icons-react";

const testimonials = [
  {
    quote:
      "Modernize centralized our revenue operations data, unlocking critical forecasting insights overnight.",
    name: "Avery Cole",
    role: "VP Revenue Operations, Horizon SaaS",
  },
  {
    quote:
      "Customer health workflows are now automated, helping us surface expansion signals faster.",
    name: "Jordan Blake",
    role: "Director of CX, Northwind Retail",
  },
  {
    quote: "Dashboards load in seconds and keep our global teams aligned on the right priorities.",
    name: "Riya Kapoor",
    role: "COO, Matrix Fintech",
  },
];

const impactMetrics = [
  { label: "Average ROI", value: "224%", caption: "Reported within first year" },
  { label: "Automation coverage", value: "68%", caption: "Operational workflows automated" },
  { label: "Time to value", value: "23 days", caption: "Median go-live duration" },
];

const TestimonialsPage = () => (
  <PageContainer
    title="Testimonials"
    description="See how teams across industries trust Modernize to drive growth and operational transparency."
  >
    <Stack spacing={6}>
      <PageHero
        title="Testimonials"
        description="See how teams across industries trust Modernize to drive growth and operational transparency."
        highlights={["4.9/5 rating", "Global clientele", "Verified quotes"]}
      />

      <Grid container spacing={3}>
        {testimonials.map((item) => (
          <Grid key={item.name} size={{ xs: 12, md: 4 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <IconQuote size={32} color="#5D87FF" />
                <Typography variant="body1" mt={2} mb={3}>
                  {item.quote}
                </Typography>
                <Typography fontWeight={700}>{item.name}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider />

      <Stack spacing={4}>
        <Typography variant="h5" fontWeight={700}>
          Customer Impact Metrics
        </Typography>
        <Grid container spacing={3}>
          {impactMetrics.map((metric) => (
            <Grid key={metric.label} size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography variant="h4" fontWeight={700}>
                    {metric.value}
                  </Typography>
                  <Typography variant="body2" fontWeight={600} mt={1}>
                    {metric.label}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {metric.caption}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  </PageContainer>
);

export default TestimonialsPage;
