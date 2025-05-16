"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import TuneIcon from "@mui/icons-material/Tune"

const StudentList = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [gradeFilter, setGradeFilter] = useState("")
  const [gpaFilter, setGpaFilter] = useState("")
  const [attendanceFilter, setAttendanceFilter] = useState("")

  // Mock data for students
  const students = Array(6).fill({
    id: "2024001",
    name: "Emma Rodriguez",
    grade: "11th - A",
    gpa: "3.5",
    parentContact: "+91 00000 00000",
  })

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleViewDetail = (id) => {
    console.log(`Viewing details for student ${id}`)
    // Here you would typically navigate to a detail view or open a modal
  }

  return (
    <Box sx={{ width: "100%", p: 4 }}>
      {/* Search and Filter Row */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3, gap: 2 }}>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            px: 2,
            py: 0.5,
            border: "1px solid #e0e0e0",
            borderRadius: 1,
            "&:hover": {
              borderColor: "#bdbdbd",
            },
            "&:focus-within": {
              borderColor: "#1976d2",
              boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.2)",
            },
          }}
        >
          <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
          <TextField
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            variant="standard"
            fullWidth
            sx={{
              "& .MuiInput-root": {
                "&:before, &:after": {
                  display: "none",
                },
              },
              "& .MuiInputBase-input": {
                py: 1.5,
              },
            }}
          />
        </Paper>

        <Button
          variant="contained"
          startIcon={<TuneIcon />}
          sx={{
            borderRadius: 1,
            bgcolor: "#f5f5f5",
            color: "text.primary",
            boxShadow: "none",
            border: "1px solid #e0e0e0",
            "&:hover": {
              bgcolor: "#e0e0e0",
              boxShadow: "none",
            },
            px: 2,
            textTransform: "none",
            fontWeight: "normal",
          }}
        >
          Filter
        </Button>
      </Box>

      {/* Filter Options Row */}
      <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
        {/* Grade Filter */}
        <Box>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Grade
          </Typography>
          <FormControl sx={{ minWidth: 180 }}>
            <Select
              value={gradeFilter}
              onChange={(e) => setGradeFilter(e.target.value)}
              displayEmpty
              renderValue={(selected) => (selected ? selected : "Select grades")}
              sx={{
                bgcolor: "#f5f5f5",
                borderRadius: 1,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#e0e0e0",
                },
                "& .MuiSelect-select": {
                  py: 1.5,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#bdbdbd",
                },
              }}
              MenuProps={{
                PaperProps: {
                  elevation: 2,
                  sx: { mt: 0.5, borderRadius: 1 },
                },
              }}
            >
              <MenuItem value="">All Grades</MenuItem>
              <MenuItem value="11th">11th Grade</MenuItem>
              <MenuItem value="10th">10th Grade</MenuItem>
              <MenuItem value="9th">9th Grade</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* GPA Filter */}
        <Box>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Minimum GPA
          </Typography>
          <FormControl sx={{ minWidth: 180 }}>
            <Select
              value={gpaFilter}
              onChange={(e) => setGpaFilter(e.target.value)}
              displayEmpty
              renderValue={(selected) => (selected ? selected : "Select GPA")}
              sx={{
                bgcolor: "#f5f5f5",
                borderRadius: 1,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#e0e0e0",
                },
                "& .MuiSelect-select": {
                  py: 1.5,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#bdbdbd",
                },
              }}
              MenuProps={{
                PaperProps: {
                  elevation: 2,
                  sx: { mt: 0.5, borderRadius: 1 },
                },
              }}
            >
              <MenuItem value="">Any GPA</MenuItem>
              <MenuItem value="4.0">4.0+</MenuItem>
              <MenuItem value="3.5">3.5+</MenuItem>
              <MenuItem value="3.0">3.0+</MenuItem>
              <MenuItem value="2.5">2.5+</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Attendance Filter */}
        <Box>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Attendance %
          </Typography>
          <TextField
            placeholder="Above%"
            value={attendanceFilter}
            onChange={(e) => setAttendanceFilter(e.target.value)}
            sx={{
              minWidth: 180,
              "& .MuiOutlinedInput-root": {
                bgcolor: "#f5f5f5",
                borderRadius: 1,
                "& fieldset": {
                  borderColor: "#e0e0e0",
                },
                "&:hover fieldset": {
                  borderColor: "#bdbdbd",
                },
                "& input": {
                  py: 1.5,
                },
              },
            }}
          />
        </Box>
      </Box>

      {/* Column Headers */}
      <Box sx={{ mb: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1.5fr 1fr",
            gap: 2,
            px: 2,
          }}
        >
          <Typography variant="body2" fontWeight="medium">
            Student ID
          </Typography>
          <Typography variant="body2" fontWeight="medium">
            Name
          </Typography>
          <Typography variant="body2" fontWeight="medium">
            Grade
          </Typography>
          <Typography variant="body2" fontWeight="medium">
            GPA
          </Typography>
          <Typography variant="body2" fontWeight="medium">
            Parent Contact
          </Typography>
          <Typography variant="body2" fontWeight="medium">
            Actions
          </Typography>
        </Box>
      </Box>

      {/* Student List */}
      <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 1 }}>
        <Table>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell sx={{ py: 2 }}>{student.id}</TableCell>
                <TableCell sx={{ py: 2 }}>{student.name}</TableCell>
                <TableCell sx={{ py: 2 }}>{student.grade}</TableCell>
                <TableCell sx={{ py: 2 }}>{student.gpa}</TableCell>
                <TableCell sx={{ py: 2 }}>{student.parentContact}</TableCell>
                <TableCell sx={{ py: 2 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleViewDetail(student.id)}
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

export default StudentList
