"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  Box,
} from "@mui/material"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"

const StudentAttendanceTable = () => {
  // State for date inputs (as simple strings for now)
  const [fromDate, setFromDate] = useState("")
  const [toDate, setToDate] = useState("")

  // State for notes
  const [notes, setNotes] = useState(Array(11).fill(""))

  // State for status
  const [statuses, setStatuses] = useState(Array(11).fill("Absent"))

  // Handle note change
  const handleNoteChange = (index, value) => {
    const newNotes = [...notes]
    newNotes[index] = value
    setNotes(newNotes)
  }

  // Handle status change
  const handleStatusChange = (index, value) => {
    const newStatuses = [...statuses]
    newStatuses[index] = value
    setStatuses(newStatuses)
  }

  // Generate 11 rows of identical data as shown in the image
  const attendanceRows = Array(11)
    .fill()
    .map((_, index) => ({
      id: index + 1,
      date: "Apr 15, 2025",
      day: "Tuesday",
      mode: "Full day",
      status: statuses[index],
      note: notes[index],
    }))

  return (
    <Box sx={{ p: 4 , mt : 2 }}>
      {/* Date Filter Section */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={6} sm={3} md={2}>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            From
          </Typography>
          <TextField
            placeholder="From"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarTodayIcon fontSize="small" color="action" />
                </InputAdornment>
              ),
            }}
            sx={{
              bgcolor: "#f5f5f5",
              borderRadius: "16px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
              },
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            To
          </Typography>
          <TextField
            placeholder="To"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarTodayIcon fontSize="small" color="action" />
                </InputAdornment>
              ),
            }}
            sx={{
              bgcolor: "#f5f5f5",
              borderRadius: "16px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",
              },
            }}
          />
        </Grid>
      </Grid>

      {/* Attendance Table */}
      <TableContainer component={Paper} sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)" }}>
        <Table sx={{ minWidth: 650 }} aria-label="student attendance table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f9f9f9" }}>
              <TableCell>Date</TableCell>
              <TableCell>Day</TableCell>
              <TableCell>Mode</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceRows.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.day}</TableCell>
                <TableCell>{row.mode}</TableCell>
                <TableCell>
                  <Select
                    value={row.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                    size="small"
                    fullWidth
                    sx={{
                      height: "36px",
                      color: "#d32f2f",
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "#d32f2f",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#d32f2f",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#d32f2f",
                      },
                      borderRadius: "4px",
                    }}
                  >
                    <MenuItem value="Present">Present</MenuItem>
                    <MenuItem value="Absent">Absent</MenuItem>
                    <MenuItem value="Late">Late</MenuItem>
                    <MenuItem value="Excused">Excused</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <TextField
                    placeholder="Add Note"
                    value={row.note}
                    onChange={(e) => handleNoteChange(index, e.target.value)}
                    size="small"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        height: "36px",
                      },
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default StudentAttendanceTable
