
import { useState } from "react"
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Paper,
  IconButton,
  Divider,
  Container,
} from "@mui/material"
import NotificationsIcon from "@mui/icons-material/Notifications"

const ResultUpload = () => {
  // Mock data for students
  const initialStudents = [
    { id: "CS22045", name: "Alex Thompson", internal: "", external: "" },
    { id: "CS22046", name: "Emma Rodriguez", internal: "", external: "" },
    { id: "CS22047", name: "Michael Chen", internal: "", external: "" },
    { id: "CS22048", name: "Sophia Patel", internal: "", external: "" },
    { id: "CS22049", name: "James Wilson", internal: "", external: "" },
    { id: "CS22049", name: "James Wilson", internal: "", external: "" },
    { id: "CS22049", name: "James Wilson", internal: "", external: "" },
    { id: "CS22049", name: "James Wilson", internal: "", external: "" },
    { id: "CS22049", name: "James Wilson", internal: "", external: "" },
    { id: "CS22049", name: "James Wilson", internal: "", external: "" },
    { id: "CS22049", name: "James Wilson", internal: "", external: "" },
    { id: "CS22049", name: "James Wilson", internal: "", external: "" },
    { id: "CS22049", name: "James Wilson", internal: "", external: "" },
  ]

  const [students, setStudents] = useState(initialStudents)

  // Handle input change
  const handleInputChange = (index, field, value) => {
    const updatedStudents = [...students]
    updatedStudents[index][field] = value
    setStudents(updatedStudents)
  }

  // Handle form submission
  const handleSubmit = () => {
    console.log("Submitted data:", students)
    // Here you would typically send the data to your backend
    alert("Results submitted successfully!")
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h5" component="h1" fontWeight="regular">
          Result
        </Typography>
        <IconButton aria-label="notifications">
          <NotificationsIcon />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="h6" component="h2" sx={{ mb: 3 }}>
        Upload result
      </Typography>

      <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", width: "15%" }}>ID</TableCell>
              <TableCell sx={{ fontWeight: "bold", width: "35%" }}>Student Name</TableCell>
              <TableCell sx={{ fontWeight: "bold", width: "25%" }}>Internal</TableCell>
              <TableCell sx={{ fontWeight: "bold", width: "25%" }}>External</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={student.internal}
                    onChange={(e) => handleInputChange(index, "internal", e.target.value)}
                    InputProps={{
                      sx: {
                        bgcolor: "#e0e0e0",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      },
                    }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={student.external}
                    onChange={(e) => handleInputChange(index, "external", e.target.value)}
                    InputProps={{
                      sx: {
                        bgcolor: "#e0e0e0",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      },
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            minWidth: 200,
            borderRadius: 1,
            py: 1.5,
            textTransform: "none",
            fontSize: "1rem",
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  )
}

export default ResultUpload
