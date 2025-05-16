"use client"

import { useState } from "react"
import { Box, Typography, Paper } from "@mui/material"

const TimeTableGrid = () => {
  // State to track which time slot is selected
  const [selectedSlot, setSelectedSlot] = useState(null)

  // Time slots for the header row
  const timeSlots = [
    "8:00 - 9:00",
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 1:00",
    "1:00 - 2:00",
    "2:00 - 3:00",
    "3:00 - 4:00",
  ]

  // Class data for each time slot
  const classData = [
    {
      subject: "Mathematics",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "Mathematics",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "Mathematics",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "Mathematics",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "Mathematics",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: true,
    },
    {
      subject: "",
      class: "",
      room: "",
      type: "",
      isLunch: true,
    },
    {
      subject: "Mathematics",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
    {
      subject: "Mathematics",
      class: "9A",
      room: "203",
      type: "Lecture",
      isHighlighted: false,
    },
  ]

  // Handle click on a class cell
  const handleCellClick = (index) => {
    setSelectedSlot(index)
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" component="h1" sx={{ mb: 2, fontWeight: 500 }}>
        Time Table
      </Typography>

      <Paper
        elevation={0}
        sx={{
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid #9e9e9e", // Darker border for the outer container
        }}
      >
        {/* Grid container */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            width: "100%",
          }}
        >
          {/* Header row with time slots */}
          {timeSlots.map((slot, index) => (
            <Box
              key={`header-${index}`}
              sx={{
                p: 2,
                textAlign: "center",
                borderRight: index < timeSlots.length - 1 ? "1px solid #9e9e9e" : "none", // Darker border
                borderBottom: selectedSlot === index ? "none" : "1px solid #9e9e9e", // Conditionally remove bottom border
                fontWeight: 400,
                fontSize: "0.95rem",
                backgroundColor: index === 4 ? "#2196f3" : "transparent", // Highlight the 12:00-1:00 header
                color: index === 4 ? "white" : "inherit",
              }}
            >
              {slot}
            </Box>
          ))}

          {/* Class data cells */}
          {classData.map((data, index) => (
            <Box
              key={`cell-${index}`}
              sx={{
                p: 2,
                borderRight: index < classData.length - 1 ? "1px solid #9e9e9e" : "none", // Darker border
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "180px",
                backgroundColor: data.isHighlighted ? "#2196f3" : data.isLunch ? "#bbdefb" : "transparent",
                color: data.isHighlighted ? "white" : "inherit",
                cursor: "pointer",
              }}
              onClick={() => handleCellClick(index)}
            >
              {data.isLunch ? (
                <Typography variant="body1" sx={{ fontWeight: 400, fontSize: "1rem" }}>
                  Lunch
                </Typography>
              ) : (
                <>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      mb: 0.5,
                      color: data.isHighlighted ? "white" : "inherit",
                    }}
                  >
                    {data.subject}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 0.5,
                      color: data.isHighlighted ? "white" : "inherit",
                    }}
                  >
                    Class: {data.class}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1.5,
                      color: data.isHighlighted ? "white" : "inherit",
                    }}
                  >
                    Room: {data.room}
                  </Typography>
                  <Box
                    component="button"
                    sx={{
                      backgroundColor: data.isHighlighted ? "white" : "#2196f3",
                      color: data.isHighlighted ? "#2196f3" : "white",
                      border: "none",
                      borderRadius: "4px",
                      py: 1,
                      px: 3,
                      cursor: "pointer",
                      fontWeight: 400,
                      fontSize: "0.9rem",
                      "&:hover": {
                        backgroundColor: data.isHighlighted ? "#f5f5f5" : "#1976d2",
                      },
                    }}
                  >
                    {data.type}
                  </Box>
                </>
              )}
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  )
}

export default TimeTableGrid
