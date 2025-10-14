"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import PageHero from "@/app/(DashboardLayout)/pages/_components/PageHero";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { IconArrowUpRight, IconMail, IconMessage2, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

const faqItems = [
  {
    question: "How long does onboarding take?",
    answer:
      "Standard onboarding completes in under 21 days with advisory and implementation support.",
  },
  {
    question: "What integrations are available?",
    answer:
      "Native connectors cover CRM, ERP, finance, storage, and BI platforms with REST API for legacy systems.",
  },
  {
    question: "Is data residency configurable?",
    answer:
      "Yes. Choose regional data centers with failover controls and audit reporting built-in.",
  },
];

const contactChannels = [
  {
    title: "Support Email",
    subtitle: "support@modernize.com",
    icon: <IconMail size={20} />,
  },
  {
    title: "Priority hotline",
    subtitle: "+1 (800) 555-0123",
    icon: <IconPhone size={20} />,
  },
  {
    title: "Community",
    subtitle: "Join office hours and weekly community roundtables.",
    icon: <IconMessage2 size={20} />,
  },
];

const featuredArticles = [
  {
    title: "Security Overview",
    summary: "Understand Modernize certifications, encryption, and monitoring practices.",
  },
  {
    title: "Workspace Governance",
    summary: "Recommended permission models and audit reporting for regulated teams.",
  },
  {
    title: "Automation Recipes",
    summary: "Library of ready-to-launch automations covering GTM, finance, and ops workflows.",
  },
];

const FaqsPage = () => (
  <PageContainer
    title="FAQs"
    description="Quick answers to the most common questions asked by Modernize administrators and creators."
  >
    <Stack spacing={6}>
      <PageHero
        title="FAQs"
        description="Quick answers to the most common questions asked by Modernize administrators and creators."
        highlights={["Onboarding", "Security", "Support"]}
      />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%" }}>
            <CardHeader title="Top FAQs" subheader="General guidance" />
            <CardContent>
              {faqItems.map((item) => (
                <Accordion key={item.question} disableGutters>
                  <AccordionSummary>
                    <Typography fontWeight={600}>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary">
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%" }}>
            <CardHeader title="Need more help?" />
            <CardContent>
              <Stack spacing={2}>
                {contactChannels.map((channel) => (
                  <Stack direction="row" spacing={2} alignItems="center" key={channel.title}>
                    <Avatar>{channel.icon}</Avatar>
                    <Stack spacing={0.5}>
                      <Typography fontWeight={600}>{channel.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {channel.subtitle}
                      </Typography>
                    </Stack>
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
          Featured Articles
        </Typography>
        <Grid container spacing={3}>
          {featuredArticles.map((article) => (
            <Grid key={article.title} size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography fontWeight={600}>{article.title}</Typography>
                  <Typography variant="body2" color="text.secondary" mt={1.5}>
                    {article.summary}
                  </Typography>
                  <Button
                    component={Link}
                    href="/pages/blog"
                    variant="text"
                    sx={{ mt: 2, px: 0 }}
                    endIcon={<IconArrowUpRight size={18} />}
                  >
                    Read article
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  </PageContainer>
);

export default FaqsPage;
