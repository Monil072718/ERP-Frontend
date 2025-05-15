import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Grid,
  CircularProgress,
  LinearProgress,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"

const ProfileCard = () => {
  // Mock data
  const teacherData = {
    name: "Ranjeet Singh",
    role: "Teacher",
    contact: "+91 00000 00000",
    email: "oihafsdi@gmail.com",
    position: "Class Advisor",
    attendance: 90,
    leaves: {
      annual: 70,
      sick: 85,
      paid: 30,
    },
  }

  return (
    <Card elevation={2} sx={{ borderRadius: 2, overflow: "visible", width: "100%" }}>
      <CardContent sx={{ p: 3 }}>
        <Grid container spacing={0} alignItems="center" justifyContent={"space-between"}>
          {/* Profile picture */}
          <Grid item xs={1.5} md={1}>
            <Avatar
              src="/diverse-classroom-teacher.png"
              sx={{
                width: { xs: 60, sm: 70, md: 80 },
                height: { xs: 60, sm: 70, md: 80 },
                mr: 2,
              }}
            />
          </Grid>

          {/* Profile info */}
          <Grid item xs={4.5} md={3}>
            <Box>
              <Box display="flex" alignItems="center" mb={0.5}>
                <Typography variant="h6" component="div" fontWeight="bold">
                  {teacherData.name}
                </Typography>
                <Button
                  size="small"
                  sx={{
                    ml: 1,
                    minWidth: "auto",
                    p: 0.2,
                    color: "#1976d2",
                  }}
                >
                  <EditIcon fontSize="small" />
                </Button>
              </Box>
              <Typography color="text.secondary" sx={{ mb: 0.5, fontSize: "0.95rem" }}>
                {teacherData.role}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                Contact - {teacherData.contact}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                E-Mail - {teacherData.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {teacherData.position}
              </Typography>
            </Box>
          </Grid>

          {/* Attendance circle */}
          <Grid item xs={3} md={2.5} sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Box sx={{ position: "relative", display: "inline-flex", mb: 1 }}>
                <CircularProgress
                  variant="determinate"
                  value={teacherData.attendance}
                  size={80}
                  thickness={5}
                  sx={{
                    color: "#1976d2",
                    "& .MuiCircularProgress-circle": {
                      strokeLinecap: "round",
                    },
                  }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h6" component="div" color="text.primary" fontWeight="bold">
                    {`${teacherData.attendance}%`}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                Attendance
              </Typography>
            </Box>
          </Grid>

          {/* Leave balances */}
          <Grid item xs={12} md={5.5} sx={{ pl: { xs: 2, md: 4 } }}>
            <Box sx={{ width: "100%", mb: 2 }}>
              <Box display="flex" justifyContent="space-between" mb={0.5}>
                <Typography variant="body1">Annual Leave Balance</Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={teacherData.leaves.annual}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "#e0e0e0",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#2196f3",
                    borderRadius: 5,
                  },
                }}
              />
            </Box>

            <Box sx={{ width: "100%", mb: 2 }}>
              <Box display="flex" justifyContent="space-between" mb={0.5}>
                <Typography variant="body1">Sick Leave Balance</Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={teacherData.leaves.sick}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "#e0e0e0",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#2196f3",
                    borderRadius: 5,
                  },
                }}
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Box display="flex" justifyContent="space-between" mb={0.5}>
                <Typography variant="body1">Paid Leave Balance</Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={teacherData.leaves.paid}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "#e0e0e0",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#2196f3",
                    borderRadius: 5,
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProfileCard
