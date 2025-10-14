"use client";

import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

type ActionConfig = {
  label: string;
  href: string;
  variant?: "contained" | "outlined";
  icon?: ReactNode;
  disableElevation?: boolean;
};

type PageHeroProps = {
  title: string;
  description: string;
  highlights: string[];
  primaryAction?: ActionConfig;
  secondaryAction?: ActionConfig;
};

const PageHero = ({
  title,
  description,
  highlights,
  primaryAction,
  secondaryAction,
}: PageHeroProps) => (
  <Box
    display="flex"
    flexDirection={{ xs: "column", md: "row" }}
    alignItems={{ xs: "flex-start", md: "center" }}
    justifyContent="space-between"
    gap={3}
  >
    <Stack spacing={1.5}>
      <Typography variant="h4" fontWeight={700} lineHeight={1.2}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" maxWidth={{ md: 720 }}>
        {description}
      </Typography>
      {(primaryAction || secondaryAction) && (
        <Stack direction="row" spacing={2} flexWrap="wrap">
          {primaryAction && (
            <Button
              component={Link}
              href={primaryAction.href}
              variant={primaryAction.variant ?? "contained"}
              disableElevation={primaryAction.disableElevation ?? true}
              endIcon={primaryAction.icon}
            >
              {primaryAction.label}
            </Button>
          )}
          {secondaryAction && (
            <Button
              component={Link}
              href={secondaryAction.href}
              variant={secondaryAction.variant ?? "outlined"}
              disableElevation={secondaryAction.disableElevation ?? false}
              endIcon={secondaryAction.icon}
            >
              {secondaryAction.label}
            </Button>
          )}
        </Stack>
      )}
    </Stack>
    <Stack direction="row" spacing={1} flexWrap="wrap">
      {highlights.map((item) => (
        <Chip key={item} label={item} color="primary" variant="outlined" />
      ))}
    </Stack>
  </Box>
);

export default PageHero;
