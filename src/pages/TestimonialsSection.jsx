import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const TestimonialsSection = ({ t }) => (
  <Box sx={{ backgroundColor: '#f5f7fa', zIndex: 1, py: 8 }}>
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom>
        {t.testimonials.title}
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {t.testimonials.reviews.map((review, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper sx={{ p: 4, height: '100%' }}>
              <Typography variant="body1" gutterBottom>
                {review.text}
              </Typography>
              <Typography variant="subtitle1" color="primary" sx={{ mt: 2 }}>
                {review.author}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default TestimonialsSection; 