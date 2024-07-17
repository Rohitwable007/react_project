import React from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import { Search as SearchIcon, Add as AddIcon, SaveAlt as ExportIcon, MergeType as MergeIcon } from '@mui/icons-material';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

function Patient() {
  // Example data for the table
  function createData(clinicId, uid, name, gender, email, mobile, parentName, doctor) {
    return { clinicId, uid, name, gender, email, mobile, parentName, doctor };
  }

  const rows = [
    createData('ID001', 'UID001', 'John Doe', 'Male', 'john.doe@example.com', '9876543210', 'Jane Doe', 'Dr. Smith'),
    createData('ID002', 'UID002', 'Jane Smith', 'Female', 'jane.smith@example.com', '9876543211', 'John Smith', 'Dr. Brown'),
    createData('ID003', 'UID003', 'Michael Johnson', 'Male', 'michael.johnson@example.com', '9876543212', 'Sara Johnson', 'Dr. Johnson'),
    createData('ID004', 'UID004', 'Emily Davis', 'Female', 'emily.davis@example.com', '9876543213', 'David Davis', 'Dr. Anderson'),
    createData('ID005', 'UID005', 'William Wilson', 'Male', 'william.wilson@example.com', '9876543214', 'Olivia Wilson', 'Dr. Wilson'),
  ];

 


  return (
    <Container style={{ backgroundColor: 'white', padding: '10px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {/* Example search section */}
          <TextField fullWidth label="Search" variant="outlined" />
          <Button variant="contained" startIcon={<SearchIcon />}>Search</Button>
          <Button variant="contained" color="primary" startIcon={<AddIcon />}>Add Patient</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Example export and merge section */}
          <Button variant="contained" startIcon={<ExportIcon />}>Export All</Button>
          <Button variant="contained" color="secondary" startIcon={<MergeIcon />}>Merge</Button>
        </Grid>
        <Grid item xs={12}>
          {/* Example patient listing table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Clinic Specific ID</TableCell>
                  <TableCell>UID</TableCell>
                  <TableCell>Patient Name</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Parent Name</TableCell>
                  <TableCell>Doctor</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.clinicId}</TableCell>
                    <TableCell>{row.uid}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.mobile}</TableCell>
                    <TableCell>{row.parentName}</TableCell>
                    <TableCell>{row.doctor}</TableCell>
                    <TableCell>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
    
  );
  
}

export default Patient;
