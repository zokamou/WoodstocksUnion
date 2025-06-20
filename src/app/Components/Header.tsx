"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { AppBar, Tabs, Tab, Box, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'; 
// import { Inter } from "next/font/google";



// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

const Header = () => {
  const [value, setValue] = useState(0);
  const router = useRouter(); 



  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (newValue === 0) {
      router.push('/'); 
    } else if (newValue === 1) {
      router.push('/who-we-are');
    } else if (newValue === 2) {
      router.push('/contact-us');
    } else if (newValue === 3) {
      router.push('/faqs');
    }
  };

  return (
    <AppBar sx={{
      height: "100px",
      boxShadow: 'none',
      backgroundColor: 'white',
      padding: 0, 
      paddingTop: 1,
    }}>
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px', 
        '& .MuiTabs-indicator': {
        backgroundColor: 'transparent', 
      },
        
      }}>
        {/* pizza logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection:"row"}}>
        <Image src="/images/pizza.jpeg" alt="Logo" width={40} height={40} />
          <Typography sx={{color:"black", marginLeft: "26px", fontSize:"28px"}}>
            Woodstock&apos;s Employee Alliance
          </Typography>
        </Box>

        {/* tabs */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'right' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              '& .MuiTabs-flexContainer': {
                transition: 'none',
              },
            }}
          >
            <Tab
              label="Home"
              sx={{
                textTransform: 'none',
                fontSize: '18px',
                color: 'black',
                '&.Mui-selected': {
                  color: '#f44336',
                  fontWeight:"bold"
                },
                '&.Mui-focusVisible': {
                  backgroundColor: 'transparent',
                },
              }}
            />
            <Tab
              label="Who We Are"
              sx={{
                textTransform: 'none',
                fontSize: '18px',
                color: 'black',
                '&.Mui-selected': {
                  color: '#f44336',
                  fontWeight:"bold"
                },
                '&.Mui-focusVisible': {
                  backgroundColor: 'transparent',
                },

              }}
            />

            <Tab
              label="Contact Us"
              sx={{
                textTransform: 'none',
                fontSize: '18px',
                color: 'black',
                '&.Mui-selected': {
                  color: '#f44336',
                  fontWeight:"bold"
                },
                '&.Mui-focusVisible': {
                  backgroundColor: 'transparent',
                },
              }}
            />
            <Tab
              label="FAQs"
              sx={{
                textTransform: 'none',
                fontSize: '18px',
                color: 'black',
                '&.Mui-selected': {
                  color: '#f44336',
                  fontWeight:"bold"
                },
                '&.Mui-focusVisible': {
                  backgroundColor: 'transparent',
                },
              }}
            />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
