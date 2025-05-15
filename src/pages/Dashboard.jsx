import React from 'react';
import {
  Box,
  Card,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Container,
  Grid,
  Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TimeTable from '../components/TimeTable';
import ProfileCard from '../components/ProfileCard';
import TodaysAttendance from '../components/TodaysAttendance';
import UpcomingEvents from '../components/UpcomingEvents';
import PendingAssignments from '../components/PendingAssignments';

// Custom styled components
const StatsCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
}));

const PercentageText = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
}));

const AttendanceCircle = styled(Box)(({ color }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: color,
  display: 'inline-block',
  margin: '0 2px',
}));

const TimeTableCell = styled(Box)(({ theme, isActive, isLunch }) => ({
  padding: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  backgroundColor: isActive ? '#1E88E5' : isLunch ? '#90CAF9' : 'transparent',
  color: isActive ? 'white' : 'inherit',
  borderRight: '1px solid #e0e0e0',
  minHeight: 120,
}));

const Dashboard = () => {
  // Mock data
  const attendanceData = {
    todayPresent: 34,
    todayAbsent: 6,
    totalStudents: 40,
    feeCollection: 30,
    className: '8A'
  };

  const students = [
    { rollNo: '01', name: 'Alice Miller', isPresent: true, history: ['present', 'present', 'present', 'absent', 'absent'] },
    { rollNo: '02', name: 'Alice Miller', isPresent: true, history: ['present', 'present', 'absent', 'absent', 'absent'] },
    { rollNo: '03', name: 'Alice Miller', isPresent: true, history: ['present', 'present', 'present', 'absent', 'absent'] },
    { rollNo: '04', name: 'Alice Miller', isPresent: true, history: ['present', 'absent', 'present', 'present', 'absent'] },
    { rollNo: '05', name: 'Alice Miller', isPresent: true, history: ['absent', 'present', 'present', 'absent', 'absent'] },
  ];

  const timeSlots = [
    { time: '8:00 - 9:00', subject: 'Mathematics', class: '9A', room: '203', active: true, lunch: false },
    { time: '9:00 - 10:00', subject: 'Mathematics', class: '9A', room: '203', active: false, lunch: false },
    { time: '10:00 - 11:00', subject: 'Mathematics', class: '9A', room: '203', active: false, lunch: false },
    { time: '11:00 - 12:00', subject: 'Mathematics', class: '9A', room: '203', active: false, lunch: false },
    { time: '12:00 - 1:00', subject: 'Mathematics', class: '9A', room: '203', active: false, lunch: false },
    { time: '1:00 - 2:00', subject: 'Lunch', class: '', room: '', active: false, lunch: true },
    { time: '2:00 - 3:00', subject: 'Mathematics', class: '9A', room: '203', active: false, lunch: false },
    { time: '3:00 - 4:00', subject: 'Mathematics', class: '9A', room: '203', active: false, lunch: false },
  ];

  const getStatusColor = (status) => {
    return status === 'present' ? '#4CAF50' : status === 'absent' ? '#F44336' : '#9E9E9E';
  };

  return (
    <Box sx={{ p: 5 }}>
      {/* Stats Section */}
      <ProfileCard />

      {/* Attendance Section */}
      <TodaysAttendance />
      <TimeTable />

      {/* Events & Assignments */}
      <Grid container spacing={6} mt={2}>
        <Grid item xs={12} md={6}>
          <UpcomingEvents />
        </Grid>
        <Grid item xs={12} md={6}>
          <PendingAssignments />
        </Grid>
      </Grid>
    </Box>

  );
};

export default Dashboard;