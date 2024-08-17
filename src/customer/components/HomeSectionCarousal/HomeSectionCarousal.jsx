import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

// import { Button } from '@headlessui/react';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';




const HomeSectionCarousal = ({data,sectionName}) => {

    const [activeIndex, setActiveIndex] = useState(0);



    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const slideNext = () => {
    if (activeIndex < items.length - responsive[1024].items) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

    return (
        <div className=" ">
            <h2 className="text-2xl font-extrabold text-grey-800" py-5>{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                {/* {activeIndex !== items.length-5 && <Button onClick={slideNext} variant="contained" className="z-50 bg-white" sx={{
                    position: "absolute", top: "8rem", right: "0rem",
                    transform: "translateX(50%) rotate(90deg)", bgcolor: "white"
                }} aria-label="next">

                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />

                </Button>}
                

              {activeIndex !== 0 &&   <Button onClick={slidePrev} variant="contained" className="z-50 bg-white" sx={{
                    position: "absolute", top: "8rem", left: "0rem",
                    transform: "translateX(-50%) rotate(90deg)", bgcolor: "white"
                }} aria-label="next">

                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />

                </Button>} */}

                {activeIndex !== items.length - 5 && <Button onClick={slideNext} variant="contained" className="z-50 bg-white" sx={{ position: 'absolute', top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: "white" }} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>}

                {activeIndex !== 0 && <Button onClick={slidePrev} variant="contained" className="z-50 bg-white" sx={{ position: 'absolute', top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(90deg)", bgcolor: "white" }} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
                </Button>}






            </div>

        </div>
    )
}

export default HomeSectionCarousal;

