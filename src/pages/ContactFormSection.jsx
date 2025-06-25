import React from 'react';
import { Box, Container, Typography, Paper, FormControl, TextField, InputLabel, Select, MenuItem, Button } from '@mui/material';

const ContactFormSection = ({ t, contactFormRef, handleFormSubmit }) => (
  <Box ref={contactFormRef} sx={{ backgroundColor: '#fff', zIndex: 1, py: 8 }}>
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom >
        {t.contactForm.title}
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" gutterBottom>
        {t.contactForm.subtitle}
      </Typography>
      <Paper 
        elevation={3} 
        sx={{ 
          mt: 4, 
          p: { xs: 2, sm: 4 },
          borderRadius: 2
        }}
      >
        <FormControl fullWidth component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }} onSubmit={handleFormSubmit}>
          <TextField
            fullWidth
            required
            name="fullName"
            label={t.contactForm.nameLabel}
            variant="outlined"
          />
          <TextField
            fullWidth
            required
            name="contact"
            label={t.contactForm.contactLabel}
            variant="outlined"
          />
          <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
            <FormControl fullWidth>
              <InputLabel id="purpose-label">{t.contactForm.purposeLabel}</InputLabel>
              <Select
                labelId="purpose-label"
                name="purpose"
                label={t.contactForm.purposeLabel}
                defaultValue=""
              >
                {t.contactForm.purposeOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="budget-label">{t.contactForm.budgetLabel}</InputLabel>
              <Select
                labelId="budget-label"
                name="budget"
                label={t.contactForm.budgetLabel}
                defaultValue=""
              >
                {t.contactForm.budgetOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <TextField
            fullWidth
            multiline
            rows={4}
            name="comment"
            label={t.contactForm.commentLabel}
            variant="outlined"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            sx={{ 
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              mt: 2
            }}
          >
            {t.contactForm.button}
          </Button>
        </FormControl>
      </Paper>
    </Container>
  </Box>
);

export default ContactFormSection; 