'use client';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import {
  Chip,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

type PostStatus = 'Draft' | 'Published' | 'Archived';

type BlogInventoryRow = {
  id: string;
  title: string;
  slug: string;
  author: string;
  category: string;
  status: PostStatus;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  viewCount: number;
  likes: number;
  comments: number;
  readingTime: number;
  seoTitle: string;
  metaDescription: string;
};

const rows: BlogInventoryRow[] = [
  {
    id: 'BL-1301',
    title: 'AI-Assisted Planning for RevOps',
    slug: 'ai-assisted-planning',
    author: 'Rowan Blake',
    category: 'Planning',
    status: 'Published',
    createdAt: '2024-08-12T10:15:00Z',
    updatedAt: '2024-09-05T09:02:00Z',
    publishedAt: '2024-08-18T12:00:00Z',
    viewCount: 21450,
    likes: 812,
    comments: 41,
    readingTime: 9,
    seoTitle: 'AI-Assisted Revenue Planning',
    metaDescription: 'Discover how RevOps teams operationalize AI-assisted planning workflows in Modernize.',
  },
  {
    id: 'BL-1296',
    title: 'Designing Insight-Rich Dashboards',
    slug: 'insight-rich-dashboards',
    author: 'Morgan Lee',
    category: 'Analytics',
    status: 'Draft',
    createdAt: '2024-09-27T15:22:00Z',
    updatedAt: '2024-10-02T08:47:00Z',
    publishedAt: null,
    viewCount: 561,
    likes: 52,
    comments: 3,
    readingTime: 12,
    seoTitle: 'Design Better Analytics Dashboards',
    metaDescription: 'Guidance for building analytics dashboards that surface leading indicators for every stakeholder.',
  },
  {
    id: 'BL-1270',
    title: 'Lifecycle Signals Every CS Team Needs',
    slug: 'lifecycle-signals',
    author: 'Priya Kapoor',
    category: 'Customer Success',
    status: 'Published',
    createdAt: '2024-07-02T07:45:00Z',
    updatedAt: '2024-07-18T11:10:00Z',
    publishedAt: '2024-07-08T09:30:00Z',
    viewCount: 18220,
    likes: 603,
    comments: 29,
    readingTime: 7,
    seoTitle: 'Customer Success Lifecycle Signals',
    metaDescription: 'Learn which lifecycle signals Modernize customers track to anticipate renewal risk and expansion.',
  },
  {
    id: 'BL-1199',
    title: 'Automating Compliance Reviews',
    slug: 'automating-compliance-reviews',
    author: 'Elias Chen',
    category: 'Operations',
    status: 'Archived',
    createdAt: '2023-12-14T13:05:00Z',
    updatedAt: '2024-04-01T10:00:00Z',
    publishedAt: '2024-01-10T14:15:00Z',
    viewCount: 14308,
    likes: 388,
    comments: 17,
    readingTime: 11,
    seoTitle: 'Automated Compliance Reviews',
    metaDescription: 'Operational checklist for automating compliance reviews across multi-regional teams.',
  },
];

const statusColors: Record<PostStatus, 'default' | 'success' | 'warning'> = {
  Draft: 'warning',
  Published: 'success',
  Archived: 'default',
};

const formatDate = (value: string | null) =>
  value ? new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(value)) : '—';

const TableUtilityPage = () => {
  return (
    <PageContainer title="Table" description="Utility examples highlighting data-rich table patterns.">
      <DashboardCard title="Blog Inventory">
        <Stack spacing={2} sx={{ pb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Structured blog metadata powering editorial workflows, publishing status reviews, and SEO audits.
          </Typography>
        </Stack>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Post ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Slug</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>Updated</TableCell>
                <TableCell>Published</TableCell>
                <TableCell align="right">Views</TableCell>
                <TableCell align="right">Likes</TableCell>
                <TableCell align="right">Comments</TableCell>
                <TableCell align="right">Reading Time</TableCell>
                <TableCell>SEO Title</TableCell>
                <TableCell>Meta Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>{row.id}</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>{row.title}</TableCell>
                  <TableCell>{row.slug}</TableCell>
                  <TableCell>{row.author}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>
                    <Chip label={row.status} color={statusColors[row.status]} size="small" />
                  </TableCell>
                  <TableCell>{formatDate(row.createdAt)}</TableCell>
                  <TableCell>{formatDate(row.updatedAt)}</TableCell>
                  <TableCell>{formatDate(row.publishedAt)}</TableCell>
                  <TableCell align="right">{row.viewCount.toLocaleString()}</TableCell>
                  <TableCell align="right">{row.likes.toLocaleString()}</TableCell>
                  <TableCell align="right">{row.comments.toLocaleString()}</TableCell>
                  <TableCell align="right">{row.readingTime} min</TableCell>
                  <TableCell>{row.seoTitle}</TableCell>
                  <TableCell sx={{ maxWidth: 260 }}>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {row.metaDescription}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DashboardCard>
    </PageContainer>
  );
};

export default TableUtilityPage;
