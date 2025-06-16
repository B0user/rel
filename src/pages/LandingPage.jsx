import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia, TextField, MenuItem } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuOpen = () => setMobileMenuOpen(true);
  const handleMenuClose = () => setMobileMenuOpen(false);
  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '80vh', md: '100vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/images/hero.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(9, 37, 46, 0.45)',
            zIndex: 1,
          },
        }}
      >
        {/* Sticky Header Bar */}
        <Box sx={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 11,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, md: 6 },
          pt: { xs: 2.5, md: 3 },
          pb: { xs: 1, md: 2 },
          minHeight: 64,
          background: 'transparent',
          backdropFilter: 'none',
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, letterSpacing: 1, fontFamily: 'Suisse, ui-sans-serif, system-ui, sans-serif' }}>
              Inessa
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 3 }}>
            <Button
              href="https://wa.me/35799901101"
              target="_blank"
              startIcon={<WhatsAppIcon />}
              sx={{ color: 'white', borderColor: 'white', borderWidth: 1, borderStyle: 'solid', borderRadius: 2, px: 2, py: 0.5, fontWeight: 500, fontSize: 15, minWidth: 0, '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' } }}
            >
              WhatsApp
            </Button>
            <Button
              href="tel:+35799901101"
              sx={{ color: 'white', fontWeight: 500, fontSize: 15, minWidth: 0 }}
            >
              +357 999 011 01
            </Button>
          </Box>
          {/* Burger menu for mobile */}
          <MenuIcon sx={{ color: 'white', fontSize: 36, ml: 2, display: { xs: 'block', lg: 'none' }, cursor: 'pointer' }} onClick={handleMenuOpen} />
        </Box>
        {/* Mobile Fullscreen Menu Overlay */}
        {mobileMenuOpen && (
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              bgcolor: 'rgba(9, 37, 46, 0.97)',
              zIndex: 2000,
              display: { xs: 'flex', lg: 'none' },
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 4,
            }}
          >
            <CloseIcon onClick={handleMenuClose} sx={{ color: 'white', fontSize: 40, position: 'absolute', top: 24, right: 24, cursor: 'pointer' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', mt: 6 }}>
              <Button
                href="https://wa.me/35799901101"
                target="_blank"
                startIcon={<WhatsAppIcon />}
                sx={{ color: 'white', borderColor: 'white', borderWidth: 1, borderStyle: 'solid', borderRadius: 2, px: 4, py: 1.5, fontWeight: 600, fontSize: 18, minWidth: 220, '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' } }}
              >
                WhatsApp
              </Button>
              <Button
                href="tel:+35799901101"
                sx={{ color: 'white', borderColor: 'white', borderWidth: 1, borderStyle: 'solid', borderRadius: 2, px: 4, py: 1.5, fontWeight: 600, fontSize: 18, minWidth: 220, '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' } }}
              >
                +357 999 011 01
              </Button>
              <Box sx={{ height: 24 }} />
              {[
                { id: 'about', label: 'About' },
                { id: 'properties', label: 'Properties' },
                { id: 'advantages', label: 'Advantages' },
                { id: 'reviews', label: 'Reviews' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <Button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  sx={{ color: 'white', fontSize: 22, fontWeight: 500, background: 'none', boxShadow: 'none', minWidth: 220, justifyContent: 'flex-start', textTransform: 'none', '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' } }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>
        )}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', alignItems: 'center', px: { xs: 2, md: 6 } }}>
          <Box sx={{ maxWidth: 600, color: 'white', textAlign: 'left', py: { xs: 8, md: 0 } }}>
            <Typography variant="overline" sx={{ mb: 2, opacity: 0.85, fontWeight: 600, fontSize: 15, letterSpacing: 1.2, textTransform: 'none' }}>
              На основе 100+ собственных сделок
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2.1rem', md: '2.8rem' }, lineHeight: 1.1, color: 'white', letterSpacing: -1 }}>
              Exclusive real estate in Cyprus<br />with full support
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, opacity: 0.92, fontWeight: 400, fontSize: { xs: 18, md: 22 }, color: 'white', lineHeight: 1.3 }}>
              Villas, apartments and investments in Protaras and Ayia Napa
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'white',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 2,
                backdropFilter: 'blur(2px)',
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
                '&:hover': {
                  background: 'rgba(255,255,255,0.08)',
                  borderColor: 'white',
                },
              }}
            >
              Get an offer
            </Button>
            {/* Flags row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 6 }}>
              <Typography variant="body2" sx={{ color: 'white', opacity: 0.8, fontWeight: 500, fontSize: 15 }}>
                Working in 7 markets
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {/* Emoji flags for now */}
                {['🇦🇪','🇷🇺','🇬🇪','🇹🇷','🇨🇾','🇬🇧','🇩🇪'].map((flag, i) => (
                  <Box key={i} sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, border: '2px solid rgba(255,255,255,0.4)' }}>
                    {flag}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
        {/* Bottom left indicator */}
        <Box sx={{ position: 'absolute', left: { xs: 16, md: 48 }, bottom: 16, zIndex: 2 }}>
          <Typography variant="body2" sx={{ color: 'white', opacity: 0.8, fontSize: 16, fontWeight: 400 }}>
            01
          </Typography>
        </Box>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="/expert-photo.jpg"
                alt="Inessa"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" gutterBottom>
                About Me
              </Typography>
              <Typography variant="h5" color="primary" gutterBottom>
                Inessa
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                Business Development Manager at Giovani Homes
              </Typography>
              <Typography variant="body1" paragraph>
                With over 5 years of experience in the Cyprus real estate market, I specialize in working with clients from the EU, CIS, and Middle East. My focus is on building trust, providing comprehensive support, and delivering exceptional results for each client.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Properties Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Featured Properties
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {['Villa', 'Apartment', 'Investment'].map((type) => (
              <Grid item xs={12} md={4} key={type}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`/property-${type.toLowerCase()}.jpg`}
                    alt={type}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Starting from €300,000
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                      ROI up to 8%
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button variant="contained" color="secondary" size="large">
              Request a selection of objects
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Advantages Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Why Choose Me
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              'Direct access to objects from developer',
              'Investment return analysis (ROI up to 8%)',
              'Free consultation and selection',
              'Full transaction support',
              'Confidentiality and security',
              'Legal purity',
              'Consultations on residence permit/permanent residence',
            ].map((advantage, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: 'secondary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="h6" color="primary">
                      {index + 1}
                    </Typography>
                  </Box>
                  <Typography variant="body1">{advantage}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" gutterBottom>
            Get a free consultation and selection of properties
          </Typography>
          <Box component="form" sx={{ mt: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name Last Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Investment Purpose"
                  variant="outlined"
                >
                  {['for yourself', 'rent', 'residence permit', 'resale'].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  select
                  label="Budget"
                  variant="outlined"
                >
                  {['up to €300K', '€300–500K', '€500K+', 'other'].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Comment"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Get a selection / consultation
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <WhatsAppIcon />
                <Typography>+357 999 011 01</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <EmailIcon />
                <Typography>inessa@giovani.com.cy</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon />
                <Typography>Cyprus, Protaras & Ayia Napa</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <InstagramIcon sx={{ cursor: 'pointer' }} />
                <LinkedInIcon sx={{ cursor: 'pointer' }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage; 