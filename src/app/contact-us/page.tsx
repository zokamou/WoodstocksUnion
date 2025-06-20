// import ImageCarousel from "./Components/Carousel";
import {Box, Typography, Link} from '@mui/material';

export default function Home() {


  return (
    <div style={{ width: "100vw", height:"100vh", margin: 0 }}>
        <Box sx={{display:'flex', flexDirection:'column', marginTop:"80px", justifyContent:'center', alignItems:'center'}}>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Typography sx={{fontWeight:'bold', fontSize: "32px"}}>
              Contact Us!
            </Typography>
          </Box>
          <Box sx={{marginTop: '-40px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '800px', height: '200px', flexDirection:'column'}}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              If you have any questions or want to get involved, feel free to reach out:
            </Typography>

            <Box sx={{ mb: 1 }}>
              <Typography variant="body1">
                Email:{' '}
                <Link href="mailto:woodstocks.union@gmail.com" underline="hover">
                  woodstocks.union@gmail.com
                </Link>
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1">
                Instagram:{' '}
                <Link href="https://instagram.com/waesc" target="_blank" rel="noopener" underline="hover">
                  @waesc
                </Link>
              </Typography>
            </Box>
        </Box>
      </Box>
      
    </div>
  );
}
