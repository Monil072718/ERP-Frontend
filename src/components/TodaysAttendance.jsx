import { Box, Typography, Button } from "@mui/material"

const TodaysAttendance = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my: 2 }}>
      <Typography variant="h6" component="div">
        Today's Attendance: Class 8A
      </Typography>
      <Button
        variant="contained"
        color="success"
        sx={{
          borderRadius: 1,
          textTransform: "none",
          px: 3,
        }}
      >
        Mark Attendance
      </Button>
    </Box>
  )
}

export default TodaysAttendance
