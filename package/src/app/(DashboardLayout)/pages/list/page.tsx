"use client";

import { ChangeEvent, useState } from "react";

import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import PageHero from "@/app/(DashboardLayout)/pages/_components/PageHero";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Checkbox,
  MenuItem,
  Divider,
  TablePagination,
  InputAdornment,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { indigo } from "@mui/material/colors";
import {
  IconDownload,
  IconPlus,
  IconSearch,
  IconUserPlus,
} from "@tabler/icons-react";

const userRows = [
  {
    name: "Olivia Rhye",
    email: "olivia.rhye@modernize-erp.com",
    role: "Operations Lead",
    status: "Active",
    lastActive: "2 minutes ago",
  },
  {
    name: "Preston Warner",
    email: "preston.warner@modernize-erp.com",
    role: "Automation Engineer",
    status: "Active",
    lastActive: "18 minutes ago",
  },
  {
    name: "Daniela Reyes",
    email: "daniela.reyes@modernize-erp.com",
    role: "Finance Partner",
    status: "Invited",
    lastActive: "Pending acceptance",
  },
  {
    name: "Arjun Kapur",
    email: "arjun.kapur@modernize-erp.com",
    role: "Security Analyst",
    status: "Disabled",
    lastActive: "30 days ago",
  },
  {
    name: "Samantha Lee",
    email: "samantha.lee@modernize-erp.com",
    role: "Product Manager",
    status: "Active",
    lastActive: "6 minutes ago",
  },
  {
    name: "Noah Fischer",
    email: "noah.fischer@modernize-erp.com",
    role: "Finance Controller",
    status: "Active",
    lastActive: "Live now",
  },
];

const statusProps = {
  Active: { label: "Active", color: "success" as const },
  Invited: { label: "Invited", color: "info" as const },
  Disabled: { label: "Disabled", color: "default" as const },
};

const ListPage = () => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredRows =
    statusFilter === "All"
      ? userRows
      : userRows.filter((row) => row.status === statusFilter);
  const paginatedRows = filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const filteredEmailSet = new Set(filteredRows.map((row) => row.email));
  const visibleSelectedCount = selectedRows.filter((email) => filteredEmailSet.has(email)).length;
  const selectedOnPage = paginatedRows.filter((row) => selectedRows.includes(row.email)).length;
  const allSelected = paginatedRows.length > 0 && selectedOnPage === paginatedRows.length;

  const toggleRow = (email: string) => {
    setSelectedRows((prev) =>
      prev.includes(email) ? prev.filter((item) => item !== email) : [...prev, email]
    );
  };

  const toggleAll = (checked: boolean) => {
    const pageEmails = paginatedRows.map((user) => user.email);
    setSelectedRows((prev) => {
      if (checked) {
        const merged = new Set([...prev, ...pageEmails]);
        return Array.from(merged);
      }
      return prev.filter((email) => !pageEmails.includes(email));
    });
  };

  const handleStatusFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setStatusFilter(value);
    setPage(0);
    setSelectedRows((prev) =>
      prev.filter((email) => {
        if (value === "All") {
          return true;
        }
        const match = userRows.find((row) => row.email === email);
        return match?.status === value;
      })
    );
  };

  return (
    <PageContainer title="User Directory" description="Monitor ERP workspace members and access controls.">
      <Stack spacing={6}>
        <PageHero
          title="Team Overview"
          description="Track active users, invitations, and access governance across the ERP footprint."
          highlights={["Live Activity", "Role Coverage", "Access Insights"]}
          primaryAction={{
            label: "Invite User",
            href: "https://modernize-erp.com/invite",
          }}
          secondaryAction={{
            label: "Export CSV",
            href: "https://modernize-erp.com/users/export",
            variant: "outlined",
          }}
        />

        <Card>
          <CardContent>
            <Stack spacing={3}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems={{ xs: "stretch", md: "center" }}>
                <TextField
                  placeholder="Search team"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconSearch size={18} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ flexGrow: 1 }}
                />
                <TextField
                  select
                  size="small"
                  label="Status"
                  value={statusFilter}
                  onChange={handleStatusFilterChange}
                  sx={{ minWidth: { xs: "100%", md: 180 } }}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Invited">Invited</MenuItem>
                  <MenuItem value="Disabled">Disabled</MenuItem>
                </TextField>
                <Stack direction="row" spacing={1} justifyContent={{ xs: "flex-start", md: "flex-end" }}>
                  <Button
                    component="a"
                    href="/pages/create-user"
                    variant="contained"
                    size="small"
                    startIcon={<IconPlus size={16} />}
                  >
                    Add User
                  </Button>
                  <Button variant="outlined" size="small" startIcon={<IconDownload size={16} />}>
                    Download Report
                  </Button>
                  <Button variant="text" size="small" startIcon={<IconUserPlus size={16} />}>
                    Invite User
                  </Button>
                </Stack>
              </Stack>

              {visibleSelectedCount > 0 && (
                <Box
                  sx={{
                    borderRadius: 1,
                    px: 2,
                    py: 1.5,
                    backgroundColor: "action.hover",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 2,
                  }}
                >
                  <Typography variant="body2" fontWeight={600}>
                    {visibleSelectedCount} selected
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" size="small">
                      Reset Passwords
                    </Button>
                    <Button variant="outlined" size="small">
                      Disable Access
                    </Button>
                    <Button variant="text" size="small" onClick={() => setSelectedRows([])}>
                      Clear Selection
                    </Button>
                  </Stack>
                </Box>
              )}

              <Divider />

              <Table sx={{ minWidth: 760 }}>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={allSelected}
                        indeterminate={selectedOnPage > 0 && selectedOnPage < paginatedRows.length}
                        onChange={(event) => toggleAll(event.target.checked)}
                        inputProps={{ "aria-label": "Select all users" }}
                      />
                    </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Last Active</TableCell>
                    <TableCell align="right">Row Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedRows.map((user) => {
                    const isSelected = selectedRows.includes(user.email);
                    return (
                      <TableRow key={user.email} hover selected={isSelected}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isSelected}
                            onChange={() => toggleRow(user.email)}
                            inputProps={{ "aria-label": `Select ${user.name}` }}
                          />
                        </TableCell>
                        <TableCell>
                          <Stack direction="row" spacing={2} alignItems="center">
                            <Avatar sx={{ bgcolor: indigo[500] }}>{user.name.split(" ").map((part) => part[0]).join("")}</Avatar>
                            <Stack spacing={0.25}>
                              <Typography variant="body2" fontWeight={600}>
                                {user.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {user.email}
                              </Typography>
                            </Stack>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" color="text.secondary">
                            {user.role}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={statusProps[user.status as keyof typeof statusProps].label}
                            color={statusProps[user.status as keyof typeof statusProps].color}
                            size="small"
                            variant={user.status === "Disabled" ? "outlined" : "filled"}
                          />
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="body2" color="text.secondary">
                            {user.lastActive}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Stack direction="row" spacing={1} justifyContent="flex-end">
                            <Button size="small" variant="text">
                              View
                            </Button>
                            <Button size="small" variant="outlined">
                              Suspend
                            </Button>
                            <Button size="small" variant="contained">
                              Grant Role
                            </Button>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              <TablePagination
                component="div"
                count={filteredRows.length}
                page={page}
                onPageChange={(_, value) => setPage(value)}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={(event) => {
                  setRowsPerPage(parseInt(event.target.value, 10));
                  setPage(0);
                }}
                rowsPerPageOptions={[5, 10, 25]}
              />
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Stack spacing={2} direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "center" }} justifyContent="space-between">
              <Stack spacing={0.5}>
                <Typography variant="h6" fontWeight={600}>
                  Activity Summary
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  142 total members · 12 pending invitations · 4 deactivated
                </Typography>
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1} width={{ xs: "100%", sm: "auto" }}>
                <Button variant="text" size="small">
                  View Governance Policies
                </Button>
                <Button variant="outlined" size="small">
                  Audit Log
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </PageContainer>
  );
};

export default ListPage;
