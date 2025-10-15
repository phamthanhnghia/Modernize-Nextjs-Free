"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import PageHero from "@/app/(DashboardLayout)/pages/_components/PageHero";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { blue, deepPurple, green, orange } from "@mui/material/colors";
import {
  IconBriefcase,
  IconBrandLinkedin,
  IconCertificate,
  IconChartBar,
  IconGlobe,
  IconMail,
  IconPhone,
  IconSettings,
} from "@tabler/icons-react";

const contactDetails = [
  {
    label: "Email",
    value: "avery.morgan@modernize.com",
    href: "mailto:avery.morgan@modernize.com",
    icon: IconMail,
  },
  {
    label: "Phone",
    value: "+1 (415) 555-2874",
    href: "tel:+14155552874",
    icon: IconPhone,
  },
  {
    label: "Website",
    value: "modernize.com/avery",
    href: "https://modernize.com/avery",
    icon: IconGlobe,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/avery-morgan",
    href: "https://www.linkedin.com/in/avery-morgan",
    icon: IconBrandLinkedin,
  },
];

const skills = [
  "Operational Strategy",
  "Automation Design",
  "Revenue Enablement",
  "Cross-functional Leadership",
  "Data Storytelling",
  "Change Management",
];

const jobHighlights = [
  {
    title: "Current Role",
    description: "Product Operations Lead at Modernize",
  },
  {
    title: "Experience",
    description: "12 years orchestrating GTM and product collaboration",
  },
  {
    title: "Focus Areas",
    description: "Automation rollout, forecasting accuracy, stakeholder onboarding",
  },
  {
    title: "Team",
    description: "Leads a pod of analysts, solution architects, and program managers",
  },
];

const education = [
  {
    school: "Stanford University",
    program: "M.S. in Management Science & Engineering",
    year: "2014",
  },
  {
    school: "University of Washington",
    program: "B.S. in Information Systems",
    year: "2012",
  },
];

const portfolio = [
  {
    name: "Unified GTM Workspace",
    description: "Integrated dashboards connecting RevOps, product, and finance planning in one environment.",
    href: "https://modernize.com/portfolio/gtm-workspace",
  },
  {
    name: "Automation Blueprint Library",
    description: "Reusable automation recipes reducing onboarding time by 38% for new customers.",
    href: "https://modernize.com/portfolio/automation-blueprints",
  },
  {
    name: "Value Realization Scorecard",
    description: "Executive scorecards aligning adoption metrics to measurable outcomes across regions.",
    href: "https://modernize.com/portfolio/value-scorecard",
  },
];

const activityStats = [
  {
    label: "Programs Launched",
    value: "48",
    trend: "+12% YoY",
    color: blue[500],
  },
  {
    label: "Stakeholders Onboarded",
    value: "320",
    trend: "+45 this quarter",
    color: green[500],
  },
  {
    label: "Automation Coverage",
    value: "76%",
    trend: "+8 pts YoY",
    color: orange[500],
  },
];

const settings = [
  {
    label: "Show project availability",
    description: "Let teams know when new advisory slots open.",
    defaultChecked: true,
  },
  {
    label: "Share activity snapshots",
    description: "Publish quarterly highlights to the Modernize community feed.",
    defaultChecked: true,
  },
  {
    label: "Send weekly insights digest",
    description: "Receive curated research and automation updates.",
    defaultChecked: false,
  },
];

const enhancements = [
  "Add verified badges for certifications and security clearance",
  "Embed customer testimonial reels on the portfolio section",
  "Enable calendar sync for instant advisory bookings",
];

const ProfilePage = () => (
  <PageContainer
    title="Profile"
    description="Professional profile highlighting role, experience, and collaboration touchpoints."
  >
    <Stack spacing={6}>
      <PageHero
        title="Professional Profile"
        description="Strategic operator connecting product, revenue, and customer teams to unlock measurable outcomes."
        highlights={["Ops Leader", "Automation Architect", "Community Builder"]}
        primaryAction={{
          label: "Download Resume",
          href: "https://modernize.com/avery-morgan-resume.pdf",
        }}
        secondaryAction={{
          label: "Request Collaboration",
          href: "mailto:avery.morgan@modernize.com",
          variant: "outlined",
        }}
      />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Stack spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: deepPurple[500], width: 88, height: 88, fontSize: 36 }}>
                    AM
                  </Avatar>
                  <Stack spacing={0.5} alignItems="center">
                    <Typography variant="h5" fontWeight={700} textAlign="center">
                      Avery Morgan
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="center">
                      Product Operations Lead · Modernize
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="center">
                      San Francisco, CA · Hybrid
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Available for advisory" color="primary" />
                    <Chip label="Mentor" variant="outlined" />
                  </Stack>
                  <Button
                    component="a"
                    href="https://cal.com/avery-morgan"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    startIcon={<IconBriefcase size={18} />}
                  >
                    Book Intro Session
                  </Button>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={600}>
                    Contact
                  </Typography>
                  <Divider />
                  <Stack spacing={2}>
                    {contactDetails.map((item) => (
                      <Stack
                        key={item.label}
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={2}
                      >
                        <Stack direction="row" spacing={2} alignItems="center">
                          <item.icon size={18} />
                          <Box>
                            <Typography variant="body2" fontWeight={600}>
                              {item.label}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.value}
                            </Typography>
                          </Box>
                        </Stack>
                        <Button
                          component="a"
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="text"
                          size="small"
                        >
                          Open
                        </Button>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={600}>
                    Skills
                  </Typography>
                  <Divider />
                  <Stack direction="row" flexWrap="wrap" gap={1.5}>
                    {skills.map((skill) => (
                      <Chip key={skill} label={skill} variant="outlined" />
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconSettings size={18} />
                    <Typography variant="h6" fontWeight={600}>
                      Settings
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack spacing={2}>
                    {settings.map((setting) => (
                      <Box key={setting.label}>
                        <FormControlLabel
                          control={<Switch defaultChecked={setting.defaultChecked} />}
                          label={
                            <Stack spacing={0.5}>
                              <Typography variant="body2" fontWeight={600}>
                                {setting.label}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {setting.description}
                              </Typography>
                            </Stack>
                          }
                          sx={{ alignItems: "start", m: 0 }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconCertificate size={18} />
                    <Typography variant="h6" fontWeight={600}>
                      Optional Enhancements
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack spacing={1.5}>
                    {enhancements.map((item) => (
                      <Typography key={item} variant="body2" color="text.secondary">
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, lg: 8 }}>
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={600}>
                    Bio
                  </Typography>
                  <Divider />
                  <Typography variant="body2" color="text.secondary">
                    Avery leads Modernize’s product operations charter, translating cross-functional
                    strategy into execution playbooks for global go-to-market teams. She builds
                    automation programs that shorten deployment cycles, guides enablement communities,
                    and aligns executive priorities to customer health and product adoption. When not
                    architecting workflows, Avery mentors operators entering the automation space and
                    curates research on revenue collaboration models.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconBriefcase size={18} />
                    <Typography variant="h6" fontWeight={600}>
                      Job Information
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack spacing={2}>
                    {jobHighlights.map((highlight) => (
                      <Box key={highlight.title}>
                        <Typography variant="body2" fontWeight={600}>
                          {highlight.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {highlight.description}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={600}>
                    Education
                  </Typography>
                  <Divider />
                  <Stack spacing={2}>
                    {education.map((entry) => (
                      <Box key={entry.program}>
                        <Typography variant="body2" fontWeight={600}>
                          {entry.school} · {entry.year}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {entry.program}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconChartBar size={18} />
                    <Typography variant="h6" fontWeight={600}>
                      Activity Stats
                    </Typography>
                  </Stack>
                  <Divider />
                  <Grid container spacing={2}>
                    {activityStats.map((stat) => (
                      <Grid key={stat.label} size={{ xs: 12, md: 4 }}>
                        <Box
                          sx={{
                            borderRadius: 2,
                            p: 2,
                            backgroundColor: `${stat.color}20`,
                          }}
                        >
                          <Typography variant="h4" fontWeight={700}>
                            {stat.value}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {stat.label}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {stat.trend}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={600}>
                    Portfolio
                  </Typography>
                  <Divider />
                  <Stack spacing={2.5}>
                    {portfolio.map((project) => (
                      <Box key={project.name}>
                        <Typography variant="body2" fontWeight={600}>
                          {project.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {project.description}
                        </Typography>
                        <Button
                          component="a"
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          variant="outlined"
                        >
                          View Case Study
                        </Button>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  </PageContainer>
);

export default ProfilePage;
