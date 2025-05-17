"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const LeaveApprovalTable = () => {
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
    <Box sx={{ width: "100%", p: 4, mt: 2 }}>
      {/* Search and Filter Row */}
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
        {/* Search Field */}
        <TextField
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              bgcolor: "#f5f5f5",
              "& fieldset": {
                borderColor: "2px solid black",
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

        {/* Categories Filter */}
        <Select
          value={categoryFilter}
          onChange={handleCategoryChange}
          displayEmpty
          renderValue={() => "Categories"}
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            width: { xs: "100%", sm: 180 },
            borderRadius: "8px",
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

        {/* Status Filter */}
        <Select
          value={statusFilter}
          onChange={handleStatusChange}
          displayEmpty
          renderValue={() => "Status"}
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            width: { xs: "100%", sm: 150 },
            borderRadius: "8px",
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

        {/* Reset Filter Button */}
        <Button
          variant="outlined"
          onClick={resetFilters}
          sx={{
            width: { xs: "100%", sm: "auto" },
            borderRadius: "8px",
            borderColor: "#e0e0e0",
            color: "text.primary",
            bgcolor: "#f5f5f5",
            "&:hover": {
              bgcolor: "#e0e0e0",
              borderColor: "#bdbdbd",
            },
            textTransform: "none",
          }}
        >
          Reset Filter
        </Button>
      </Box>

      {/* Leave Requests Table */}
      <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 0, boxShadow: "none" }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow >
              <TableCell sx={{ fontWeight: "medium" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "medium" }}>Category</TableCell>
              <TableCell sx={{ fontWeight: "medium" }}>Leave Type</TableCell>
              <TableCell sx={{ fontWeight: "medium" }}>Dates</TableCell>
              <TableCell sx={{ fontWeight: "medium" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "medium" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveRequests.map((request) => (
              <TableRow key={request.id} >
                <TableCell>{request.name}</TableCell>
                <TableCell>{request.category}</TableCell>
                <TableCell>{request.leaveType}</TableCell>
                <TableCell>{`${request.startDate} to ${request.endDate}`}</TableCell>
                <TableCell>
                  <Typography sx={{ color: getStatusColor(request.status) }}>{request.status}</Typography>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleViewDetail(request.id)}
                    sx={{
                      borderRadius: "4px",
                      bgcolor: "#e0e0e0",
                      color: "#757575",
                      textTransform: "none",
                      boxShadow: "none",
                      "&:hover": {
                        bgcolor: "#d5d5d5",
                        boxShadow: "none",
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

export default LeaveApprovalTable
