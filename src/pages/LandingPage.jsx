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
import Avatar from '@mui/material/Avatar';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { locales } from '../i18n/locales.js';

import bgHero from '../assets/hero.webp';
import WhoAmI from '../assets/photos/who_am_i.webp';
// Property Images
import apa_1 from '../assets/properties/apa_1.webp';
import apa_2 from '../assets/properties/apa_2.webp';
import apa_3 from '../assets/properties/apa_3.webp';
import pre_1 from '../assets/properties/pre_1.webp';
import pre_2 from '../assets/properties/pre_2.webp';
import pre_3 from '../assets/properties/pre_3.webp';
import ang_1 from '../assets/properties/ang_1.webp';
import ang_2 from '../assets/properties/ang_2.webp';
import ang_3 from '../assets/properties/ang_3.webp';
import blu_1 from '../assets/properties/blu_1.webp';
import blu_2 from '../assets/properties/blu_2.webp';
import blu_3 from '../assets/properties/blu_3.webp';
import sab_1 from '../assets/properties/sab_1.webp';
import sab_2 from '../assets/properties/sab_2.webp';
import sab_3 from '../assets/properties/sab_3.webp';
import alm_1 from '../assets/properties/alm_1.webp';
import alm_2 from '../assets/properties/alm_2.webp';
import alm_3 from '../assets/properties/alm_3.webp';
import eup_1 from '../assets/properties/eup_1.webp';
import eup_2 from '../assets/properties/eup_2.webp';
import sem_1 from '../assets/properties/sem_1.webp';
import sem_2 from '../assets/properties/sem_2.webp';
import sem_3 from '../assets/properties/sem_3.webp';
import sem_4 from '../assets/properties/sem_4.webp';
import sem_5 from '../assets/properties/sem_5.webp';
// Testimonial images
import testimonial1 from '../assets/photos/testimonials/1.webp';
import testimonial2 from '../assets/photos/testimonials/2.webp';
import testimonial3 from '../assets/photos/testimonials/3.webp';
import testimonial4 from '../assets/photos/testimonials/4.webp';
import testimonial5 from '../assets/photos/testimonials/5.webp';
import testimonial6 from '../assets/photos/testimonials/6.webp';
import testimonial7 from '../assets/photos/testimonials/7.webp';

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

const testimonialAvatars = [
  testimonial1, testimonial2, testimonial3, testimonial4, testimonial5, testimonial6, testimonial7
];

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
  const properties = t.properties.list.map((prop) => {
    let photos = [];
    if (prop.title.startsWith('Apanema')) {
      photos = [apa_1, apa_2, apa_3];
    } else if (prop.title.startsWith('Premiere Pearl')) {
      photos = [pre_1, pre_2, pre_3];
    } else if (prop.title.startsWith('Angelico')) {
      photos = [ang_1, ang_2, ang_3];
    } else if (prop.title.startsWith('Blue View')) {
      photos = [blu_1, blu_2, blu_3];
    } else if (prop.title.startsWith('Sabai')) {
      photos = [sab_1, sab_2, sab_3];
    } else if (prop.title.startsWith('Alma')) {
      photos = [alm_1, alm_2, alm_3];
    } else if (prop.title.startsWith('Euphoria')) {
      photos = [eup_1, eup_2];
    } else if (prop.title.startsWith('Semeli B')) {
      photos = [sem_1, sem_2, sem_3, sem_4, sem_5];
    } else {
      photos = [];
    }
    return {
      ...prop,
      photos,
    };
  });

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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}>
                <Typography
                  onClick={() => setLanguage('ru')}
                  sx={{
                    cursor: 'pointer',
                    fontWeight: language === 'ru' ? 700 : 400,
                    color: language === 'ru' ? 'primary.main' : 'white',
                    textDecoration: language === 'ru' ? 'underline' : 'none',
                    fontSize: 16,
                    transition: 'color 0.2s',
                  }}
                >
                  RU
                </Typography>
                <Typography sx={{ color: 'white', fontWeight: 400, fontSize: 16 }}>|</Typography>
                <Typography
                  onClick={() => setLanguage('en')}
                  sx={{
                    cursor: 'pointer',
                    fontWeight: language === 'en' ? 700 : 400,
                    color: language === 'en' ? 'primary.main' : 'white',
                    textDecoration: language === 'en' ? 'underline' : 'none',
                    fontSize: 16,
                    transition: 'color 0.2s',
                  }}
                >
                  EN
                </Typography>
              </Box>
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
        <main>
          {/* ===== Hero Section ===== */}
          <section ref={heroRef}>
            <Box sx={{
              position: 'relative',
              minHeight: '100vh',
              height: '100vh',
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%), url(${bgHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              alignItems: 'center',
              zIndex: 5
            }}>
              <Container maxWidth="lg" sx={{ zIndex: 2, px: { xs: 2, md: 6 }, position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ maxWidth: 600, color: 'white', textAlign: 'left', py: { xs: 6, md: 6 }, mt: {xs: 2, md: 6}}}>
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
                  <Typography variant="h5" sx={{ mb: 0, opacity: 0.92, fontWeight: 400, fontSize: { xs: 18, md: 22 }, color: 'white', lineHeight: 1.3 }}>
                    {t.hero.subtitle1}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 3, opacity: 0.92, fontWeight: 400, fontSize: { xs: 18, md: 22 }, color: 'white', lineHeight: 1.3 }}>
                    {t.hero.subtitle2}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column' }, gap: 2, mt: 3 }}>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        color: 'white',
                        // borderColor: 'white',
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        borderRadius: 2,
                        backdropFilter: 'blur(2px)',
                        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
                        backgroundColor: '#00BCD4',
                        '&:hover': {
                          background: 'rgba(255,255,255,0.4)',
                          borderColor: 'white',
                        },
                      }}
                      onClick={() => scrollToSection(contactFormRef)}
                    >
                      {t.hero.button1}
                    </Button>
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
                    <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Button
                        variant="text"
                        size="large"
                        startIcon={<DownloadIcon />}
                        sx={{
                          color: 'white',
                          // borderColor: 'white',
                          fontWeight: 600,
                          px: 4,
                          py: 1.5,
                          fontSize: '1.1rem',
                          borderRadius: 2,
                          // backdropFilter: 'blur(2px)',
                          // boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
                          '&:hover': {
                            borderColor: 'white',
                            border: '1px solid'
                          },
                        }}
                      >
                        {t.hero.button3}
                      </Button>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                    flexWrap: { xs: 'nowrap', sm: 'nowrap', md: 'wrap' },
                    alignItems: 'center',
                    justifyContent: { xs: 'flex-start', md: 'center' },
                    gap: { xs: 1.5, sm: 2, md: 3 },
                    mt: { xs: 1, md: 2 },
                  }}
                >
                  {t.hero.attention_triggers.map((trigger, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        bgcolor: 'rgba(255,255,255,0.1)',
                        borderRadius: '50px',
                        py: 2,
                        px: 3,
                        border: '1px solid rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(2px)',
                        minHeight: 40,
                        width: { xs: '100%', sm: '100%', md: 'fit-content' },
                        textAlign: 'center',
                        mb: { xs: 0, md: 0 },
                      }}
                    >
                      <Typography variant="h5" sx={{ lineHeight: 1.1, fontSize: { xs: 18, sm: 20, md: 22 } }}>
                        {trigger.icon}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'white', fontWeight: 500, fontSize: { xs: 15, sm: 16, md: 18 }, lineHeight: 1.1 }}>
                        {trigger.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>

              </Container>
            </Box>
          </section>

          {/* ===== About Me Section ===== */}
          <section ref={aboutRef}>
            <Box sx={{
              backgroundColor: '#f7f7f9',
              py: 8,
            }}>
              <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center" sx={{backgroundColor: 'rgba(255, 255, 255, 0.7)', p: 3, borderRadius: '14px', justifyContent: 'left' }}>
                  <Grid item xs={12} md={4}>
                    <Box
                      component="img"
                      src={WhoAmI}
                      alt="Фото Инессы - эксперт по недвижимости на Кипре"
                      width={340}
                      height={510}
                      loading="lazy"
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
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{textWrap: 'wrap'}} >
                      {t.about.role}<br />
                    </Typography>
                    <Typography color="text.secondary" gutterBottom sx={{width: { sm: '200px',md: '500px' } }} >
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
                <Box
                    sx={{
                      mt: 4,
                      p: 3,
                      borderLeft: '4px solid',
                      borderColor: 'primary.main',
                      backgroundColor: '#fff',
                      borderRadius: 2,
                      boxShadow: 1,
                    }}
                >
                  <Typography variant="body1" fontStyle="italic" color="text.secondary">
                    “{t.about.quote}”
                  </Typography>
                </Box>
              </Container>
            </Box>
          </section>

          {/* ===== Pain Points and Solutions Section ===== */}
          <section ref={painRef}>
            <Box sx={{
              backgroundColor: '#eaf3fa',
              py: 8,
              display: 'flex',
              alignItems: 'center'
            }}>
              <Container maxWidth="lg">
                <Typography sx={{textAlign: 'left', fontSize: '28px', paddingLeft: 3, marginBottom: 6}}>{t.pain.title}</Typography>
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
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 2, marginTop: 4}}>
                  <Typography sx={{fontSize: '24px'}}>{t.pain.titleCTA}</Typography>
                  <Typography>{t.pain.subtitleCTA}</Typography>
                  <Button
                      variant="contained"
                          color="primary"
                          size="large"
                  >{t.pain.buttonCTA}</Button>
                </Box>
              </Container>
            </Box>
          </section>

          {/* ===== How I Work Section ===== */}
          <section ref={howIWorkRef}>
            <Box sx={{
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
                            <Typography variant="body1" color="text.primary" sx={{fontWeight: 'bold'}}>
                              {step.res}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>

                <Box
                  sx={{
                    mt: 8,
                    mb: 2,
                    p: { xs: 2, sm: 4 },
                    background: 'linear-gradient(90deg, #e0f7fa 0%, #f1f8e9 100%)',
                    borderRadius: 4,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 3,
                  }}
                >
                  <Typography variant="h5" align="center" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                    {t.howIWork.bottomBlock.top}
                  </Typography>
                  <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ width: '100%' }}>
                    <Grid item xs={12} sm={5} md={4}>
                      <Button fullWidth variant="contained" color="primary" size="large" sx={{ py: 1.5, fontWeight: 700, fontSize: { xs: 16, sm: 18 } }}>
                        {t.howIWork.bottomBlock.button1}
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={2} md={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Typography variant="body1" align="center" sx={{ color: 'primary.main', fontWeight: 600 }}>
                        {t.howIWork.bottomBlock.orText}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5} md={4}>
                      <Button
                        fullWidth
                        variant="outlined"
                        color="primary"
                        size="large"
                        startIcon={<WhatsAppIcon />}
                        sx={{ py: 1.5, fontWeight: 700, fontSize: { xs: 16, sm: 18 } }}
                      >
                        {t.howIWork.bottomBlock.button2}
                      </Button>
                    </Grid>
                  </Grid>
                  <Typography variant="body1" align="center" sx={{ color: 'text.secondary', mt: 2 }}>
                    {t.howIWork.bottomBlock.bottom}
                  </Typography>
                </Box>

              </Container>
            </Box>
          </section>

          {/* ===== What You Get Section ===== */}
          <section ref={whatYouGetRef}>
            <Box sx={{
              // backgroundColor: '#006064',
              background: 'linear-gradient(to bottom, #001f24 30%, #004d4d 60%, #0097a7 100%)',
              zIndex: 1, py: 8
            }}>
              <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom sx={{ color: 'white' }}>
                  {t.whatYouGet.title}
                </Typography>
                
                <Grid container spacing={3} sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, marginTop: 4 }}>
                  {t.whatYouGet.points.map((item, index) => (
                    <Grid item xs={12} sm={12} md={4} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                      >
                        <Box 
                          sx={{ 
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'left',
                            alignItems: 'left',
                            width: {sm: '300px', md: '450px', lg: '500px'},
                            gap: 2,
                            bgcolor: 'rgba(255,255,255,0.1)',
                            borderRadius: '10px',
                            py: 2,
                            px: 3,
                            border: '1px solid rgba(255,255,255,0.2)',
                            height: {sm: '300px', md: '250px', lg: '200px'},
                          }}
                        >
                          <Typography variant="h5" sx={{ lineHeight: 1 }}>
                            {item.icon}
                          </Typography>
                          <Typography variant="body1" sx={{textAlign: 'left', color: 'white', fontWeight: 800, fontSize: '16px', lineHeight: 1}}>
                            {item.title}
                          </Typography>
                          <Typography sx={{textAlign: 'left', color: 'white', fontWeight: 500, lineHeight: 1}}>
                            <i>{item.description}</i>
                          </Typography>
                          <Typography sx={{textAlign: 'left', color: 'white', fontWeight: 300, lineHeight: 1  }}>
                            {item.res}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>
          </section>

          {/* ===== Properties Section ===== */}
          <section ref={propertiesRef}>
            <Box sx={{
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
                          gridTemplateColumns: { md: 'repeat(3, 1fr)' },
                          gap: 4,
                          justifyContent: 'center',
                      }}>
                {properties.slice(0, 9).map((property, index) => {
                  const [photoIndex, setPhotoIndex] = useState(0);
                  const handlePrev = (e) => {
                    e.stopPropagation();
                    setPhotoIndex((prev) => (prev === 0 ? property.photos.length - 1 : prev - 1));
                  };
                  const handleNext = (e) => {
                    e.stopPropagation();
                    setPhotoIndex((prev) => (prev === property.photos.length - 1 ? 0 : prev + 1));
                  };
                  return (
                    <Grid item xs={12} md={4} key={property.title}>
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                      >
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4, boxShadow: 3, overflow: 'hidden' }}>
                          <Box sx={{ position: 'relative' }}>
                            <CardMedia
                              component="img"
                              sx={{ height: 240, objectFit: 'cover' }}
                              image={property.photos[photoIndex]}
                              alt={property.title}
                              width={400}
                              height={240}
                              loading="lazy"
                            />
                            {/* Кнопки навигации */}
                            <IconButton onClick={handlePrev} sx={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.7)' }}>
                              <ArrowBackIosNewIcon fontSize="small" />
                            </IconButton>
                            <IconButton onClick={handleNext} sx={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.7)' }}>
                              <ArrowForwardIosIcon fontSize="small" />
                            </IconButton>
                            {/* Индикаторы */}
                            <Box sx={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1 }}>
                              {property.photos.map((_, idx) => (
                                <Box key={idx} sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: idx === photoIndex ? 'primary.main' : 'grey.300' }} />
                              ))}
                            </Box>
                          </Box>
                          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                              <Typography variant="h4" component="span">{property.emoji}</Typography>
                              <Typography variant="h6" sx={{ fontWeight: 700 }}>{property.title}</Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, mb: 0.5 }}>
                              <LocationOnIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />{property.location}
                            </Typography>
                            <Typography variant="h6" color="primary" sx={{ fontWeight: 700, mb: 0.5 }}>{property.price}</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>{property.details}</Typography>
                            <Typography variant="body2" sx={{ color: 'success.main', fontWeight: 600, mb: 0.5 }}>{property.suitability}</Typography>
                            <Typography variant="body2" sx={{ color: 'text.primary', mb: 0.5 }}>{property.features}</Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  );
                })}
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
                      {properties.map((property, propIdx) => {
                        const [photoIndex, setPhotoIndex] = useState(0);
                        const handlePrev = (e) => {
                          e.stopPropagation();
                          setPhotoIndex((prev) => (prev === 0 ? property.photos.length - 1 : prev - 1));
                        };
                        const handleNext = (e) => {
                          e.stopPropagation();
                          setPhotoIndex((prev) => (prev === property.photos.length - 1 ? 0 : prev + 1));
                        };
                        return (
                          <Box
                            key={property.title}
                            sx={{
                              width: 'calc(100% - 16px)',
                              flexShrink: 0,
                              mx: 1
                            }}
                          >
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4, boxShadow: 3, overflow: 'hidden' }}>
                              <Box sx={{ position: 'relative' }}>
                                <CardMedia
                                  component="img"
                                  sx={{ height: 300, objectFit: 'cover', width: 400 }}
                                  image={property.photos[photoIndex]}
                                  alt={property.title}
                                  loading="lazy"
                                />
                                {/* Кнопки навигации */}
                                <IconButton onClick={handlePrev} sx={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.7)' }}>
                                  <ArrowBackIosNewIcon fontSize="small" />
                                </IconButton>
                                <IconButton onClick={handleNext} sx={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.7)' }}>
                                  <ArrowForwardIosIcon fontSize="small" />
                                </IconButton>
                                {/* Индикаторы */}
                                <Box sx={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1 }}>
                                  {property.photos.map((_, idx) => (
                                    <Box key={idx} sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: idx === photoIndex ? 'primary.main' : 'grey.300' }} />
                                  ))}
                                </Box>
                              </Box>
                              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                  <Typography variant="h4" component="span">{property.emoji}</Typography>
                                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{property.title}</Typography>
                                </Box>
                                <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, mb: 0.5 }}>
                                  <LocationOnIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />{property.location}
                                </Typography>
                                <Typography variant="h6" color="primary" sx={{ fontWeight: 700, mb: 0.5 }}>{property.price}</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>{property.details}</Typography>
                                <Typography variant="body2" sx={{ color: 'success.main', fontWeight: 600, mb: 0.5 }}>{property.suitability}</Typography>
                                <Typography variant="body2" sx={{ color: 'text.primary', mb: 0.5 }}>{property.features}</Typography>
                              </CardContent>
                            </Card>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                </Box>

                {/* Dots indicator */}
                <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', gap: 1, mt: 4 }}>
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
          </section>

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
          <section ref={reviewsRef}>
            <Box sx={{
              backgroundColor: '#f5f7fa', zIndex: 1, py: 8
            }}>
              <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom>
                  {t.testimonials.title}
                </Typography>
                <Grid container spacing={4} sx={{ mt: 4 }}>
                  {t.testimonials.reviews.map((review, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Paper sx={{
                        p: { xs: 2, sm: 4 },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderRadius: 4,
                        boxShadow: 2,
                        bgcolor: 'white',
                        minHeight: 260,
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                          <Typography variant="h4" component="span" sx={{ fontSize: 36 }}>{review.flag}</Typography>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>{review.author}</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>{review.city}</Typography>
                        </Box>
                        <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}>{review.goal}</Typography>
                        <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic', color: 'text.primary' }}>
                          “{review.text}”
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                          <LocationOnIcon fontSize="small" sx={{ color: 'primary.main' }} />
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>{review.property}</Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 14 }}>{review.tags}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>
          </section>

          {/* ===== Contact Form Section ===== */}
          <section ref={contactFormRef}>
            <Box sx={{ backgroundColor: '#fff', zIndex: 1, py: 8 }}>
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
          </section>
        </main>

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
                      <a href="https://www.instagram.com/cyprushouses?igsh=MW1lZHo4Yzg2Y3ozZw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        <InstagramIcon sx={{ cursor: 'pointer', fontSize: 32 }} />
                      </a>
                      <a href="https://www.linkedin.com/in/inessa-zheurova-46295017b/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        <LinkedInIcon sx={{ cursor: 'pointer', fontSize: 32 }} />
                      </a>
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