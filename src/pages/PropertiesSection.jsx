import React, { useState } from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

// Property Images
import apanemaImg from '../assets/properties/apa_1.webp';
import premiereImg from '../assets/properties/pre_1.webp';
import angelicoImg from '../assets/properties/ang_1.webp';
import blueViewImg from '../assets/properties/blu_1.webp';
import sabaiImg from '../assets/properties/sab_1.webp';
import almaImg from '../assets/properties/alm_1.webp';
import semeliImg from '../assets/properties/sem_1.webp';
import euphoriaImg from '../assets/properties/eup_1.webp';

const PropertiesSection = ({ t }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const properties = [
  //   {
  //     name: 'Apanema Villas',
  //     location: 'Kapparis / Protaras',
  //     price: 'от €474 000 + VAT',
  //     details: '3–4 спальни',
  //   },
  //   {
  //     name: 'Premiere Pearl B',
  //     location: 'Pernera / Protaras',
  //     price: 'от €595 000',
  //     details: '3 спальни',
  //   },
  //   {
  //     name: 'Angelico Apartments',
  //     location: 'Kapparis / Protaras',
  //     price: 'от €153 000 + VAT',
  //     details: 'ROI 6–8%',
  //   },
  //   {
  //     name: 'Blue View Lifestyle',
  //     location: 'Kapparis / Protaras',
  //     price: 'от €255 000 + VAT',
  //     details: '2–3 спальни',
  //   },
  //   {
  //     name: 'Sabai Beachfront',
  //     location: 'у пляжа',
  //     price: 'от €300 000+',
  //     details: '2–3 спальни',
  //   },
  //   {
  //     name: 'Alma Villas',
  //     location: '350 м до пляжа',
  //     price: 'от €399 000 + VAT',
  //     details: 'сдача 2025',
  //   }
  // ];

  // Combine locales text with imported images
  const propertyImages = [apanemaImg, premiereImg, angelicoImg, blueViewImg, sabaiImg, almaImg, semeliImg, euphoriaImg];
  const properties = t.properties.list.map((prop, index) => ({
    ...prop,
    image: propertyImages[index]
  }));
  
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide(prev => (prev < properties.length - 1 ? prev + 1 : 0)),
    onSwipedRight: () => setCurrentSlide(prev => (prev > 0 ? prev - 1 : properties.length - 1)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false
  });

  return (
    <Box sx={{ backgroundColor: '#fff', zIndex: 1, py: 8, px: { xs: 2, md: 6 } }}>
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
                  sx={{ height: 240, objectFit: 'cover' }}
                  image={property.image}
                  alt={property.name}
                  width={400}
                  height={240}
                  loading="lazy"
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
      <Box sx={{ position: 'relative', mt: 4, display: { xs: 'block', md: 'none' }, px: 1 }}>
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
                  mx: { xs: 1, sm: 2 }
                }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    sx={{ height: 300, objectFit: 'cover', width: 400 }}
                    image={property.image}
                    alt={property.name}
                    loading="lazy"
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
    </Box>
  );
};

export default PropertiesSection; 