'use client';
import { Box, Typography, Link, Container } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', py: { xs: 6, md: 10 }, px: 2 }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }}
        >
          Contact Us!
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          If you have any questions or want to get involved, feel free to reach out:
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
            Email:{' '}
            <Link href="mailto:woodstocks.union@gmail.com" underline="hover">
              woodstocks.union@gmail.com
            </Link>
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
            Instagram:{' '}
            <Link
              href="https://instagram.com/waesc"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              @waesc
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
