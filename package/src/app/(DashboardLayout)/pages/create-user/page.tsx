"use client";

import { ChangeEvent, useEffect, useState } from "react";

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
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { indigo } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import { IconUpload, IconUser } from "@tabler/icons-react";

const roles = [
  "Operations Lead",
  "Automation Engineer",
  "Finance Partner",
  "Security Analyst",
  "Product Manager",
];

const CreateUserPage = () => {
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (avatarPreview) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview((prev) => {
        if (prev) {
          URL.revokeObjectURL(prev);
        }
        return URL.createObjectURL(file);
      });
    }
  };

  const handleAvatarRemove = () => {
    setAvatarFile(null);
    setAvatarPreview((prev) => {
      if (prev) {
        URL.revokeObjectURL(prev);
      }
      return null;
    });
  };

  return (
    <PageContainer
      title="Create User"
      description="Add a new teammate to the Modernize ERP workspace."
    >
      <Stack spacing={6}>
        <PageHero
          title="Create User"
          description=""
          highlights={[]}
          primaryAction={{ label: "View User Directory", href: "/pages/list" }}
          secondaryAction={{ label: "Invite via Email", href: "https://modernize-erp.com/invite", variant: "outlined" }}
        />

        <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems="stretch" sx={{ width: "100%" }}>
          <Card
            sx={{
              width: { xs: "100%", md: 360, lg: 380 },
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <Stack spacing={3} sx={{ flexGrow: 1 }}>
                <Stack spacing={2}>
                  <Box
                    component="label"
                    htmlFor="avatar-upload"
                    sx={{
                      border: `1px dashed ${alpha(indigo[500], 0.4)}`,
                      borderRadius: 2,
                      p: 3,
                      textAlign: "center",
                      cursor: "pointer",
                      backgroundColor: alpha(indigo[50] ?? "#f5f5ff", 0.6),
                      display: "block",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: indigo[500],
                        backgroundColor: alpha(indigo[500], 0.08),
                      },
                    }}
                  >
                    <input
                      id="avatar-upload"
                      hidden
                      type="file"
                      accept="image/png,image/jpeg"
                      onChange={handleAvatarChange}
                    />
                    <Stack spacing={2} alignItems="center">
                      <Avatar
                        src={avatarPreview ?? undefined}
                        sx={{ width: 96, height: 96, bgcolor: indigo[500] }}
                      >
                        {!avatarPreview && <IconUser size={42} />}
                      </Avatar>
                      <Stack spacing={0.5}>
                        <Typography variant="subtitle1" fontWeight={600}>
                          Upload Avatar
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Drag a photo here or click to browse · PNG/JPEG · Max 5 MB
                        </Typography>
                      </Stack>
                      <Button variant="contained" startIcon={<IconUpload size={16} />}>
                        Select Image
                      </Button>
                    </Stack>
                  </Box>
                  {avatarFile && (
                    <Button variant="text" color="inherit" onClick={handleAvatarRemove} sx={{ alignSelf: "flex-start" }}>
                      Remove photo
                    </Button>
                  )}
                </Stack>

                <Divider />

                <Stack spacing={1.5}>
                  <Typography variant="subtitle2" color="text.secondary" textTransform="uppercase">
                    Quick Overview
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Provide verified contact information and designate the user’s operational role before granting access.
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Chip label="Admin Eligible" variant="outlined" />
                    <Chip label="SaaS License" color="primary" variant="outlined" />
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>

          <Card sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ pb: 4, flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <Box component="form" noValidate autoComplete="off" sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <Stack spacing={4} sx={{ flexGrow: 1 }}>
                  <Stack spacing={1}>
                    <Typography variant="h6" fontWeight={600}>
                      User Information
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Capture essential contact and role data to issue credentials and align permission sets.
                    </Typography>
                  </Stack>

                  <Box
                    sx={{
                      display: "grid",
                      gap: 3,
                      gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
                    }}
                  >
                    <TextField label="Full Name" name="name" required fullWidth placeholder="Avery Morgan" />
                    <TextField label="Email" name="email" required type="email" fullWidth placeholder="avery@modernize-erp.com" />
                    <TextField label="Phone" name="phone" required fullWidth placeholder="+1 (415) 555-1287" />
                    <TextField label="Role" name="role" select required fullWidth defaultValue={roles[0]}>
                      {roles.map((role) => (
                        <MenuItem key={role} value={role}>
                          {role}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      label="Address"
                      name="address"
                      required
                      multiline
                      minRows={3}
                      fullWidth
                      placeholder="123 Market Street, San Francisco, CA 94105"
                      sx={{ gridColumn: { md: "span 2" } }}
                    />
                    <TextField
                      label="Notes"
                      name="notes"
                      multiline
                      minRows={2}
                      fullWidth
                      placeholder="Add onboarding context, responsibilities, or access prerequisites."
                      sx={{ gridColumn: { md: "span 2" } }}
                    />
                  </Box>

                  <Divider />

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="flex-end">
                    <Button component="a" href="/pages/list" variant="text">
                      Cancel
                    </Button>
                    <Button variant="contained" type="submit">
                      Save User
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </PageContainer>
  );
};

export default CreateUserPage;
