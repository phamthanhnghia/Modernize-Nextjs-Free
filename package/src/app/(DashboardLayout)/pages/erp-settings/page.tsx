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
  LinearProgress,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { green, indigo, orange, purple } from "@mui/material/colors";
import {
  IconApi,
  IconCloud,
  IconCurrencyDollar,
  IconHelp,
  IconShieldLock,
  IconUserCog,
} from "@tabler/icons-react";

const accountDetails = [
  { label: "Organization", value: "Modernize ERP" },
  { label: "Primary Domain", value: "modernize-erp.com" },
  { label: "Admin Email", value: "ops-admin@modernize-erp.com" },
  { label: "Region", value: "North America" },
];

const securityControls = [
  {
    label: "Enforce multi-factor authentication",
    description: "Require all users to complete MFA at sign-in.",
    defaultChecked: true,
  },
  {
    label: "Enable SSO with Okta",
    description: "Redirect users to the configured Okta tenant for authentication.",
    defaultChecked: true,
  },
  {
    label: "Session timeout enforcement",
    description: "Sign out users after 45 minutes of inactivity.",
    defaultChecked: false,
  },
];

const notificationPreferences = [
  {
    category: "Operational Alerts",
    options: [
      {
        label: "Deployment events",
        description: "Notify owners when ERP automation deployments complete.",
        defaultChecked: true,
      },
      {
        label: "Workflow failures",
        description: "Escalate critical automation failures to incident channels.",
        defaultChecked: true,
      },
    ],
  },
  {
    category: "Team Updates",
    options: [
      {
        label: "Access requests",
        description: "Send approvals to the operations leadership group.",
        defaultChecked: true,
      },
      {
        label: "Release notes",
        description: "Deliver the weekly release digest to subscribed users.",
        defaultChecked: false,
      },
    ],
  },
];

const appearanceThemes = [
  { label: "Modern", description: "Default layout with accent indigo highlights.", color: indigo[500] },
  { label: "Focus", description: "Minimal interface optimized for dense analytics.", color: purple[500] },
  { label: "High Contrast", description: "Accessibility-first palette with larger typography.", color: orange[600] },
];

const languageSettings = {
  primary: "English (US)",
  secondary: ["Spanish", "German", "Japanese"],
  compliance: "Localized VAT fields enabled for EU entities.",
};

const integrationCatalog = [
  {
    name: "NetSuite",
    status: "Connected",
    description: "Syncs financial data nightly for consolidated reporting.",
    color: green[500],
  },
  {
    name: "Salesforce",
    status: "Syncing",
    description: "Pipelines feed demand forecasts into supply planning.",
    color: indigo[500],
  },
  {
    name: "Workday",
    status: "Action Required",
    description: "HR entitlement mapping needs administrator confirmation.",
    color: orange[600],
  },
];

const billingSnapshot = {
  plan: "Enterprise Automation",
  seats: 185,
  nextInvoice: "November 1, 2025",
  amount: "$12,800",
  usage: 72,
};

const teamDirectory = [
  { name: "Camille Ortega", role: "Global Admin", avatar: "CO" },
  { name: "Haruto Watanabe", role: "Security Lead", avatar: "HW" },
  { name: "Priya Desai", role: "Integrations Architect", avatar: "PD" },
  { name: "Noah Fischer", role: "Finance Controller", avatar: "NF" },
];

const developerResources = [
  {
    label: "Primary API Key",
    value: "erp_live_4c7928e3",
  },
  {
    label: "Sandbox API Key",
    value: "erp_test_c81f27a4",
  },
  {
    label: "Webhook Endpoint",
    value: "https://hooks.modernize-erp.com/runtime-events",
  },
];

const supportOptions = [
  {
    label: "Customer Success",
    description: "Connect with the dedicated ERP success manager for rollout questions.",
    action: "Schedule Call",
    href: "https://cal.com/modernize-erp/success",
  },
  {
    label: "Priority Support",
    description: "Open a 24/7 priority ticket with the enterprise response team.",
    action: "Submit Ticket",
    href: "https://support.modernize-erp.com/priority",
  },
  {
    label: "Community Hub",
    description: "Join operator forums and access best practice playbooks.",
    action: "Visit Hub",
    href: "https://community.modernize-erp.com",
  },
];

const ErpSettingsPage = () => (
  <PageContainer
    title="ERP Settings"
    description="Configure ERP operations, security controls, integrations, and support resources."
  >
    <Stack spacing={6}>
      <PageHero
        title="ERP Control Center"
        description="Orchestrate enterprise resource planning workflows, safeguard access, and align global teams."
        highlights={["Automation Governance", "Global Controls", "Enterprise Scale"]}
        primaryAction={{
          label: "Publish Updates",
          href: "https://modernize-erp.com/releases",
        }}
        secondaryAction={{
          label: "View Audit Log",
          href: "https://modernize-erp.com/audit",
          variant: "outlined",
        }}
      />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 4 }}>
          <Stack spacing={3}>
            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconUserCog size={18} />
                    <Typography variant="h6" fontWeight={600}>
                      Account
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack spacing={1.5}>
                    {accountDetails.map((item) => (
                      <Stack key={item.label} spacing={0.5}>
                        <Typography variant="body2" fontWeight={600}>
                          {item.label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.value}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Button variant="outlined" size="small">
                    Manage Organization Profile
                  </Button>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconShieldLock size={18} />
                    <Typography variant="h6" fontWeight={600}>
                      Privacy & Security
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack spacing={2}>
                    {securityControls.map((item) => (
                      <Box key={item.label}>
                        <FormControlLabel
                          control={<Switch defaultChecked={item.defaultChecked} />}
                          label={
                            <Stack spacing={0.5}>
                              <Typography variant="body2" fontWeight={600}>
                                {item.label}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.description}
                              </Typography>
                            </Stack>
                          }
                          sx={{ alignItems: "flex-start", m: 0 }}
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
                    <IconCurrencyDollar size={18} />
                    <Typography variant="h6" fontWeight={600}>
                      Billing
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack spacing={1.5}>
                    <Stack spacing={0.5}>
                      <Typography variant="body2" fontWeight={600}>
                        Plan
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {billingSnapshot.plan}
                      </Typography>
                    </Stack>
                    <Stack spacing={0.5}>
                      <Typography variant="body2" fontWeight={600}>
                        Licensed Seats
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {billingSnapshot.seats}
                      </Typography>
                    </Stack>
                    <Stack spacing={0.5}>
                      <Typography variant="body2" fontWeight={600}>
                        Next Invoice
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {billingSnapshot.nextInvoice}
                      </Typography>
                    </Stack>
                    <Stack spacing={0.5}>
                      <Typography variant="body2" fontWeight={600}>
                        Amount Due
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {billingSnapshot.amount}
                      </Typography>
                    </Stack>
                    <Stack spacing={1}>
                      <Typography variant="body2" fontWeight={600}>
                        Usage Allocation
                      </Typography>
                      <LinearProgress variant="determinate" value={billingSnapshot.usage} sx={{ height: 8, borderRadius: 999 }} />
                      <Typography variant="caption" color="text.secondary">
                        {billingSnapshot.usage}% of automation minutes utilized this cycle.
                      </Typography>
                    </Stack>
                    <Button variant="contained" size="small">
                      Manage Billing Settings
                    </Button>
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
                    Notifications
                  </Typography>
                  <Divider />
                  <Stack spacing={3}>
                    {notificationPreferences.map((group) => (
                      <Stack key={group.category} spacing={1.5}>
                        <Typography variant="body2" fontWeight={600}>
                          {group.category}
                        </Typography>
                        <Stack spacing={1.5}>
                          {group.options.map((option) => (
                            <FormControlLabel
                              key={option.label}
                              control={<Switch defaultChecked={option.defaultChecked} />}
                              label={
                                <Stack spacing={0.5}>
                                  <Typography variant="body2" fontWeight={600}>
                                    {option.label}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {option.description}
                                  </Typography>
                                </Stack>
                              }
                              sx={{ alignItems: "flex-start", m: 0 }}
                            />
                          ))}
                        </Stack>
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
                    Appearance
                  </Typography>
                  <Divider />
                  <Stack spacing={2.5}>
                    {appearanceThemes.map((theme) => (
                      <Stack key={theme.label} direction="row" alignItems="center" spacing={2}>
                        <Box sx={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: theme.color, flexShrink: 0 }} />
                        <Stack spacing={0.5}>
                          <Typography variant="body2" fontWeight={600}>
                            {theme.label}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {theme.description}
                          </Typography>
                        </Stack>
                        <Button size="small" variant={theme.label === "Modern" ? "contained" : "outlined"} sx={{ ml: "auto" }}>
                          {theme.label === "Modern" ? "Active" : "Preview"}
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
                    Language
                  </Typography>
                  <Divider />
                  <Stack spacing={1.5}>
                    <Stack spacing={0.5}>
                      <Typography variant="body2" fontWeight={600}>
                        Default Locale
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {languageSettings.primary}
                      </Typography>
                    </Stack>
                    <Stack spacing={0.5}>
                      <Typography variant="body2" fontWeight={600}>
                        Enabled Translations
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {languageSettings.secondary.map((language) => (
                          <Chip key={language} label={language} variant="outlined" />
                        ))}
                      </Stack>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {languageSettings.compliance}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconCloud size={18} />
                    <Typography variant="h6" fontWeight={600}>
                      Integrations
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack spacing={2}>
                    {integrationCatalog.map((integration) => (
                      <Stack key={integration.name} spacing={0.5}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Typography variant="body2" fontWeight={600}>
                            {integration.name}
                          </Typography>
                          <Chip
                            label={integration.status}
                            size="small"
                            sx={{ backgroundColor: `${integration.color}20`, color: integration.color }}
                          />
                        </Stack>
                        <Typography variant="body2" color="text.secondary">
                          {integration.description}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Button variant="outlined" size="small" sx={{ alignSelf: "flex-start" }}>
                    Manage Integrations
                  </Button>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={600}>
                    Team
                  </Typography>
                  <Divider />
                  <Grid container spacing={2}>
                    {teamDirectory.map((member) => (
                      <Grid key={member.name} size={{ xs: 12, sm: 6 }}>
                        <Card variant="outlined" sx={{ height: "100%" }}>
                          <CardContent>
                            <Stack direction="row" spacing={2} alignItems="center">
                              <Avatar sx={{ bgcolor: indigo[500] }}>{member.avatar}</Avatar>
                              <Stack spacing={0.25}>
                                <Typography variant="body2" fontWeight={600}>
                                  {member.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {member.role}
                                </Typography>
                              </Stack>
                            </Stack>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                  <Button variant="contained" size="small" sx={{ alignSelf: "flex-start" }}>
                    Invite Team Members
                  </Button>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconApi size={18} />
                    <Typography variant="h6" fontWeight={600}>
                      Developer
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack spacing={1.5}>
                    {developerResources.map((resource) => (
                      <Stack key={resource.label} spacing={0.5}>
                        <Typography variant="body2" fontWeight={600}>
                          {resource.label}
                        </Typography>
                        <Box
                          sx={{
                            borderRadius: 1,
                            border: "1px solid",
                            borderColor: "divider",
                            px: 1.5,
                            py: 1,
                            backgroundColor: "background.default",
                          }}
                        >
                          <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
                            {resource.value}
                          </Typography>
                        </Box>
                      </Stack>
                    ))}
                    <Button variant="outlined" size="small" sx={{ alignSelf: "flex-start" }}>
                      Rotate Credentials
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <IconHelp size={18} />
                    <Typography variant="h6" fontWeight={600}>
                      Support
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack spacing={2}>
                    {supportOptions.map((option) => (
                      <Stack key={option.label} spacing={0.5}>
                        <Typography variant="body2" fontWeight={600}>
                          {option.label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {option.description}
                        </Typography>
                        <Button
                          component="a"
                          href={option.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="text"
                          size="small"
                          sx={{ alignSelf: "flex-start" }}
                        >
                          {option.action}
                        </Button>
                      </Stack>
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

export default ErpSettingsPage;
