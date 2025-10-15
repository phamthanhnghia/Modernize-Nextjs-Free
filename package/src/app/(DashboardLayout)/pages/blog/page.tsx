"use client";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import PageHero from "@/app/(DashboardLayout)/pages/_components/PageHero";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { blue, deepPurple, indigo, teal } from "@mui/material/colors";
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

const editorPicks = [
  {
    title: "Integrating Predictive Insights into Planning Cadences",
    category: "Strategy",
    summary: "Connect forecast confidence with scenario planning to surface blind spots before they derail a quarter.",
    author: "By Revenue Operations Institute",
    href: "/pages/blog",
  },
  {
    title: "The 5 Metrics Every RevOps Leader Tracks Weekly",
    category: "Metrics",
    summary: "Dashboards worth bookmarking for pipeline creation, coverage, quality, efficiency, and conversion velocity.",
    author: "By Analytics Engineering",
    href: "/pages/blog",
  },
  {
    title: "How Support Signals Inform Expansion Motions",
    category: "Customer Success",
    summary: "Leverage ticket sentiment and resolution trends to pinpoint accounts ready for success planning.",
    author: "By Customer Outcomes",
    href: "/pages/blog",
  },
];

type BlogPostStatus = "Draft" | "Published" | "Archived";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  excerpt: string;
  content: string;
  status: BlogPostStatus;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  viewCount: number;
  likes: number;
  comments: number;
  seoTitle: string;
  metaDescription: string;
  readingTime: number;
};

const blogPosts: BlogPost[] = [
  {
    id: "BL-1203",
    title: "Unlocking Predictable Growth with Signal-Based Forecasts",
    slug: "signal-based-forecasts",
    author: "Ava Henderson",
    category: "Forecasting",
    tags: ["forecasting", "planning", "signals"],
    featuredImage: "/images/profile/user-1.jpg",
    excerpt: "A practical framework for pairing signal intelligence with executive forecast reviews.",
    content: "We outline the workflows Modernize customers deploy to align GTM, finance, and operations teams around real-time indicators.",
    status: "Published",
    createdAt: "2024-06-02T09:30:00Z",
    updatedAt: "2024-08-18T14:12:00Z",
    publishedAt: "2024-06-18T10:00:00Z",
    viewCount: 18420,
    likes: 642,
    comments: 37,
    seoTitle: "Predictable Growth with Signal-Based Forecasting",
    metaDescription: "Learn how revenue teams operationalize signal-based forecasting to increase accuracy and confidence.",
    readingTime: 8,
  },
  {
    id: "BL-1189",
    title: "Designing a Scalable Blog System in Modernize",
    slug: "scalable-blog-system",
    author: "Noah Patel",
    category: "Platform",
    tags: ["architecture", "content", "nextjs"],
    featuredImage: "/images/profile/user-1.jpg",
    excerpt: "Lessons from migrating a content library into a schema-first editorial workflow inside Modernize.",
    content: "We cover data modeling, localization, and automation patterns used to streamline editorial operations.",
    status: "Draft",
    createdAt: "2024-09-04T16:55:00Z",
    updatedAt: "2024-09-22T11:21:00Z",
    publishedAt: null,
    viewCount: 982,
    likes: 74,
    comments: 5,
    seoTitle: "Designing Scalable Content Systems with Modernize",
    metaDescription: "Architect a flexible content system with Modernize that blends editorial velocity with governance.",
    readingTime: 12,
  },
  {
    id: "BL-1105",
    title: "Customer Lifecycle Playbooks for Expansion",
    slug: "customer-lifecycle-playbooks",
    author: "Morgan Liu",
    category: "Customer Success",
    tags: ["customer-success", "expansion", "playbooks"],
    featuredImage: "/images/profile/user-1.jpg",
    excerpt: "Tactical plays combining product usage, support health, and executive alignment to unlock growth.",
    content: "Explore how Modernize monitors lifecycle milestones to trigger outreach, success planning, and executive briefings.",
    status: "Archived",
    createdAt: "2023-11-12T08:05:00Z",
    updatedAt: "2024-03-28T09:45:00Z",
    publishedAt: "2023-12-01T12:00:00Z",
    viewCount: 15308,
    likes: 489,
    comments: 26,
    seoTitle: "Expansion Playbooks Powered by Lifecycle Signals",
    metaDescription: "Discover expansion playbooks rooted in lifecycle intelligence to grow existing accounts.",
    readingTime: 10,
  },
];

const statusColors: Record<BlogPostStatus, "default" | "success" | "warning"> = {
  Draft: "warning",
  Published: "success",
  Archived: "default",
};

const formatDate = (value: string | null) =>
  value ? new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(value)) : "—";

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

      <Stack spacing={4}>
        <Typography variant="h5" fontWeight={700}>
          Editor&apos;s Picks
        </Typography>
        <Grid container spacing={3}>
          {editorPicks.map((pick) => (
            <Grid key={pick.title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="overline" color="primary.main">
                    {pick.category}
                  </Typography>
                  <Stack spacing={1.5} mt={1.5}>
                    <Typography fontWeight={600}>{pick.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {pick.summary}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {pick.author}
                    </Typography>
                    <Button
                      component={Link}
                      href={pick.href}
                      variant="text"
                      endIcon={<IconArrowUpRight size={18} />}
                      sx={{ px: 0 }}
                    >
                      Read story
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Card>
        <CardHeader
          title="Latest Articles"
          subheader="Operational view of each post with publishing status, metadata, and engagement."
        />
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Post ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Slug</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Tags</TableCell>
                <TableCell>Featured</TableCell>
                <TableCell>Excerpt</TableCell>
                <TableCell>Content</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>Updated</TableCell>
                <TableCell>Published</TableCell>
                <TableCell align="right">Views</TableCell>
                <TableCell align="right">Likes</TableCell>
                <TableCell align="right">Comments</TableCell>
                <TableCell>SEO Title</TableCell>
                <TableCell>Meta Description</TableCell>
                <TableCell align="right">Reading Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blogPosts.map((post) => (
                <TableRow key={post.id} hover>
                  <TableCell>{post.id}</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>{post.title}</TableCell>
                  <TableCell>{post.slug}</TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>{post.category}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {post.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" variant="outlined" />
                      ))}
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Avatar
                      variant="rounded"
                      src={post.featuredImage}
                      alt={post.title}
                      sx={{ width: 56, height: 40 }}
                    />
                  </TableCell>
                  <TableCell sx={{ maxWidth: 220 }}>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {post.excerpt}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ maxWidth: 260 }}>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {post.content}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip label={post.status} color={statusColors[post.status]} size="small" />
                  </TableCell>
                  <TableCell>{formatDate(post.createdAt)}</TableCell>
                  <TableCell>{formatDate(post.updatedAt)}</TableCell>
                  <TableCell>{formatDate(post.publishedAt)}</TableCell>
                  <TableCell align="right">{post.viewCount.toLocaleString()}</TableCell>
                  <TableCell align="right">{post.likes.toLocaleString()}</TableCell>
                  <TableCell align="right">{post.comments.toLocaleString()}</TableCell>
                  <TableCell>{post.seoTitle}</TableCell>
                  <TableCell sx={{ maxWidth: 260 }}>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {post.metaDescription}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">{post.readingTime} min</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Card sx={{ backgroundColor: indigo[50] }}>
        <CardContent>
          <Stack spacing={2} alignItems="flex-start">
            <Typography variant="h6" fontWeight={700}>
              Stay in the loop
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Subscribe to monthly release notes and revenue operations playbooks curated by the Modernize editorial team.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: "100%" }}>
              <Button component={Link} href="/pages/contact" variant="contained" color="primary">
                Join the newsletter
              </Button>
              <Button component={Link} href="/pages/blog" variant="outlined" color="primary">
                Explore archive
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  </PageContainer>
);

export default BlogPage;
