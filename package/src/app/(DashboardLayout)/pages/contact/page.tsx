"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import PageHero from "@/app/(DashboardLayout)/pages/_components/PageHero";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { indigo, orange, teal } from "@mui/material/colors";
import { IconHelpCircle, IconMail, IconPhone } from "@tabler/icons-react";

const contactPoints = [
  {
    title: "General inquiries",
    detail: "hello@modernize.com",
    icon: <IconMail size={18} />,
    color: teal[500],
  },
  {
    title: "Sales hotline",
    detail: "+1 (800) 555-0199",
    icon: <IconPhone size={18} />,
    color: indigo[500],
  },
  {
    title: "Support portal",
    detail: "Submit tickets 24/7 with guaranteed response SLAs.",
    icon: <IconHelpCircle size={18} />,
    color: orange[500],
  },
];

const offices = [
  { region: "North America", details: "San Francisco, CA" },
  { region: "Europe", details: "Berlin, Germany" },
  { region: "Asia Pacific", details: "Singapore" },
];

const commitments = [
  {
    title: "Enterprise support",
    detail: "15-minute acknowledgment and dedicated incident channel for priority issues.",
  },
  {
    title: "Status hub",
    detail: "Transparent uptime tracking with proactive incident communication.",
  },
  {
    title: "Partner network",
    detail: "Certified partners available for regional implementations and managed services.",
  },
];

const ContactPage = () => (
  <PageContainer
    title="Contact"
    description="Reach the right Modernize team for partnerships, product questions, or technical support."
  >
    <Stack spacing={6}>
      <PageHero
        title="Contact"
        description="Reach the right Modernize team for partnerships, product questions, or technical support."
        highlights={["Global offices", "24/7 support", "Partner ready"]}
        primaryAction={{
          label: "Start a Conversation",
          href: "mailto:hello@modernize.com",
        }}
      />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardHeader title="Contact Channels" subheader="We're here to help" />
            <CardContent>
              <Stack spacing={3}>
                {contactPoints.map((channel) => (
                  <Stack direction="row" spacing={2} alignItems="center" key={channel.title}>
                    <Avatar sx={{ bgcolor: channel.color }}>{channel.icon}</Avatar>
                    <Stack spacing={0.5}>
                      <Typography fontWeight={600}>{channel.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {channel.detail}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardHeader title="Regional Offices" />
            <CardContent>
              <Stack spacing={2}>
                {offices.map((office) => (
                  <Stack key={office.region} spacing={0.5}>
                    <Typography fontWeight={600}>{office.region}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {office.details}
                    </Typography>
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
          Service-Level Commitments
        </Typography>
        <Grid container spacing={3}>
          {commitments.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography fontWeight={600}>{item.title}</Typography>
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

export default ContactPage;
