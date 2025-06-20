'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AppBar, Tabs, Tab, Box, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';

const routes = ['/', '/who-we-are', '/contact-us', '/faqs'];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width:600px)');

  // Set tab based on current path
  const currentTabIndex = routes.findIndex((path) => pathname === path);
  const [value, setValue] = useState(currentTabIndex === -1 ? 0 : currentTabIndex);

  useEffect(() => {
    setValue(currentTabIndex === -1 ? 0 : currentTabIndex);
  }, [pathname, currentTabIndex]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    router.push(routes[newValue]);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
        borderBottom: '1px solid #b8b8b8',
        py: 1,
        paddingTop:"20px",
        paddingBottom: "20px"
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: { xs: 1, sm: 0 },
        }}
      >
        {/* Logo and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 1, sm: 0 } }}>
          <Image src="/images/pizza.jpeg" alt="Logo" width={40} height={40} />
          <Typography
            sx={{
              color: 'black',
              ml: 2,
              fontSize: { xs: '20px', sm: '24px', md: '28px' },
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
          >
            Woodstock&apos;s Employee Alliance
          </Typography>
        </Box>

        {/* Tabs */}
        <Box sx={{ width: '100%', maxWidth: '600px' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant={isMobile ? 'scrollable' : 'standard'}
            scrollButtons={isMobile ? 'auto' : false}
            textColor="inherit"
            indicatorColor="primary"
            sx={{
              '& .MuiTabs-flexContainer': {
                justifyContent: isMobile ? 'start' : 'flex-end',
              },
              '& .MuiTabs-indicator': {
                    display: 'none', 
                  },
            }}
          >
            {['Home', 'Who We Are', 'Contact Us', 'FAQs'].map((label) => (
              <Tab
                key={label}
                label={label}
                sx={{
                  textTransform: 'none',
                  fontSize: { xs: '14px', sm: '16px', md: '18px' },
                  color: 'black',
                  '&.Mui-selected': {
                    color: '#f44336',
                    fontWeight: 'bold',
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
