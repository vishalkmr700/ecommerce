// import { Button } from '@headlessui/react'
// import { Grid, Typography } from '@mui/material'
// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//         <Grid className='bg-black text-white text-center mt-10' container sx={{bgcolor:"black", color:"white", py:3}}>
//             <Grid item xs={12} sm={6} md={3}>
//                 <Typography className='pb-5' varient='h6'>Company</Typography>
//                 <Button className='pb-5' varient='h6'>About</Button> 

//             </Grid>


//         </Grid>
//     </div>
//   )
// }

// export default Footer

import { Button } from '@mui/material';  // Correct import for Material-UI Button
import { Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container justifyContent="center"
                sx={{ bgcolor: "black", color: "white", py: 5 }}

            >
                <Grid item xs={12} sm={6} md={2}>
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-5' variant='text'>About</Button> {/* Use variant='text' if you want a simple button */}
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Job</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Partners</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Typography className='pb-5' variant='h6'>Customer Service</Typography>
                    <div>
                        <Button className='pb-5' variant='text'>Contact Us</Button> {/* Use variant='text' if you want a simple button */}
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>FAQs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Shipping & Returns</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Order Tracking</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Privacy Policy</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Typography className='pb-5' variant='h6'>Account</Typography>
                    <div>
                        <Button className='pb-5' variant='text'>Sign In / Register</Button> {/* Use variant='text' if you want a simple button */}
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Order History</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Wishlist</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Manage Account</Button>
                    </div>
                    
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Typography className='pb-5' variant='h6'>Shop</Typography>
                    <div>
                        <Button className='pb-5' variant='text'>New Arrivals</Button> {/* Use variant='text' if you want a simple button */}
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Best Sellers</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Sale</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Categories</Button>
                    </div>
                    
                </Grid>

                <Grid item xs={12} sm={6} md={2}>
                    <Typography className='pb-5' variant='h6'>Follow Us</Typography>
                    <div>
                        <Button className='pb-5' variant='text'>Facebook</Button> {/* Use variant='text' if you want a simple button */}
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Twitter</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Instagram</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='text'>Pinterest</Button>
                    </div>
                   
                </Grid>

                {/* Copyright */}
              <Grid className='pt-20' item xs={12}>
                <Typography varient="body2" component="p" align='center'>
                    &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.

                </Typography>

              </Grid>

                
                {/* You can add more Grid items here if needed */}
            </Grid>


        </div>
    );
}

export default Footer;
