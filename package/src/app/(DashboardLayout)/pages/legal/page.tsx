"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import PageHero from "@/app/(DashboardLayout)/pages/_components/PageHero";
import { Button, Card, CardContent, Divider, Grid, Stack, Typography } from "@mui/material";
import { IconArrowUpRight, IconFileDescription } from "@tabler/icons-react";
import Link from "next/link";

const policies = [
  {
    title: "Terms of Service",
    description: "Defines platform access, usage policies, and service-level expectations.",
    link: "#terms",
  },
  {
    title: "Privacy Policy",
    description: "Outlines data collection, retention, and processing aligned with GDPR.",
    link: "#privacy",
  },
  {
    title: "Security Overview",
    description: "Summarizes encryption, monitoring, and compliance certifications including SOC 2.",
    link: "#security",
  },
];

const compliance = [
  {
    label: "SOC 2 Type II",
    detail: "Continuous monitoring with external audits completed annually.",
  },
  {
    label: "GDPR",
    detail: "Data processing agreements and regional residency controls available.",
  },
  {
    label: "Accessibility",
    detail: "WCAG 2.1 AA alignment with quarterly audits and remediation plans.",
  },
];

const LegalPage = () => (
  <PageContainer
    title="Legal"
    description="Understand the policies that protect your data and keep every Modernize workspace compliant."
  >
    <Stack spacing={6}>
      <PageHero
        title="Legal"
        description="Understand the policies that protect your data and keep every Modernize workspace compliant."
        highlights={["GDPR", "SOC 2", "Accessibility"]}
        secondaryAction={{
          label: "Download Policies",
          href: "#policies",
        }}
      />

      <Grid container spacing={3} id="policies">
        {policies.map((policy) => (
          <Grid key={policy.title} size={{ xs: 12, md: 4 }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <IconFileDescription size={32} color="#5D87FF" />
                <Typography variant="h6" fontWeight={600} mt={2}>
                  {policy.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1.5}>
                  {policy.description}
                </Typography>
                <Button
                  component={Link}
                  href={policy.link}
                  variant="text"
                  endIcon={<IconArrowUpRight size={18} />}
                  sx={{ mt: 2, px: 0 }}
                >
                  View policy
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider />

      <Stack spacing={4}>
        <Typography variant="h5" fontWeight={700}>
          Compliance Snapshot
        </Typography>
        <Grid container spacing={3}>
          {compliance.map((item) => (
            <Grid key={item.label} size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography fontWeight={600}>{item.label}</Typography>
                  <Typography variant="body2" color="text.secondary" mt={1.5}>
                    {item.detail}
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

export default LegalPage;
