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
  Paper,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import AddIcon from "@mui/icons-material/Add"

const FeeCategoryManager = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [classFilter, setClassFilter] = useState("")
  const [filterType, setFilterType] = useState("")

  // Mock data for fee categories
  const [feeCategories, setFeeCategories] = useState([
    {
      id: 1,
      category: "Tuition Fees",
      amount: "50000",
    },
    {
      id: 1,
      category: "Tuition Fees",
      amount: "50000",
    },
    {
      id: 1,
      category: "Tuition Fees",
      amount: "50000",
    },
  ])

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

  const handleChange = (id) => {
    console.log(`Change fee category with ID: ${id}`)
    // Here you would typically open a modal or navigate to edit the fee category
  }

  const handleRemove = (id) => {
    console.log(`Remove fee category with ID: ${id}`)
    // Here you would typically show a confirmation dialog and then remove the item
    setFeeCategories(feeCategories.filter((category, index) => index !== id))
  }

  const handleAddCategory = () => {
    console.log("Add new category")
    // Here you would typically open a modal or navigate to add a new fee category
    setFeeCategories([
      ...feeCategories,
      {
        id: 1,
        category: "Tuition Fees",
        amount: "50000",
      },
    ])
  }

  // Filter fee categories based on search term
  const filteredCategories = feeCategories.filter((category) => {
    return category.category.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <Box sx={{ width: "100%", p: 2 }}>
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
              borderRadius: 1,
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
            width: { xs: "100%", sm: 120 },
            borderRadius: 1,
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
            width: { xs: "100%", sm: 120 },
            borderRadius: 1,
            bgcolor: "#f5f5f5",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#e0e0e0",
            },
          }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="tuition">Tuition Fees</MenuItem>
          <MenuItem value="transport">Transport Fees</MenuItem>
        </Select>

        {/* Reset Filter Button */}
        <Button
          variant="outlined"
          onClick={resetFilters}
          sx={{
            width: { xs: "100%", sm: 120 },
            borderRadius: 1,
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

      {/* Add Category Button */}
      <Box sx={{ mb: 3 }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddCategory}
          sx={{
            bgcolor: "#2196f3",
            color: "white",
            textTransform: "none",
            borderRadius: 1,
            "&:hover": {
              bgcolor: "#1976d2",
            },
            boxShadow: "none",
            fontSize: "0.8rem",
            py: 0.75,
          }}
        >
          Add more category
        </Button>
      </Box>

      {/* Fee Categories Table */}
      <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 0 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ borderBottom: "1px solid #e0e0e0" }}>
              <TableCell sx={{ fontWeight: "medium", py: 1.5 }}>ID</TableCell>
              <TableCell sx={{ fontWeight: "medium", py: 1.5 }}>Category</TableCell>
              <TableCell sx={{ fontWeight: "medium", py: 1.5 }}>Amount (₹)</TableCell>
              <TableCell sx={{ fontWeight: "medium", py: 1.5 }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCategories.map((category, index) => (
              <TableRow key={index} sx={{ borderBottom: "1px solid #e0e0e0" }}>
                <TableCell sx={{ py: 1.5 }}>{category.id}</TableCell>
                <TableCell sx={{ py: 1.5 }}>{category.category}</TableCell>
                <TableCell sx={{ py: 1.5 }}>{category.amount}</TableCell>
                <TableCell sx={{ py: 1.5 }}>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      variant="contained"
                      onClick={() => handleChange(index)}
                      size="small"
                      sx={{
                        bgcolor: "#2196f3",
                        color: "white",
                        textTransform: "none",
                        borderRadius: 0,
                        px: 2,
                        py: 0.5,
                        fontSize: "0.75rem",
                        "&:hover": {
                          bgcolor: "#1976d2",
                        },
                        boxShadow: "none",
                        minWidth: "auto",
                      }}
                    >
                      Change
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleRemove(index)}
                      size="small"
                      sx={{
                        bgcolor: "#d32f2f",
                        color: "white",
                        textTransform: "none",
                        borderRadius: 0,
                        px: 2,
                        py: 0.5,
                        fontSize: "0.75rem",
                        "&:hover": {
                          bgcolor: "#b71c1c",
                        },
                        boxShadow: "none",
                        minWidth: "auto",
                      }}
                    >
                      Remove
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default FeeCategoryManager
