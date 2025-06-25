import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia, TextField, MenuItem, IconButton, Paper, FormControl, InputLabel, Select } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';

import bgHero from '../assets/hero.webp';
import WhoAmI from '../assets/photos/who_am_i.webp';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { locales } from '../i18n/locales.js';

// Property Images
import apanemaImg from '../assets/properties/apa_1.webp';
import premiereImg from '../assets/properties/pre_1.webp';
import angelicoImg from '../assets/properties/ang_1.webp';
import blueViewImg from '../assets/properties/blu_1.webp';
import sabaiImg from '../assets/properties/sab_1.webp';
import almaImg from '../assets/properties/alm_1.webp';
import semeliImg from '../assets/properties/sem_1.webp';
import euphoriaImg from '../assets/properties/eup_1.webp';

const properties = [
  {
    name: 'Apanema Villas',
    location: 'Kapparis / Protaras',
    price: 'от €474 000 + VAT',
    details: '3–4 спальни',
  },
  {
    name: 'Premiere Pearl B',
    location: 'Pernera / Protaras',
    price: 'от €595 000',
    details: '3 спальни',
  },
  {
    name: 'Angelico Apartments',
    location: 'Kapparis / Protaras',
    price: 'от €153 000 + VAT',
    details: 'ROI 6–8%',
  },
  {
    name: 'Blue View Lifestyle',
    location: 'Kapparis / Protaras',
    price: 'от €255 000 + VAT',
    details: '2–3 спальни',
  },
  {
    name: 'Sabai Beachfront',
    location: 'у пляжа',
    price: 'от €300 000+',
    details: '2–3 спальни',
  },
  {
    name: 'Alma Villas',
    location: '350 м до пляжа',
    price: 'от €399 000 + VAT',
    details: 'сдача 2025',
  }
];

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
}


const LandingPage = () => {
  const [language, setLanguage] = useState('ru');
  const t = locales[language];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const width = useWindowWidth();

  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme.breakpoints.only('xl'));

  // Section refs
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const painRef = useRef(null);
  const howIWorkRef = useRef(null);
  const whatYouGetRef = useRef(null);
  const propertiesRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactFormRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('вы отправили форму');
  };

  const handleMenuOpen = () => setMobileMenuOpen(true);
  const handleMenuClose = () => setMobileMenuOpen(false);
  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide(prev => (prev < properties.length - 1 ? prev + 1 : 0)),
    onSwipedRight: () => setCurrentSlide(prev => (prev > 0 ? prev - 1 : properties.length - 1)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false
  });

  // Combine locales text with imported images
  const propertyImages = [apanemaImg, premiereImg, angelicoImg, blueViewImg, sabaiImg, almaImg, semeliImg, euphoriaImg];
  const properties = t.properties.list.map((prop, index) => ({
    ...prop,
    image: propertyImages[index]
  }));

  return (
    <>
      <Box sx={{}}>
        <Box sx={{ position: 'fixed', width: '100%', zIndex: 20 }}>
          <Box sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 11,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: { xs: 2, md: 6 },
            // pt: { xs: 2.5, md: 3 },
            pt: {xs: 1.5, md: 1.5},
            pb: { xs: 1, md: 2 },
            minHeight: 64,
            // background: 'transparent',
            backgroundColor: 'rgba(0,0,0,0.1)',
            // backdropFilter: 'none',
            backdropFilter: 'blur(4px)',
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, letterSpacing: 1, fontFamily: 'Suisse, ui-sans-serif, system-ui, sans-serif' }}>
                {t.nav.title}
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 3 }}>
              <Button
                href="https://wa.me/35799901101"
                target="_blank"
                startIcon={<WhatsAppIcon />}
                sx={{ color: 'white', borderColor: 'white', borderWidth: 1, borderStyle: 'solid', borderRadius: 2, px: 2, py: 0.5, fontWeight: 500, fontSize: 15, minWidth: 0, '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' } }}
              >
                {t.nav.whatsapp}
              </Button>
              <Button
                href="tel:+35799901101"
                sx={{ color: 'white', fontWeight: 500, fontSize: 15, minWidth: 0 }}
              >
                {t.nav.phone}
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
                {[
                  { label: t.mobileMenu.hero, ref: heroRef },
                  { label: t.mobileMenu.about, ref: aboutRef },
                  { label: t.mobileMenu.pain, ref: painRef },
                  { label: t.mobileMenu.howIWork, ref: howIWorkRef },
                  { label: t.mobileMenu.whatYouGet, ref: whatYouGetRef },
                  { label: t.mobileMenu.properties, ref: propertiesRef },
                  { label: t.mobileMenu.reviews, ref: reviewsRef },
                  { label: t.mobileMenu.contact, ref: contactFormRef },
                ].map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => {
                      handleMenuClose();
                      scrollToSection(item.ref);
                    }}
                    sx={{ color: 'white', fontSize: 22, fontWeight: 500, background: 'none', boxShadow: 'none', minWidth: 220, justifyContent: 'flex-start', textTransform: 'none', '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' } }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            </Box>
          )}
        </Box>
        {/* ===== Hero Section ===== */}
        <Box ref={heroRef} sx={{
          position: 'relative',
          minHeight: '100vh',
          height: '100vh',
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 100%), url(${bgHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          alignItems: 'center',
          zIndex: 5
        }}>
          <Container maxWidth="lg" sx={{ zIndex: 2, px: { xs: 2, md: 6 }, position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={{ maxWidth: 600, color: 'white', textAlign: 'left', py: { xs: 6, md: 6 }, mt: {xs: 2, md: 6}}}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="overline" sx={{
                  mb: {sm: 0, md: 2},
                  opacity: 0.85,
                  fontWeight: 600,
                  fontSize: 15,
                  letterSpacing: 1.2,
                  textTransform: 'none',
                  lineHeight: 0.5,
                }}>
                  {t.hero.pretitle}
                </Typography>
                <Typography variant="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '1.8rem', md: '2.8rem' }, lineHeight: 1.1, color: 'white', letterSpacing: -1 }}>
                  {t.hero.title}
                </Typography>
                <Typography variant="h5" sx={{ mb: 3, opacity: 0.92, fontWeight: 400, fontSize: { xs: 18, md: 22 }, color: 'white', lineHeight: 1.3 }}>
                  {t.hero.subtitle}
                </Typography>
              </motion.div>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column' }, gap: 2, mt: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
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
                    onClick={() => scrollToSection(contactFormRef)}
                  >
                    {t.hero.button1}
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<WhatsAppIcon />}
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
                    component="a"
                    href="https://wa.me/35799901101"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.hero.button2}
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<DownloadIcon />}
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
                    {t.hero.button3}
                  </Button>
                </motion.div>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ===== About Me Section ===== */}
        <Box ref={aboutRef} sx={{
          backgroundColor: '#f7f7f9',
          
          py: 8,
        }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center" sx={{backgroundColor: 'rgba(255, 255, 255, 0.7)', p: 3, borderRadius: '14px', justifyContent: 'left'}}>
              <Grid item xs={12} md={4}>
                <Box
                  component="img"
                  // src="https://placehold.co/400x600/09252E/FFFFFF?text=Inessa"
                  src={WhoAmI}
                  alt="Inessa"
                  sx={{
                    width: {xs: '100%', sm: '340px', md: '340px'},
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                    display: 'block',
                    maxWidth: '100%',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="h2" gutterBottom >
                  {t.about.title}
                </Typography>
                <Typography variant="h5" color="primary" gutterBottom >
                  {t.about.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom >
                  {t.about.role}<br />
                  {t.about.company}
                </Typography>
                <Box sx={{ mt: 4 }}>
                  {t.about.points.map((point, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box sx={{ color: 'primary.main', fontSize: 24 }}>✔</Box>
                      <Typography variant="body1">{point}</Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* ===== Pain Points and Solutions Section ===== */}
        <Box ref={painRef} sx={{
          backgroundColor: '#eaf3fa',
          py: 8,
          display: 'flex',
          alignItems: 'center'
        }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} sx={{backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '14px', p: 3, }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" gutterBottom sx={{fontSize: {xs: '22px', md: '28px', xl: '28px'}}}>
                  {t.painPoints.title}
                </Typography>
                <Box sx={{ mt: 4 }}>
                  {t.painPoints.points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: {xs: 1, sm: 1, md: 3} }}>
                        <Box sx={{ color: 'error.main', fontSize: 24 }}>❌</Box>
                        <Typography variant="h6" sx={{fontSize: {xs: '16px', md: '1rem'}}}>{point}</Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" gutterBottom sx={{fontSize: {xs: '22px', md: '28px', xl: '28px'}}}>
                  {t.solutions.title}
                </Typography>
                <Box sx={{ mt: 4 }}>
                  {t.solutions.points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: {xs: 1, sm: 1, md: 3} }}>
                        <Box sx={{ color: 'success.main', fontSize: 24 }}>✅</Box>
                        <Typography variant="h6" sx={{fontSize: {xs: '16px', md: '1rem'}}}>{point}</Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* ===== How I Work Section ===== */}
        <Box ref={howIWorkRef} sx={{
          backgroundColor: '#fff',
          display: 'flex', alignItems: 'center', py: 8
        }}>
          <Container maxWidth="lg" sx={{mb: {xs: '100px'}}}>
            <Typography variant="h2" align="center" gutterBottom >
              {t.howIWork.title}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" gutterBottom>
              {t.howIWork.subtitle}
            </Typography>
            
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {t.howIWork.steps.map((step, index) => (
                <Grid item xs={12} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          flexShrink: 0
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Box>
                        <Typography variant="h5" gutterBottom>
                          {step.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {step.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* ===== What You Get Section ===== */}
        <Box ref={whatYouGetRef} sx={{
          backgroundColor: '#006064', zIndex: 1, py: 8
        }}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom sx={{ color: 'white' }}>
              {t.whatYouGet.title}
            </Typography>
            
            <Grid container spacing={3} sx={{ mt: 4 }}>
              {t.whatYouGet.points.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 2,
                        bgcolor: 'rgba(255,255,255,0.1)',
                        borderRadius: '50px',
                        py: 2,
                        px: 3,
                        border: '1px solid rgba(255,255,255,0.2)',
                          height: '100%',
                      }}
                    >
                      <Typography variant="h5" sx={{ lineHeight: 1 }}>
                        {item.icon}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                        {item.text}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* ===== Properties Section ===== */}
        <Box ref={propertiesRef} sx={{
          backgroundColor: '#fff', zIndex: 1, py: 8
        }}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom >
              {t.properties.title}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" gutterBottom>
              {t.properties.subtitle}
            </Typography>
            
            {/* Desktop Grid View */}
              <Grid container spacing={4}
                    sx={{
                        mt: 4,
                        display: { xs: 'none', md: 'grid' },
                        gridTemplateColumns: { md: 'repeat(3, 1fr)' }, // 👈 3 колонки
                        gap: 4, // заменяет spacing, если не хочешь использовать spacing от MUI
                        justifyContent: 'center',
                    }}>
              {properties.slice(0, 6).map((property, index) => (
                <Grid item xs={12} md={4} key={property.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardMedia
                        component="img"
                        sx={{ 
                          height: 240,
                          objectFit: 'cover'
                        }}
                        image={property.image}
                        alt={property.name}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" gutterBottom>
                          {property.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                          {property.location}
                        </Typography>
                        <Typography variant="h6" color="primary" gutterBottom>
                          {property.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {property.details}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Mobile Slider View */}
            <Box sx={{ position: 'relative', mt: 4, display: { xs: 'block', md: 'none' } }}>
              <Box sx={{ overflow: 'hidden', position: 'relative' }}>
                <Box
                  {...swipeHandlers}
                  sx={{
                    display: 'flex',
                    transition: 'transform 0.3s ease-in-out',
                    transform: `translateX(-${currentSlide * (100)}%)`,
                    width: '100%'
                  }}
                >
                  {properties.map((property) => (
                    <Box
                      key={property.name}
                      sx={{
                        width: 'calc(100% - 16px)',
                        flexShrink: 0,
                        mx: 1
                      }}
                    >
                      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                          component="img"
                          height="300"
                          image={property.image}
                          alt={property.name}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography variant="h5" gutterBottom>
                            {property.name}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                            {property.location}
                          </Typography>
                          <Typography variant="h6" color="primary" gutterBottom>
                            {property.price}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {property.details}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Dots indicator */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
              {properties.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: currentSlide === index ? 'primary.main' : 'grey.300',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                  }}
                />
              ))}
            </Box>
          </Container>
        </Box>

        {/* ===== CTA Section ===== */}
          <Box 
            sx={{ 
              py: 6,
              px: 4,
              bgcolor: '#00BCD4',
              textAlign: 'center'
            }}
          >
            <Container maxWidth="lg">
              <Typography 
                variant="h4" 
                sx={{ 
                  color: 'white',
                  fontWeight: 600,
                  mb: 3
                }}
              >
                {t.cta.title}
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'white',
                  opacity: 0.9,
                  mb: 4,
                  maxWidth: 600,
                  mx: 'auto'
                }}
              >
                {t.cta.subtitle}
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: '#00BCD4',
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)'
                  }
                }}
                onClick={() => scrollToSection(contactFormRef)}
              >
                {t.cta.button}
              </Button>
            </Container>
          </Box>

        {/* ===== Testimonials Section ===== */}
        <Box ref={reviewsRef} sx={{
          backgroundColor: '#f5f7fa', zIndex: 1, py: 8
        }}>
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

        {/* ===== Contact Form Section ===== */}
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

        {/* ===== Footer ===== */}
      <Box sx={{ py: 4, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                    {t.footer.contactsTitle}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <WhatsAppIcon />
                <Typography>{t.footer.phone}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <EmailIcon />
                <Typography>{t.footer.email}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon />
                    <Typography>{t.footer.location}</Typography>
              </Box>
            </Grid>
                <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                    {t.footer.socialTitle}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                    <InstagramIcon sx={{ cursor: 'pointer', fontSize: 32 }} />
                    <LinkedInIcon sx={{ cursor: 'pointer', fontSize: 32 }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      </Box>
    </>
  );
};

export default LandingPage; 