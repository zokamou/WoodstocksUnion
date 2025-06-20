'use client';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  const images = [
    "/images/IMG_5785.jpg",
    "/images/IMG_3027.jpeg",
    "/images/IMG_3028.jpeg",
    "/images/IMG_3029.jpeg",
    "/images/IMG_3030.jpeg",
    "/images/IMG_3031.jpeg",
  ];

  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', overflowX: 'hidden' }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '300px', sm: '400px', md: '500px' },
        }}
      >
        <Image
          src={images[0]}
          alt="Hero"
          fill
          style={{ objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
              textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
            }}
          >
            Stand with the WEA!
          </Typography>
        </Box>
      </Box>

      {/* Union Section */}
      <Container maxWidth="md" sx={{ py: { xs: 6, sm: 8, md: 10 }, px: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: { xs: 2, md: 3 }, fontSize: { xs: '1.8rem', md: '2.2rem' } }}
        >
          What is a Union?
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          A union is an organization formed by workers to represent their collective interests in negotiations with employers, primarily around issues like wages, benefits, working conditions, and job security.
        </Typography>
      </Container>
    </Box>
  );
}
