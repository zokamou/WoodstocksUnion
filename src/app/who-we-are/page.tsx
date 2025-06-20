'use client';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', overflowX: 'hidden', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        {/* Logo */}
        <Box
          sx={{
            width: { xs: 120, sm: 150 },
            height: { xs: 80, sm: 100 },
            mx: 'auto',
            position: 'relative',
            mb: { xs: 4, sm: 6 },
          }}
        >
          <Image src="/images/woodstock.webp" alt="Woodstock logo" fill style={{ objectFit: 'contain' }} />
        </Box>

        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' }, mb: { xs: 3, md: 4 } }}
        >
          Who is the Woodstock&apos;s Employee Alliance?
        </Typography>

        {/* Paragraph */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            lineHeight: 1.7,
            maxWidth: '80vw',
            mx: 'auto',
          }}
        >
          We are the Woodstocks Employee Alliance (WEA), an independent restaurant union made up of the
          Woodstocks workers in Santa Cruz. We are unionizing to gain competitive wages and worker
          protections at our restaurant. We love working at Woodstocks and by unionizing, we can fight to
          maintain a safe and fair work environment. <br /><br />
          Please support us in urging management to recognize our union and stand with Woodstocks workers
          in our unionization efforts.
        </Typography>
      </Container>
    </Box>
  );
}
