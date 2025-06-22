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
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import bgWater from '../assets/water_copy1.webp';
import bgSand from '../assets/sand.webp';

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
    <Box sx={{  }}>
      <Parallax pages={8} style={{ top: 0, left: 0 }}>
        {/* ===== Navbar Section ===== */}
        <ParallaxLayer offset={0} speed={0.1} style={{ zIndex: 20, pointerEvents: 'auto' }}>
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
          </Box>
        </ParallaxLayer>

        

        {/* ===== Hero Section ===== */}
        <ParallaxLayer offset={0} speed={1.2} factor={2.5} style={{
          backgroundImage: `url(${bgWater})`,
          backgroundSize: 'cover', backgroundPosition: 'center', alignItems: 'center', zIndex: 5 }}>
          <Container maxWidth="lg" sx={{ zIndex: 2, px: { xs: 2, md: 6 } }}>
            <Box sx={{ maxWidth: 600, color: 'white', textAlign: 'left', py: { xs: 8, md: 5 } }}>
              <Typography variant="overline" sx={{ mb: 2, opacity: 0.85, fontWeight: 600, fontSize: 15, letterSpacing: 1.2, textTransform: 'none' }}>
                На основе 100+ собственных сделок
              </Typography>
              <Typography variant="h1" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2.1rem', md: '2.8rem' }, lineHeight: 1.1, color: 'white', letterSpacing: -1 }}>
                  Эксклюзивная недвижимость на Кипре — под ваш запрос и с полным сопровождением
              </Typography>
              <Typography variant="h5" sx={{ mb: 3, opacity: 0.92, fontWeight: 400, fontSize: { xs: 18, md: 22 }, color: 'white', lineHeight: 1.3 }}>
                  Виллы, апартаменты и инвестиционные проекты в Протарасе и Айя-Напе. Без переплат и потерь времени. Все этапы беру на себя.
              </Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column' }, gap: 2 }}>
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
          <Container maxWidth="lg" sx={{py: 8}}>
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
                <Typography variant="h2" gutterBottom sx={{color: 'white'}}>
                  Кто я
              </Typography>
                <Typography variant="h5" color="primary" gutterBottom sx={{color: 'white'}}>
                  Инесса
              </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{color: 'white'}}>
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
                      <Typography variant="body1" sx={{color: 'white'}}>{point}</Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </ParallaxLayer>

        

        {/* ===== underlayer Section ===== */}
        <ParallaxLayer offset={0} speed={1} factor={2.5} style={{
          backgroundImage: `url(${bgWater})`,
          backgroundSize: 'cover', backgroundPosition: 'center', alignItems: 'center', zIndex: 2 }}>
        </ParallaxLayer>

        {/* ===== Pain Points and Solutions Section ===== */}
        <ParallaxLayer offset={1} speed={0} factor={1} style={{
          backgroundImage: `url(${bgSand})`,
          backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center', zIndex: 1 }}>
          <Container maxWidth="lg" sx={{py: 8}}>
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
        </ParallaxLayer>

        {/* ===== How I Work Section ===== */}
        <ParallaxLayer offset={2} speed={0} style={{
          backgroundColor: '#fff',
          minHeight: '100vh', display: 'flex', alignItems: 'center', zIndex: 1 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
              Как я работаю
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" gutterBottom>
              Просто. Прозрачно. Честно.
          </Typography>
            
          <Grid container spacing={4} sx={{ mt: 4 }}>
              {[
                {
                  title: 'Первая консультация',
                  description: 'Вы рассказываете о бюджете, целях (жильё, инвестиции, ВНЖ)'
                },
                {
                  title: 'Подбор решений',
                  description: 'Высылаю 3–5 конкретных вариантов, соответствующих вам — с ROI, анализом и локацией'
                },
                {
                  title: 'Видео‑тур / документы / консультация',
                  description: 'Без перелетов — всё онлайн'
                },
                {
                  title: 'Сделка под ключ',
                  description: 'Официальный договор, юр. проверка, помощь с переводами и регистрацией'
                },
                {
                  title: 'Пост-сервис',
                  description: 'Меблировка, сдача в аренду, получение ВНЖ / налоговые консультации'
                }
              ].map((step, index) => (
                <Grid item xs={12} key={index}>
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
                </Grid>
              ))}
            </Grid>
          </Container>
        </ParallaxLayer>

        {/* ===== What You Get Section ===== */}
        <ParallaxLayer offset={3} speed={0} factor={0.5} style={{
          backgroundColor: '#006064', zIndex: 1 }}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom sx={{ color: 'white' }}>
              Что вы получаете
            </Typography>
            
            <Grid container spacing={3} sx={{ mt: 4 }}>
              {[
                { icon: '💡', text: 'Индивидуальный подход — а не поток клиентов' },
                { icon: '🧭', text: 'Честность — говорю как есть, без давления' },
                { icon: '🏗', text: 'Доступ к первичке от застройщика — лучшие цены' },
                { icon: '🧾', text: 'Прозрачность — каждый шаг понятен' },
                { icon: '📈', text: 'Инвест‑подход — считаем ROI, выбираем под цели' },
                { icon: '🏖', text: 'Локация и стиль жизни — только топ-локации' }
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 2,
                      bgcolor: 'rgba(255,255,255,0.1)',
                      borderRadius: '50px',
                      py: 2,
                      px: 3,
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <Typography variant="h5" sx={{ lineHeight: 1 }}>
                      {item.icon}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'white', fontWeight: 500 }}>
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </ParallaxLayer>

        {/* ===== Properties Section ===== */}
        <ParallaxLayer offset={3.5} speed={0} factor={1.5} style={{
          backgroundColor: '#fff', zIndex: 1 }}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom>
              Топ-объекты от застройщика
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" gutterBottom>
              Giovani Homes
            </Typography>
            
            {/* Desktop Grid View */}
            <Grid container spacing={4} sx={{ mt: 4, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {[
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
                },
                {
                  name: 'Semeli B Villas',
                  location: 'Пернера',
                  price: 'от €460 000 + VAT',
                  details: '3 спальни',
                  image: 'https://placehold.co/600x400/09252E/FFFFFF?text=Semeli'
                },
                {
                  name: 'Euphoria Apartments',
                  location: 'Paralimni',
                  price: 'от €135 000 + VAT',
                  details: '1–2 спальни',
                  image: 'https://placehold.co/600x400/09252E/FFFFFF?text=Euphoria'
                }
              ].slice(0, 6).map((property) => (
                <Grid item xs={12} md={4} key={property.name}>
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
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ 
                  color: 'white',
                  bgcolor: '#00BCD4',
                  py: 3,
                  px: 4,
                  borderRadius: 2,
                  fontWeight: 500,
                  maxWidth: 800,
                  mx: 'auto'
                }}
              >
                Смотреть весь каталог и получить подбор под ваш бюджет — ниже
                    </Typography>
                  </Box>
          </Container>
        </ParallaxLayer>

        {/* ===== CTA Section ===== */}
        <ParallaxLayer offset={5} speed={0} factor={0.3}  style={{
          backgroundColor: '#00BCD4', zIndex: 1 }}>
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
                Получите персональный подбор недвижимости
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
                Заполните форму ниже и получите 3–5 актуальных объектов под ваш запрос
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
              >
                Получить подбор
              </Button>
            </Container>
                </Box>
        </ParallaxLayer>

        {/* ===== Testimonials Section ===== */}
        <ParallaxLayer offset={5.4} speed={0} factor={0.6} style={{
          backgroundColor: '#f5f7fa', zIndex: 1 }}>
          <Container maxWidth="lg">
            <Typography variant="h2" align="center" gutterBottom>
              Отзывы клиентов
            </Typography>
            
            <Grid container spacing={4} sx={{ mt: 4 }}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 4, height: '100%' }}>
                  <Typography variant="body1" gutterBottom>
                    «Работали с Инессой дистанционно — всё прозрачно, документы чистые, купили апартаменты под аренду с доходом ~7% годовых!»
                  </Typography>
                  <Typography variant="subtitle1" color="primary" sx={{ mt: 2 }}>
                    Иван, Греция
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 4, height: '100%' }}>
                  <Typography variant="body1" gutterBottom>
                    «Инесса помогла нам на всех этапах — от выбора до оформления ВНЖ. Очень довольны!»
                  </Typography>
                  <Typography variant="subtitle1" color="primary" sx={{ mt: 2 }}>
                    Дима и Тамар, Израиль
                  </Typography>
                </Paper>
              </Grid>
          </Grid>
        </Container>
        </ParallaxLayer>

        {/* ===== Contact Form Section ===== */}
        <ParallaxLayer offset={6} speed={0} style={{
          backgroundColor: '#fff', zIndex: 1 }}>
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
        </ParallaxLayer>

        {/* ===== Footer ===== */}
        <ParallaxLayer offset={7} speed={0} factor={0.3} style={{zIndex: 1 }}>
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
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
};

export default LandingPage; 