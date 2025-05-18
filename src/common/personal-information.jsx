"use client"

import { useState } from "react"
import { Box, Button, Card, Container, TextField, Typography, Grid, Avatar, Link, InputAdornment } from "@mui/material"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"

export default function PersonalInformation() {
  const [formData, setFormData] = useState({
    empId: "",
    name: "",
    email: "",
    contactNumber: "",
    department: "",
    designation: "",
    address: "",
    creditCard: "",
    joiningDate: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted with:", formData)
    // Add your form submission logic here
  }

  const handleImageUpload = () => {
    // Trigger file input click
    document.getElementById("profile-image-upload").click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Handle file upload logic here
      console.log("File selected:", file.name)
    }
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Card sx={{ p: 4, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography variant="h5" component="h1" fontWeight="bold">
            Personal Information
          </Typography>
          <Link href="#" color="primary" underline="hover">
            Edit
          </Link>
        </Box>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {/* Left side - Image upload section */}
            <Grid item xs={12} md={3}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 1,
                    border: "1px solid #e0e0e0",
                  }}
                />
                <input
                  type="file"
                  id="profile-image-upload"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <Button
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                  onClick={handleImageUpload}
                  size="small"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#2196f3",
                    "&:hover": {
                      backgroundColor: "#1976d2",
                    },
                    mt: 1,
                  }}
                >
                  Upload Image
                </Button>
              </Box>
            </Grid>

            {/* Right side - Form fields */}
            <Grid item xs={12} md={9}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Emp ID
                  </Typography>
                  <TextField
                    fullWidth
                    name="empId"
                    placeholder="Emp ID"
                    value={formData.empId}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Name
                  </Typography>
                  <TextField
                    fullWidth
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Contact Number
                  </Typography>
                  <TextField
                    fullWidth
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Department
                  </Typography>
                  <TextField
                    fullWidth
                    name="department"
                    placeholder="Department"
                    value={formData.department}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Designation
                  </Typography>
                  <TextField
                    fullWidth
                    name="designation"
                    placeholder="Designation"
                    value={formData.designation}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Address
                  </Typography>
                  <TextField
                    fullWidth
                    name="address"
                    placeholder="Emp ID"
                    value={formData.address}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Credit card
                  </Typography>
                  <TextField
                    fullWidth
                    name="creditCard"
                    placeholder="Credit card"
                    value={formData.creditCard}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CreditCardIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Joining Date
                  </Typography>
                  <TextField
                    fullWidth
                    name="joiningDate"
                    placeholder="Joining Date"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarTodayIcon fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  py: 1.5,
                  borderRadius: 1,
                  textTransform: "none",
                  fontSize: "1rem",
                  backgroundColor: "#2196f3",
                  "&:hover": {
                    backgroundColor: "#1976d2",
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  )
}
