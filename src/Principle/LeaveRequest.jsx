"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  IconButton,
  Divider,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"
import NotificationsIcon from "@mui/icons-material/Notifications"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const LeaveApproval = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")

  // Mock data for leave requests
  const leaveRequests = [
    {
      id: 1,
      name: "Emma Rodriguez",
      category: "Teacher",
      leaveType: "Casual",
      startDate: "2024-04-15",
      endDate: "2024-04-20",
      status: "Pending",
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      category: "Teacher",
      leaveType: "Casual",
      startDate: "2024-04-15",
      endDate: "2024-04-20",
      status: "Approved",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      category: "Teacher",
      leaveType: "Casual",
      startDate: "2024-04-15",
      endDate: "2024-04-20",
      status: "Rejected",
    },
  ]

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value)
  }

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value)
  }

  const resetFilters = () => {
    setSearchTerm("")
    setCategoryFilter("")
    setStatusFilter("")
  }

  const handleViewDetail = (id) => {
    console.log(`Viewing details for leave request ${id}`)
    // Here you would typically navigate to a detail view or open a modal
  }

  // Function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "#4caf50" // Green
      case "Rejected":
        return "#f44336" // Red
      case "Pending":
        return "#ff9800" // Orange/Yellow
      default:
        return "#757575" // Grey
    }
  }

  return (
    <Box sx={{ width: "100%", mt: 2, px: 2 , p : 4}}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h5" component="h1" fontWeight="regular">
          Leave approval
        </Typography>
        <IconButton aria-label="notifications">
          <NotificationsIcon />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
        <TextField
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 auto" },
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              bgcolor: "#f5f5f5",
              "& fieldset": {
                borderColor: "#e0e0e0",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Select
          value={categoryFilter}
          onChange={handleCategoryChange}
          displayEmpty
          renderValue={() => "Categories"}
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            width: { xs: "100%", sm: 200 },
            borderRadius: 2,
            bgcolor: "#f5f5f5",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e0e0e0",
            },
          }}
        >
          <MenuItem value="">All Categories</MenuItem>
          <MenuItem value="Teacher">Teacher</MenuItem>
          <MenuItem value="Staff">Staff</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
        </Select>

        <Select
          value={statusFilter}
          onChange={handleStatusChange}
          displayEmpty
          renderValue={() => "Status"}
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            width: { xs: "100%", sm: 150 },
            borderRadius: 2,
            bgcolor: "#f5f5f5",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e0e0e0",
            },
          }}
        >
          <MenuItem value="">All Statuses</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Approved">Approved</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>

        <Button
          variant="outlined"
          onClick={resetFilters}
          sx={{
            width: { xs: "100%", sm: "auto" },
            borderRadius: 2,
            borderColor: "#e0e0e0",
            color: "text.primary",
            bgcolor: "#f5f5f5",
            "&:hover": {
              bgcolor: "#e0e0e0",
              borderColor: "#bdbdbd",
            },
          }}
        >
          Reset Filter
        </Button>
      </Box>

      <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 2 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Leave Type</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Dates</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.name}</TableCell>
                <TableCell>{request.category}</TableCell>
                <TableCell>{request.leaveType}</TableCell>
                <TableCell>{`${request.startDate} to ${request.endDate}`}</TableCell>
                <TableCell>
                  <Typography sx={{ color: getStatusColor(request.status) }}>{request.status}</Typography>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleViewDetail(request.id)}
                    sx={{
                      borderRadius: 1,
                      borderColor: "#e0e0e0",
                      color: "text.secondary",
                      bgcolor: "#f5f5f5",
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: "#e0e0e0",
                        borderColor: "#bdbdbd",
                      },
                    }}
                  >
                    View detail
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default LeaveApproval
