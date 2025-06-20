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
              style={{ objectFit: "cover", marginTop:"80px"}}
            />
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }} />
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
              <Typography variant="h3" sx={{marginTop: "100px", color: 'white', fontWeight: 'bold', justifyContent:'center', textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
                Woodstock&apos;s Employee Alliance
              </Typography>
            </Box>
      </Box>
      
        <Box sx={{display:'flex', flexDirection:'column', marginTop:"80px", justifyContent:'center', alignItems:'center'}}>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Typography sx={{fontWeight:'bold', fontSize: "32px"}}>
              What is a Union?
            </Typography>
          </Box>
          <Box sx={{marginTop: '-40px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '800px', height: '200px',}}>
            <Typography sx={{fontSize: "22px", color: "darkgray", textAlign:'center'}}>
            A union is an organization formed by workers to represent their collective interests in negotiations with employers, primarily around issues like wages, benefits, working conditions, and job security.
            </Typography>
          </Box>
        </Box>
      
    </div>
  );
}


