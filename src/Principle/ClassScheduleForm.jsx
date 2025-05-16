"use client"

import { useState } from "react"
import { Box, Typography, TextField, Select, MenuItem, Button, InputAdornment, Grid } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const ClassScheduleForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    class: "",
    sec: "",
    subject: "",
    date: "",
    timeFrom: "",
    timeTo: "",
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
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Box component="form" onSubmit={handleSubmit}>
        {/* Title Field */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Tittle
          </Typography>
          <TextField
            fullWidth
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Tittle"
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "#e0e0e0",
                borderRadius: 1,
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
          />
        </Box>

        {/* Class and Sec Row */}
        <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
          <Box sx={{ minWidth: "180px", flex: "0 0 auto" }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Class
            </Typography>
            <Select
              fullWidth
              name="class"
              value={formData.class}
              onChange={handleChange}
              displayEmpty
              renderValue={(selected) => (selected ? selected : "Class")}
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                width: "180px",
                bgcolor: "#e0e0e0",
                borderRadius: 1,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Class 1">Class 1</MenuItem>
              <MenuItem value="Class 2">Class 2</MenuItem>
              <MenuItem value="Class 3">Class 3</MenuItem>
            </Select>
          </Box>
          <Box sx={{ minWidth: "180px", flex: "0 0 auto" }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Sec
            </Typography>
            <Select
              fullWidth
              name="sec"
              value={formData.sec}
              onChange={handleChange}
              displayEmpty
              renderValue={(selected) => (selected ? selected : "Sec")}
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                width: "180px",
                bgcolor: "#e0e0e0",
                borderRadius: 1,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C">C</MenuItem>
            </Select>
          </Box>
        </Box>

        {/* Subject, Date, Time From, Time To Row */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={3}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Subject
            </Typography>
            <Select
              fullWidth
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              displayEmpty
              renderValue={(selected) => (selected ? selected : "Subject")}
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                bgcolor: "#e0e0e0",
                borderRadius: 1,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Mathematics">Mathematics</MenuItem>
              <MenuItem value="Science">Science</MenuItem>
              <MenuItem value="English">English</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Date
            </Typography>
            <TextField
              fullWidth
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="DD/MM/YYYY"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#e0e0e0",
                  borderRadius: 1,
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Time From
            </Typography>
            <TextField
              fullWidth
              name="timeFrom"
              value={formData.timeFrom}
              onChange={handleChange}
              placeholder="00:00 Am"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccessTimeIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#e0e0e0",
                  borderRadius: 1,
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Time To
            </Typography>
            <TextField
              fullWidth
              name="timeTo"
              value={formData.timeTo}
              onChange={handleChange}
              placeholder="00:00 Am"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccessTimeIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#e0e0e0",
                  borderRadius: 1,
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent",
                  },
                },
              }}
            />
          </Grid>
        </Grid>

        {/* Add Button */}
        <Box sx={{ mb: 4 }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: "#4dabf5",
              color: "white",
              borderRadius: 2,
              textTransform: "none",
              px: 3,
              py: 1,
              "&:hover": {
                bgcolor: "#3d8bd5",
              },
              boxShadow: "none",
            }}
          >
            Add
          </Button>
        </Box>

        {/* Schedule Button */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "#4dabf5",
              color: "white",
              borderRadius: 2,
              textTransform: "none",
              px: 6,
              py: 1,
              width: "300px",
              "&:hover": {
                bgcolor: "#3d8bd5",
              },
              boxShadow: "none",
            }}
          >
            Schedule
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ClassScheduleForm
