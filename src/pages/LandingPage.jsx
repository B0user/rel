import React, { useState } from 'react';
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

const properties = [
  {
    name: 'Apanema Villas',
    location: 'Kapparis / Protaras',
    price: 'от €474 000 + VAT',
    details: '3–4 спальни',
    image: 'https://placehold.co/600x400/09252E/FFFFFF?text=Apanema+Villas'
  },
  {
    name: 'Premiere Pearl B',
    location: 'Pernera / Protaras',
    price: 'от €595 000',
    details: '3 спальни',
    image: 'https://placehold.co/600x400/09252E/FFFFFF?text=Premiere+Pearl'
  },
  {
    name: 'Angelico Apartments',
    location: 'Kapparis / Protaras',
    price: 'от €153 000 + VAT',
    details: 'ROI 6–8%',
    image: 'https://placehold.co/600x400/09252E/FFFFFF?text=Angelico'
  },
  {
    name: 'Blue View Lifestyle',
    location: 'Kapparis / Protaras',
    price: 'от €255 000 + VAT',
    details: '2–3 спальни',
    image: 'https://placehold.co/600x400/09252E/FFFFFF?text=Blue+View'
  },
  {
    name: 'Sabai Beachfront',
    location: 'у пляжа',
    price: 'от €300 000+',
    details: '2–3 спальни',
    image: 'https://placehold.co/600x400/09252E/FFFFFF?text=Sabai'
  },
  {
    name: 'Alma Villas',
    location: '350 м до пляжа',
    price: 'от €399 000 + VAT',
    details: 'сдача 2025',
    image: 'https://placehold.co/600x400/09252E/FFFFFF?text=Alma'
  }
];

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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
            backgroundImage: 'url("https://placehold.co/1920x1080/000000")',
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
            background: 'rgba(0, 0, 0, 1)',
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
              Эксклюзивная недвижимость на Кипре — под ваш запрос и с полным сопровождением
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, opacity: 0.92, fontWeight: 400, fontSize: { xs: 18, md: 22 }, color: 'white', lineHeight: 1.3 }}>
              Виллы, апартаменты и инвестиционные проекты в Протарасе и Айя-Напе. Без переплат и потерь времени. Все этапы беру на себя.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
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
                Получить персональный подбор
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
              >
                Связаться в WhatsApp
              </Button>
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
                Скачать гид
              </Button>
            </Box>
            
          </Box>
        </Container>
        
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="https://placehold.co/400x600/09252E/FFFFFF?text=Inessa"
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
                Кто я
              </Typography>
              <Typography variant="h5" color="primary" gutterBottom>
                Инесса
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                Эксперт в инвестиционной недвижимости на Кипре<br />
                Руководитель по развитию Giovani Homes
              </Typography>
              <Box sx={{ mt: 4 }}>
                {[
                  'Более 6 лет опыта в недвижимости',
                  'Сотни успешных сделок и довольных клиентов',
                  'Работаю напрямую с крупнейшим застройщиком региона',
                  'Доступ к эксклюзивным, закрытым предложениям'
                ].map((point, index) => (
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

      {/* Pain Points and Solutions Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                Типовое состояние клиента
              </Typography>
              <Box sx={{ mt: 4 }}>
                {[
                  'Сложно разобраться в рынке',
                  'Страх потерь, недоверие к посредникам',
                  'Не знаете, с чего начать',
                  'Нет времени на поездки и оформление'
                ].map((point, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{ color: 'error.main', fontSize: 24 }}>❌</Box>
                    <Typography variant="h6">{point}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                Решение от меня
              </Typography>
              <Box sx={{ mt: 4 }}>
                {[
                  'Я беру на себя весь процесс — от подбора до ключей',
                  'Только проверенные объекты и честные условия',
                  'Видеотуры, консультации, сделки удалённо',
                  'Безопасно, прозрачно, официально'
                ].map((point, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{ color: 'success.main', fontSize: 24 }}>✅</Box>
                    <Typography variant="h6">{point}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Properties Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Топ-объекты от застройщика
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" gutterBottom>
            Giovani Homes
          </Typography>
          
          {/* Desktop Grid View */}
          <Grid container spacing={4} sx={{ mt: 4, display: { xs: 'none', md: 'flex' } }}>
            {properties.map((property) => (
              <Grid item xs={12} sm={6} md={4} key={property.name}>
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
                  transform: `translateX(-${currentSlide * (100 )}%)`,
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
          </Box>

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Button variant="contained" color="primary" size="large">
              Смотреть весь каталог
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
            Получить персональный подбор
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" gutterBottom>
            Заполните и получите 3–5 актуальных объектов под ваш запрос
          </Typography>
          
          <Paper 
            elevation={3} 
            sx={{ 
              mt: 4, 
              p: { xs: 2, sm: 4 },
              borderRadius: 2
            }}
          >
            <FormControl fullWidth component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                fullWidth
                required
                name="fullName"
                label="Имя Фамилия"
                variant="outlined"
              />
              <TextField
                fullWidth
                required
                name="contact"
                label="Email / WhatsApp"
                variant="outlined"
              />
              <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                <FormControl fullWidth>
                  <InputLabel id="purpose-label">Цель</InputLabel>
                  <Select
                    labelId="purpose-label"
                    name="purpose"
                    label="Цель"
                    defaultValue=""
                  >
                    {['Инвестиции', 'Жильё', 'ВНЖ', 'Аренда'].map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="budget-label">Бюджет</InputLabel>
                  <Select
                    labelId="budget-label"
                    name="budget"
                    label="Бюджет"
                    defaultValue=""
                  >
                    {['до €300K', '€300–500K', '€500K+', 'другой'].map((option) => (
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
                label="Комментарий / детали"
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
                Получить подбор
              </Button>
            </FormControl>
          </Paper>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Контакты
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
                <Typography>Работаю напрямую с крупнейшим застройщиком юго-восточного Кипра — Giovani Homes</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Социальные сети
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
  );
};

export default LandingPage; 