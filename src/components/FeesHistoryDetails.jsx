"use client"

import { Box, Typography, IconButton, Divider, Paper } from "@mui/material"
import NotificationsIcon from "@mui/icons-material/Notifications"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CancelIcon from "@mui/icons-material/Cancel"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

const FeesTracker = () => {
  // Mock data for student
  const student = {
    name: "Arpit Jha",
    class: "10(a)",
    enrollmentNo: "1244",
  }

  // Mock data for fee records
  const feeRecords = [
    {
      id: 1,
      month: "January",
      status: "Paid",
      academic: 5000,
      transport: "-",
      lateFine: 0,
      date: "Mar 14",
      isPaid: true,
    },
    {
      id: 2,
      month: "February",
      status: "Overdue",
      academic: 5000,
      transport: "-",
      lateFine: 0,
      date: "Mar 14",
      isPaid: false,
    },
    {
      id: 3,
      month: "February",
      status: "Overdue",
      academic: 5000,
      transport: "-",
      lateFine: 0,
      date: "Mar 14",
      isPaid: false,
    },
    {
      id: 4,
      month: "February",
      status: "Overdue",
      academic: 5000,
      transport: "-",
      lateFine: 0,
      date: "Mar 14",
      isPaid: false,
    },
    {
      id: 5,
      month: "February",
      status: "Overdue",
      academic: 5000,
      transport: "-",
      lateFine: 0,
      date: "Mar 14",
      isPaid: false,
    },
    {
      id: 6,
      month: "February",
      status: "Overdue",
      academic: 5000,
      transport: "-",
      lateFine: 0,
      date: "Mar 14",
      isPaid: false,
    },
    {
      id: 7,
      month: "February",
      status: "Overdue",
      academic: 5000,
      transport: "-",
      lateFine: 0,
      date: "Mar 14",
      isPaid: false,
    },
  ]

  return (
    <Box sx={{ width: "100%", mt: 2, px: 2 , p: 4}}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h5" component="h1" fontWeight="regular">
          Fees
        </Typography>
        <IconButton aria-label="notifications">
          <NotificationsIcon />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Student Information */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 2,
          borderRadius: 4,
          border: "1px solid #e0e0e0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h6">{student.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            Class - {student.class}
          </Typography>
        </Box>

        <Typography variant="body1">Enrollment no-{student.enrollmentNo}</Typography>
      </Paper>

      {/* Fee Records */}
      {feeRecords.map((record) => (
        <Paper
          key={record.id}
          elevation={0}
          sx={{
            p: 3,
            mb: 2,
            borderRadius: 4,
            border: `1px solid ${record.isPaid ? "#4caf50" : "#f44336"}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left - Month and Status */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {record.isPaid ? (
              <CheckCircleIcon sx={{ color: "#4caf50", mr: 1 }} />
            ) : (
              <CancelIcon sx={{ color: "#f44336", mr: 1 }} />
            )}
            <Typography variant="body1">{record.month}</Typography>
          </Box>

          {/* Middle - Status */}
          <Typography
            variant="body1"
            sx={{
              color: record.isPaid ? "#4caf50" : "#f44336",
              fontWeight: "medium",
            }}
          >
            {record.status}
          </Typography>

          {/* Right - Fee Details and Date */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box>
              <Typography variant="body2">Academic : {record.academic}</Typography>
              <Typography variant="body2">Transport : {record.transport}</Typography>
              <Typography variant="body2">Late fine : {record.lateFine}</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon sx={{ fontSize: "1rem", mr: 0.5 }} />
              <Typography variant="body2">
                {record.isPaid ? "Paid on" : "Due on"} {record.date}
              </Typography>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  )
}

export default FeesTracker
