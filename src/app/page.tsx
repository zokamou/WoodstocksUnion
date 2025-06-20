// import ImageCarousel from "./Components/Carousel";
import {Box, Typography} from '@mui/material';
import Image from 'next/image';

// images 

export default function Home() {
  const images = [
    "/images/IMG_5785.jpg",
    "/images/IMG_3027.jpeg",
    "/images/IMG_3028.jpeg",
    "/images/IMG_3029.jpeg",
    "/images/IMG_3030.jpeg",
    "/images/IMG_3031.jpeg"
  ];

  return (
    <div style={{ width: "100vw", height:"100vh", margin: 0 }}>
      <Box sx={{ width: "100%", height: "500px", position: "relative", overflow: "hidden" }}>
            <Image
              src={images[0]}
              alt={images[0] ?? "placeholder"}
              fill
              style={{ objectFit: "cover", marginTop:"70px"}}
            />
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }} />
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
              <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', fontFamily: 'Creato Bold', marginTop: '15px', textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
                Woodstock&apos;s Employee Alliance
              </Typography>
            </Box>
      </Box>
      
        <Box sx={{display:'flex', flexDirection:'column', marginTop:"100px"}}>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Typography sx={{fontFamily:'Creato', fontWeight:'bold', fontSize: "32px"}}>
              What is a Union?
            </Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Typography sx={{fontFamily:'Creato', fontSize: "22px", color: "darkgray"}}>
              bunch of union text 
            </Typography>
          </Box>
        </Box>
      
    </div>
  );
}


