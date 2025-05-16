"use client"

import { useState } from "react"
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const StudentFeeStatus = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [classFilter, setClassFilter] = useState("")
  const [filterType, setFilterType] = useState("")

  // Mock data for student fee status
  const studentFees = [
    {
      id: 1,
      studentName: "Aryan Gupta",
      amount: "₹12000",
      status: "Pending",
    },
    {
      id: 2,
      studentName: "Aryan Gupta",
      amount: "₹12000",
      status: "Pending",
    },
    {
      id: 3,
      studentName: "Aryan Gupta",
      amount: "₹12000",
      status: "Pending",
    },
  ]

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleClassFilterChange = (e) => {
    setClassFilter(e.target.value)
  }

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value)
  }

  const resetFilters = () => {
    setSearchTerm("")
    setClassFilter("")
    setFilterType("")
  }

  const handleUpdate = (id) => {
    console.log(`Update fee status for ID: ${id}`)
    // Here you would typically open a modal or navigate to update the fee status
  }

  // Filter student fees based on search term
  const filteredFees = studentFees.filter((fee) => {
    return fee.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <Box sx={{ width: "100%", p: 3 }}>
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

        {/* Class Filter */}
        <Select
          value={classFilter}
          onChange={handleClassFilterChange}
          displayEmpty
          renderValue={() => "Class"}
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            width: { xs: "100%", sm: 170 },
            borderRadius: "8px",
            bgcolor: "#f5f5f5",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e0e0e0",
            },
          }}
        >
          <MenuItem value="">All Classes</MenuItem>
          <MenuItem value="1">Class 1</MenuItem>
          <MenuItem value="2">Class 2</MenuItem>
          <MenuItem value="3">Class 3</MenuItem>
        </Select>

        {/* Filter Type */}
        <Select
          value={filterType}
          onChange={handleFilterTypeChange}
          displayEmpty
          renderValue={() => "Filter"}
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            width: { xs: "100%", sm: 170 },
            borderRadius: "8px",
            bgcolor: "#f5f5f5",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e0e0e0",
            },
          }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="paid">Paid</MenuItem>
        </Select>

        {/* Reset Filter Button */}
        <Button
          variant="outlined"
          onClick={resetFilters}
          sx={{
            width: { xs: "100%", sm: 170 },
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

      {/* Student Fee Status Table */}
      <TableContainer sx={{ border: "none" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ "& th": { fontWeight: "medium", borderBottom: "1px solid #e0e0e0" } }}>
              <TableCell>Student Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredFees.map((fee) => (
              <TableRow key={fee.id} sx={{ "& td": { borderBottom: "1px solid #e0e0e0" } }}>
                <TableCell>{fee.studentName}</TableCell>
                <TableCell>{fee.amount}</TableCell>
                <TableCell>{fee.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleUpdate(fee.id)}
                    size="small"
                    sx={{
                      bgcolor: "#2196f3",
                      color: "white",
                      textTransform: "none",
                      borderRadius: "4px",
                      px: 2,
                      py: 0.5,
                      fontSize: "0.75rem",
                      "&:hover": {
                        bgcolor: "#1976d2",
                      },
                      boxShadow: "none",
                    }}
                  >
                    Update
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

export default StudentFeeStatus
