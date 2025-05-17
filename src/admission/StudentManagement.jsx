
import { useState } from "react"
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  Paper,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import AddIcon from "@mui/icons-material/Add"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const StudentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [classFilter, setClassFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [selectedStudents, setSelectedStudents] = useState([])

  // Mock student data
  const students = [
    { id: 1, name: "Airlene Simons", date: "26/10/2006", status: "Active", image: "" },
    { id: 2, name: "Airlene Simons", date: "26/10/2006", status: "On leave", image: "" },
    { id: 3, name: "Airlene Simons", date: "26/10/2006", status: "Pass out", image: "" },
    { id: 4, name: "Airlene Simons", date: "26/10/2006", status: "Active", image: "" },
    { id: 5, name: "Airlene Simons", date: "26/10/2006", status: "Active", image: "" },
    { id: 6, name: "Airlene Simons", date: "26/10/2006", status: "Active", image: "" },
  ]

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleClassChange = (e) => {
    setClassFilter(e.target.value)
  }

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value)
  }

  const resetFilters = () => {
    setSearchTerm("")
    setClassFilter("")
    setStatusFilter("")
  }

  const handleCheckboxChange = (studentId) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId) ? prev.filter((id) => id !== studentId) : [...prev, studentId],
    )
  }

  const handleViewDetail = (studentId) => {
    console.log(`View details for student ${studentId}`)
    // Navigate to student detail page or open modal
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "#4CAF50" // Green
      case "On leave":
        return "#FF5722" // Orange/Red
      case "Pass out":
        return "#F44336" // Red
      default:
        return "#757575" // Gray
    }
  }

  return (
    <Box sx={{ p: 4, mt : 2 , mx: "auto" }}>
      {/* Search and Filter Row */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 3, alignItems: "center" }}>
        {/* Search Field */}
        <TextField
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 auto" },
            maxWidth: { xs: "100%", sm: "350px" },
            bgcolor: "#f5f5f5",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: 1,
              "& fieldset": { border: "none" },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "text.secondary" }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Class Filter */}
        <FormControl
          sx={{
            minWidth: 120,
            bgcolor: "#f5f5f5",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: 1,
              "& fieldset": { border: "none" },
            },
          }}
        >
          <Select
            value={classFilter}
            onChange={handleClassChange}
            displayEmpty
            IconComponent={KeyboardArrowDownIcon}
            renderValue={(selected) => {
              if (!selected) {
                return <Typography color="text.secondary">Class</Typography>
              }
              return selected
            }}
          >
            <MenuItem value="">All Classes</MenuItem>
            <MenuItem value="Class 1">Class 1</MenuItem>
            <MenuItem value="Class 2">Class 2</MenuItem>
            <MenuItem value="Class 3">Class 3</MenuItem>
          </Select>
        </FormControl>

        {/* Status Filter */}
        <FormControl
          sx={{
            minWidth: 120,
            bgcolor: "#f5f5f5",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: 1,
              "& fieldset": { border: "none" },
            },
          }}
        >
          <Select
            value={statusFilter}
            onChange={handleStatusChange}
            displayEmpty
            IconComponent={KeyboardArrowDownIcon}
            renderValue={(selected) => {
              if (!selected) {
                return <Typography color="text.secondary">Status</Typography>
              }
              return selected
            }}
          >
            <MenuItem value="">All Status</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="On leave">On leave</MenuItem>
            <MenuItem value="Pass out">Pass out</MenuItem>
          </Select>
        </FormControl>

        {/* Reset Filter Button */}
        <Button
          variant="outlined"
          onClick={resetFilters}
          sx={{
            borderColor: "#e0e0e0",
            color: "text.secondary",
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

        {/* Add Student Button - Pushed to the right */}
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: "#2196f3",
              "&:hover": {
                bgcolor: "#1976d2",
              },
              textTransform: "none",
              borderRadius: 1,
            }}
          >
            Add Student
          </Button>
        </Box>
      </Box>

      {/* Student List */}
      <Box sx={{ mt: 3 }}>
        {students.map((student) => (
          <Paper
            key={student.id}
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              mb: 2,
              border: "1px solid #e0e0e0",
              borderRadius: 1,
            }}
          >
            {/* Checkbox */}
            <Checkbox
              checked={selectedStudents.includes(student.id)}
              onChange={() => handleCheckboxChange(student.id)}
              sx={{ mr: 1 }}
            />

            {/* Student Image */}
            <Box
              component="img"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DblgKEdxKm1PWqHiTcKY9bzonGBOGZ.png"
              alt={student.name}
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                objectFit: "cover",
                mr: 2,
              }}
            />

            {/* Student Info */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="body1" fontWeight="medium">
                Name - {student.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Date - {student.date}
              </Typography>
            </Box>

            {/* Status */}
            <Typography
              variant="body2"
              sx={{
                color: getStatusColor(student.status),
                mr: 2,
              }}
            >
              {student.status}
            </Typography>

            {/* View Detail Link */}
            <Button
              onClick={() => handleViewDetail(student.id)}
              sx={{
                color: "#2196f3",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "transparent",
                  textDecoration: "underline",
                },
              }}
            >
              View detail
            </Button>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}

export default StudentManagement
