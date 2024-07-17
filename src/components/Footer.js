import * as React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#616F77', color: 'white', padding: '10px 0', marginLeft: '80px', textAlign: 'center' }}>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} HMIS. All rights reserved.
            </Typography>
          </Grid>
          
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
