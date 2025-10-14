"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import PageHero from "@/app/(DashboardLayout)/pages/_components/PageHero";
import { Button, Card, CardContent, Divider, Grid, Stack, Typography } from "@mui/material";
import { blue, deepPurple, teal } from "@mui/material/colors";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

const summaryCards = [
  {
    title: "Release Spotlight",
    description: "Deep dives into the latest product updates and roadmap alignment.",
    color: blue[50],
  },
  {
    title: "Customer Stories",
    description: "Real-world outcomes from teams modernizing their operations with Modernize.",
    color: teal[50],
  },
  {
    title: "Best Practices",
    description: "Guides from our strategy team covering governance, automation, and analytics.",
    color: deepPurple[50],
  },
];

const trendingStories = [
  {
    title: "Building a Data-Driven Revenue Engine",
    author: "By Modernize Strategy Team",
    excerpt: "How scaling teams connect lifecycle signals to close planning gaps.",
  },
  {
    title: "Modernize Summer Release Recap",
    author: "By Product Marketing",
    excerpt: "Three capabilities that make dashboard insights even faster to unlock.",
  },
  {
    title: "Designing Automation Governance",
    author: "By Customer Success",
    excerpt: "Best practices for building resilient, auditable automations across departments.",
  },
];

const BlogPage = () => (
  <PageContainer
    title="Blog"
    description="Thought leadership, release notes, and customer stories curated by the Modernize product team."
  >
    <Stack spacing={6}>
      <PageHero
        title="Blog"
        description="Thought leadership, release notes, and customer stories curated by the Modernize product team."
        highlights={["Product updates", "Playbooks", "Community"]}
        primaryAction={{
          label: "Latest Stories",
          href: "#latest",
          icon: <IconArrowUpRight size={18} />,
        }}
      />

      <Grid container spacing={3} id="latest">
        {summaryCards.map((card) => (
          <Grid key={card.title} size={{ xs: 12, md: 4 }}>
            <Card sx={{ height: "100%", backgroundColor: card.color }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider />

      <Stack spacing={4}>
        <Typography variant="h5" fontWeight={700}>
          Trending Stories
        </Typography>
        <Grid container spacing={3}>
          {trendingStories.map((story) => (
            <Grid key={story.title} size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography fontWeight={600}>{story.title}</Typography>
                  <Typography variant="caption" color="text.secondary" display="block" mt={1}>
                    {story.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1.5}>
                    {story.excerpt}
                  </Typography>
                  <Button
                    component={Link}
                    href="/pages/blog"
                    variant="text"
                    endIcon={<IconArrowUpRight size={18} />}
                    sx={{ mt: 2, px: 0 }}
                  >
                    Continue reading
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

export default BlogPage;
