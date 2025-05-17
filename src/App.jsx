import React from 'react'
import Sidebar from './components/SideBar';
import Login from './components/Login';
import TimeTable from './common/TimeTable';
import { Box, Paper, Container, Grid, Card } from '@mui/material';
import LeaveApplication from './Teachers/LeaveApplication';
import NoticeCard from './common/EventList';
import AppBarComponent from './components/AppBarComponent';
import RemarkForm from './common/Remark';
import MedicalIssueList from './Teachers/LeaveHistory';
import LeaveApplicationDetails from './Teachers/LeaveDescription';
import ViewAttendance from './components/ViewAttendance';
import StudentSearch from './components/StudentSearch';
import StudentDetailsModel from './Principle/StudentDetailModel';
import ScheduleEventForm from './Principle/ScheduleEventForm';
import LeaveRequest from './Principle/LeaveRequest';
import LeaveRequestDetailsModel from './Principle/LeaveRequestDetailsModel';
import StudentResultsComponent from './components/StudentResultsComponent';
import FeesHistoryDetails from './components/FeesHistoryDetails';
import Dashboard from './pages/Dashboard';
import MarkAttendanceCard from './components/MarkAttendanceCard';
import EventsList from './common/EventList';
import AttendanceMarking from './Teachers/AttendanceMarking';
import PaySlips from './Teachers/PaySlips';
import ChatInterface from './common/ChatInterface';
import ResultUpload from './Teachers/ResultUpload';
import StudentAttendanceTracker from './Teachers/StudentAttendanceTracker';
import HomeworkManager from './Teachers/HomeworkManager';
import HomeworkCreationForm from './Teachers/HomeworkCreationForm';
import SchoolDashboard from './Principle/SchoolDashboard';
import StudentList from './Principle/StudentList';
import StudentAttendanceList from './Principle/StudentAttendanceList';
import TeacherDirectory from './Principle/TeacherDirectory';
import ClassScheduleForm from './Principle/ClassScheduleForm';
import MultipleClassScheduleForm from './Principle/MultipleClassScheduleForm';
import FeeDashboard from './Finance/FeeDashboard';
import FeeTransactionsTable from './Finance/FeeTransactionsTable';
import StudentFeePaymentTable from './Finance/StudentFeePaymentTable';
import FeeManagementTable from './Finance/FeeManagementTable';
import FeeManagementTableWithAdd from './Finance/FeeManagementTableWithAdd';
import StudentFeeTracker from './Finance/StudentFeeTracker';
import StudentFeeStatus from './Finance/StudentFeeStatus';
import FeeCategoryManager from './Finance/FeeCategoryManager';
import TimeTableGrid from './components/TimeTableGrid';
import WeeklyTimetable from './co-ordinator/WeeklyTimetable';
import ScheduleForm from './co-ordinator/ScheduleForm';
import LeaveApprovalTable from './co-ordinator/LeaveApprovalTable';
import PaySlipsTable from './co-ordinator/PaySlipsTable';
import StudentRecordsView from './co-ordinator/StudentRecordsView';
import StudentAttendanceTable from './co-ordinator/StudentAttendanceTable';
import StudentAdmissionManager from './co-ordinator/StudentAdmissionManager';
import CoordinateDashboard from './co-ordinator/CoordinateDashboard';
import StudentManagement from './admission/StudentManagement';

const App = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box
          component="main" width={'100%'}>
          {/* <AppBarComponent /> */}
          {/*     */}
          {/* <StudentSearch /> */}
        {/* <TimeTableGrid /> */}
          {/* <Dashboard /> */}



          {/* Common */}
          {/* <EventsList /> */}
          {/* <TimeTable /> */}
          {/* <ClassScheduleForm /> */}
          {/* <ChatInterface /> */}
          {/* <StudentList /> */}

          {/* Teacher */}
          {/* <AttendanceMarking /> */}
          {/* <ChatInterface /> */}
          {/* <MedicalIssueList /> */}
          {/* <LeaveApplicationDetails /> */}
          {/* <PaySlips /> */}
          {/* <RemarkForm /> */}
          {/* <ResultUpload /> */}
          {/* <LeaveApplication /> */}
          {/* <StudentAttendanceTracker /> */}
          {/* <HomeworkManager /> */}
          {/* <HomeworkCreationForm /> */}


          {/* Principle */}
          {/* <SchoolDashboard/> */}
          {/* <StudentList /> */}
          {/* <StudentAttendanceList /> */}
          {/* <LeaveRequest /> */}
          {/* <TeacherDirectory /> */}
          {/* <ScheduleEventForm /> */}
          {/* <RemarkForm /> */}
          {/* <ChatInterface /> */}
          {/* <ClassScheduleForm /> */}
          {/* <FeesHistoryDetails />  */}
          {/* <StudentDetailsModel open={true} /> */}
          {/* <LeaveRequestDetailsModel open={true}  /> */}
          {/* <ViewAttendance /> */}
          {/* <StudentResultsComponent /> */}
          {/* <MultipleClassScheduleForm /> */}



          {/* Finance */}
          {/* <FeeDashboard /> */}
          {/* <FeeTransactionsTable /> */}
          {/* <StudentFeePaymentTable /> */}
          {/* <FeeManagementTable /> */}
          {/* <FeeManagementTableWithAdd /> */}
          {/* <StudentFeeTracker /> */}
          {/* <StudentFeeStatus /> */}
          {/* <FeeCategoryManager /> */}

          {/* Co-ordinator */}
          {/* <CoordinateDashboard /> */}
          {/* <WeeklyTimetable /> */}
          {/* <ScheduleForm /> */}
          {/* <LeaveApprovalTable /> */}
          {/* <EventsList /> */}
          {/* <PaySlipsTable /> */}
          {/* <StudentList /> */}
          {/* <StudentRecordsView />   import date library */}
          {/* <StudentAttendanceTable /> */}
          {/* <StudentAdmissionManager /> */}
          {/* <FeesHistoryDetails />  */}
          {/* <ViewAttendance /> */}
          {/* Model bakki */}
          {/* <StudentResultsComponent /> */}

          {/* Admission */}
          <StudentManagement />






        </Box>
      </Box>
      {/* <Login /> */}
    </>

  )
}

export default App;