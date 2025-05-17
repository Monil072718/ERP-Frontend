"use client"

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Divider,
} from "@mui/material"
import DownloadIcon from "@mui/icons-material/Download"

const PaySlipsTable = () => {
  // Mock data for pay slips
  const paySlips = [
    {
      id: 1,
      month: "Mar2025",
      grossSalary: 7500.0,
      deductions: 2250.0,
      netSalary: 5250.0,
      status: "Paid",
    },
    {
      id: 2,
      month: "Feb 2025",
      grossSalary: 7500.0,
      deductions: 2250.0,
      netSalary: 5250.0,
      status: "Paid",
    },
    {
      id: 3,
      month: "Jan 2025",
      grossSalary: 7500.0,
      deductions: 2250.0,
      netSalary: 5250.0,
      status: "Paid",
    },
    {
      id: 4,
      month: "Dec 2024",
      grossSalary: 7500.0,
      deductions: 2250.0,
      netSalary: 5250.0,
      status: "Paid",
    },
  ]

  const handleDownload = (id) => {
    console.log(`Downloading pay slip ${id}`)
    // Here you would typically trigger a download of the pay slip
  }

  return (
    <Box sx={{ width: "100%", p: 4 , mt: 2 }}>
      <Typography variant="h6" component="h2" sx={{ mb: 2, fontWeight: "normal" }}>
        Recent Pay slips
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <TableContainer sx={{ border: "1px solid #e0e0e0", borderRadius: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontWeight: "normal", borderBottom: "1px solid #e0e0e0", borderRight: "1px solid #e0e0e0" }}
              >
                Month
              </TableCell>
              <TableCell
                sx={{ fontWeight: "normal", borderBottom: "1px solid #e0e0e0", borderRight: "1px solid #e0e0e0" }}
              >
                Gross Salary
              </TableCell>
              <TableCell
                sx={{ fontWeight: "normal", borderBottom: "1px solid #e0e0e0", borderRight: "1px solid #e0e0e0" }}
              >
                Deductions
              </TableCell>
              <TableCell
                sx={{ fontWeight: "normal", borderBottom: "1px solid #e0e0e0", borderRight: "1px solid #e0e0e0" }}
              >
                Net Salary
              </TableCell>
              <TableCell
                sx={{ fontWeight: "normal", borderBottom: "1px solid #e0e0e0", borderRight: "1px solid #e0e0e0" }}
              >
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: "normal", borderBottom: "1px solid #e0e0e0" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paySlips.map((slip) => (
              <TableRow key={slip.id}>
                <TableCell sx={{ borderRight: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0" }}>
                  {slip.month}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0" }}>
                  {slip.grossSalary.toFixed(2)}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0" }}>
                  {slip.deductions.toFixed(2)}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0" }}>
                  {slip.netSalary.toFixed(2)}
                </TableCell>
                <TableCell sx={{ borderRight: "1px solid #e0e0e0", borderBottom: "1px solid #e0e0e0" }}>
                  {slip.status}
                </TableCell>
                <TableCell sx={{ borderBottom: "1px solid #e0e0e0" }}>
                  <Button
                    variant="text"
                    size="small"
                    startIcon={<DownloadIcon />}
                    onClick={() => handleDownload(slip.id)}
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default PaySlipsTable
