import React from 'react'
import Sidebar from './components/SideBar';
import Login from './components/Login';
import Attendance from './pages/Attendace';
import TimeTable from './common/TimeTable';
import { Box, Paper, Container, Grid, Card } from '@mui/material';
import LeaveApplication from './Teachers/LeaveApplication';
import NoticeCard from './common/EventList';
import AppBarComponent from './components/AppBarComponent';
import RemarkForm from './Teachers/Remark';
import MedicalIssueList from './Teachers/LeaveHistory';
import LeaveApplicationDetails from './Teachers/LeaveDescription';
import ViewAttendance from './components/ViewAttendance';
import StudentSearch from './components/StudentSearch';
import StudentDetailsModel from './components/StudentDetailModel';
import ScheduleEventForm from './components/ScheduleEventForm';
import LeaveRequest from './components/LeaveRequest';
import LeaveRequestDetailsModel from './components/LeaveRequestDetailsModel';
import StudentResultsComponent from './components/StudentResultsComponent';
import FeesHistoryDetails from './components/FeesHistoryDetails';
import Dashboard from './pages/Dashboard';
import MarkAttendanceCard from './components/MarkAttendanceCard';
import EventsList from './common/EventList';
import AttendanceMarking from './Teachers/AttendanceMarking';
import PaySlips from './Teachers/PaySlips';
import ChatInterface from './Teachers/ChatInterface';
import ResultUpload from './Teachers/ResultUpload';
import StudentAttendanceTracker from './Teachers/StudentAttendanceTracker';

const App = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box
          component="main" width={'100%'}>
          {/* <AppBarComponent /> */}
          {/* <Attendance />      */}   
          {/* <StudentSearch /> */}
          {/* <StudentDetailsModel open={true} /> */}
          {/* <ViewAttendance />
          <ScheduleEventForm />*/}
          {/* <LeaveRequestDetailsModel open={true}  /> */}
          {/* <StudentResultsComponent />
          <FeesHistoryDetails /> */}
          {/* <Dashboard /> */}
          {/* <LeaveRequest /> */}

          {/* Common */}
          {/* <EventsList /> */}
          {/* <TimeTable /> */}


          {/* Teacher */}
          {/* <AttendanceMarking /> */}
          {/* <ChatInterface /> */}
          {/* <MedicalIssueList /> */}
          {/* <LeaveApplicationDetails /> */}
          {/* <PaySlips /> */}
          {/* <RemarkForm /> */}
          {/* <ResultUpload /> */}
          {/* <LeaveApplication /> */}
          <StudentAttendanceTracker />



        </Box>
      </Box>
      {/* <Login /> */}
    </>

  )
}

export default App;