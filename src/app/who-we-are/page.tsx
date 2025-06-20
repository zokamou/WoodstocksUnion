import {Box, Typography} from '@mui/material';
import Image from 'next/image';
export default function WhoWeAre() {
  return (
    <div style={{ width: "100vw", height:"100vh", margin: 0 }}>
      <div style={{marginTop:"50px"}}>
        <Box sx={{display:'flex', flexDirection:'column', marginTop:"10px", justifyContent:'center', alignItems:'center'}}>
          <Box sx={{ width: "150px", height: "100px", position: "relative", overflow: "hidden" }}>
            <Image
              src={"/images/woodstock.webp"}
              alt={"placeholder"}
              fill
            />
          </Box>
          <Box sx={{display:'flex', justifyContent:'center', marginTop:'40px'}}>
            <Typography sx={{fontWeight:'bold', fontSize: "32px"}}>
              Who is the Woodstock&apos;s Employee Alliance?
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70%', height: '200px',}}>
            <Typography sx={{fontSize: "20px", color: "#525252", textAlign:'center'}}>
            We are Woodstocks Employee Alliance (WEA), an independent restaurant union made up of the Woodstocks workers in Santa Cruz. We are unionizing to gain competitive wages and worker protections at our restaurant. We love working at Woodstocks and by unionizing, us workers can fight to maintain a safe and fair work environment.
            Please support us in urging management to recognize our union and stand with Woodstocks workers in our unionization efforts. 
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
}
