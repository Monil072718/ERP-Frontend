"use client"

import { useState } from "react"
import {
  Box,
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
  MenuItem,
  Select,
  FormControl,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const InterviewManagement = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [subjectFilter, setSubjectFilter] = useState("")
  const [actionFilter, setActionFilter] = useState("")

  // Mock data for interviews
  const interviews = [
    { id: 1, name: "John Doe", subject: "Math", interviewDate: "Not assigned" },
    { id: 2, name: "John Doe", subject: "Math", interviewDate: "Not assigned" },
    { id: 3, name: "John Doe", subject: "Math", interviewDate: "Not assigned" },
    { id: 4, name: "John Doe", subject: "Math", interviewDate: "Not assigned" },
    { id: 5, name: "John Doe", subject: "Math", interviewDate: "Not assigned" },
  ]

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSubjectFilter = (event) => {
    setSubjectFilter(event.target.value)
  }

  const handleActionFilter = (event) => {
    setActionFilter(event.target.value)
  }

  const resetFilters = () => {
    setSearchQuery("")
    setSubjectFilter("")
    setActionFilter("")
  }

  const handleAccept = (id) => {
    console.log(`Accepted interview ${id}`)
    // Implement your accept logic here
  }

  const handleReject = (id) => {
    console.log(`Rejected interview ${id}`)
    // Implement your reject logic here
  }

  return (
    <Box sx={{ p: 4, mt : 2, margin: "0 auto" }}>
      {/* Search and Filter Section */}
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <TextField
          placeholder="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearch}
          sx={{
            bgcolor: "#f5f5f5",
            borderRadius: 1,
            flexGrow: 1,
            borderRadius: '10px',
            minWidth: "250px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <FormControl>
          <Select
            displayEmpty
            value={subjectFilter}
            onChange={handleSubjectFilter}
            sx={{ minWidth: "150px", bgcolor: "#f5f5f5" , borderRadius: '10px', }}
            renderValue={(selected) => {
              if (selected === "") {
                return "Subject"
              }
              return selected
            }}
          >
            <MenuItem value="">All Subjects</MenuItem>
            <MenuItem value="Math">Math</MenuItem>
            <MenuItem value="Science">Science</MenuItem>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="History">History</MenuItem>
          </Select>
        </FormControl>

        <FormControl >
          <Select
            displayEmpty
            value={actionFilter}
            onChange={handleActionFilter}
            sx={{ minWidth: "150px", bgcolor: "#f5f5f5" , borderRadius: '10px', }}
            renderValue={(selected) => {
              if (selected === "") {
                return "Action"
              }
              return selected
            }}
          >
            <MenuItem value="">All Actions</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Accepted">Accepted</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="outlined"
          onClick={resetFilters}
          sx={{
            bgcolor: "#f5f5f5",
            color: "text.primary",
            borderColor: "#e0e0e0",
            borderRadius: '10px',
            "&:hover": {
              bgcolor: "#e0e0e0",
              borderColor: "#d0d0d0",
            },
          }}
        >
          Reset Filter
        </Button>
      </Box>

      {/* Interviews Table */}
      <TableContainer component={Paper} sx={{ boxShadow: "none", border: "1px solid #e0e0e0" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Subject</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Interview Date</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {interviews.map((interview) => (
              <TableRow key={interview.id}>
                <TableCell>{interview.name}</TableCell>
                <TableCell>{interview.subject}</TableCell>
                <TableCell>{interview.interviewDate}</TableCell>
                <TableCell align="right">
                  <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleAccept(interview.id)}
                      sx={{
                        bgcolor: "#4caf50",
                        "&:hover": {
                          bgcolor: "#388e3c",
                        },
                      }}
                    >
                      Accept
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleReject(interview.id)}
                      sx={{
                        bgcolor: "#f44336",
                        "&:hover": {
                          bgcolor: "#d32f2f",
                        },
                      }}
                    >
                      Reject
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

export default InterviewManagement
