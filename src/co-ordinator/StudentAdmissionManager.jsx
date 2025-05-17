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
  Checkbox,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const StudentAdmissionManager = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedClass, setSelectedClass] = useState("")
  const [recentClass, setRecentClass] = useState("")
  const [selectedStudents, setSelectedStudents] = useState([])

  // Mock data for students
  const students = Array(10)
    .fill()
    .map((_, index) => ({
      id: `1255215`,
      name: "John doe",
      batch: "6th",
      admissionDate: "25-10-2024",
      status: "Unassigned",
      class: "6 th",
      section: "B",
    }))

  // Handle checkbox selection
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedStudents(students.map((student) => student.id))
    } else {
      setSelectedStudents([])
    }
  }

  const handleSelectStudent = (event, studentId) => {
    if (event.target.checked) {
      setSelectedStudents([...selectedStudents, studentId])
    } else {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId))
    }
  }

  // Handle schedule button click
  const handleScheduleClick = () => {
    console.log("Scheduling students:", selectedStudents)
    // Implement your scheduling logic here
  }

  return (
    <Box sx={{ p: 3 }}>
      {/* Statistics Cards */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 4,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 2,
            textAlign: "center",
            borderRadius: 1,
            border: "1px solid #e0e0e0",
            flex: "1 1 30%",
            minWidth: "200px",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            New admission
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
            87
          </Typography>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 2,
            textAlign: "center",
            borderRadius: 1,
            border: "1px solid #e0e0e0",
            flex: "1 1 30%",
            minWidth: "200px",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Total unassigned student
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
            60
          </Typography>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 2,
            textAlign: "center",
            borderRadius: 1,
            border: "1px solid #e0e0e0",
            flex: "1 1 30%",
            minWidth: "200px",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Recently assigned
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
            27
          </Typography>
        </Paper>
      </Box>

      {/* Search Bar */}
      <TextField
        fullWidth
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          mb: 3,
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            bgcolor: "#f5f5f5",
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

      {/* Filter and Action Row */}
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        <Box sx={{ minWidth: 200 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Select class
          </Typography>
          <Select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            displayEmpty
            fullWidth
            renderValue={(selected) => selected || "Select class"}
            sx={{
              borderRadius: "10px",
              bgcolor: "#f5f5f5",
              height: "50px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#e0e0e0",
              },
            }}
          >
            <MenuItem value="">Select class</MenuItem>
            <MenuItem value="6th">6th</MenuItem>
            <MenuItem value="7th">7th</MenuItem>
            <MenuItem value="8th">8th</MenuItem>
          </Select>
        </Box>

        <Box sx={{ minWidth: 200 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Recent class
          </Typography>
          <Select
            value={recentClass}
            onChange={(e) => setRecentClass(e.target.value)}
            displayEmpty
            fullWidth
            renderValue={(selected) => selected || "Recent class"}
            sx={{
              borderRadius: "10px",
              bgcolor: "#f5f5f5",
              height: "50px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#e0e0e0",
              },
            }}
          >
            <MenuItem value="">Recent class</MenuItem>
            <MenuItem value="6th">6th</MenuItem>
            <MenuItem value="7th">7th</MenuItem>
            <MenuItem value="8th">8th</MenuItem>
          </Select>
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end", ml: "auto" }}>
          <Button
            variant="contained"
            onClick={handleScheduleClick}
            sx={{
              bgcolor: "#2196f3",
              color: "white",
              height: "50px",
              borderRadius: "10px",
              textTransform: "none",
              px: 3,
              "&:hover": {
                bgcolor: "#1976d2",
              },
            }}
          >
            Schedule student
          </Button>
        </Box>
      </Box>

      {/* Students Table */}
      <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#f9f9f9" }}>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={selectedStudents.length > 0 && selectedStudents.length < students.length}
                  checked={selectedStudents.length === students.length}
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell>Student Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Batch</TableCell>
              <TableCell>Admission date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Section</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedStudents.includes(student.id)}
                    onChange={(event) => handleSelectStudent(event, student.id)}
                  />
                </TableCell>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.batch}</TableCell>
                <TableCell>{student.admissionDate}</TableCell>
                <TableCell>{student.status}</TableCell>
                <TableCell>
                  <Select
                    value={student.class}
                    size="small"
                    sx={{
                      minWidth: 80,
                      height: "32px",
                      bgcolor: "#f5f5f5",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e0e0e0",
                      },
                    }}
                  >
                    <MenuItem value="6 th">6 th</MenuItem>
                    <MenuItem value="7 th">7 th</MenuItem>
                    <MenuItem value="8 th">8 th</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <Select
                    value={student.section}
                    size="small"
                    sx={{
                      minWidth: 60,
                      height: "32px",
                      bgcolor: "#f5f5f5",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e0e0e0",
                      },
                    }}
                  >
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default StudentAdmissionManager
