import React, { useRef } from "react";
import "./ImageGallery.css";
import image1_icon from "../assets/image-1.png"
import image2_icon from "../assets/image-2.png"
import image3_icon from "../assets/image-3.png"
import image4_icon from "../assets/image-4.png"
import image5_icon from "../assets/image-5.png"
import image6_icon from "../assets/image-6.png"

function ImageGallery() {
    const scrollContainer = useRef(null);

    const handleNext = () => {
        scrollContainer.current.style.scrollBehavior = "smooth";
        scrollContainer.current.scrollLeft += 900;
    };

    const handleBack = () => {
        scrollContainer.current.style.scrollBehavior = "smooth";
        scrollContainer.current.scrollLeft -= 900;
    };

    return (
        <div style={{ margin: "10% auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="./back.png" alt="Back" onClick={handleBack} style={{ width: "50px", cursor: "pointer", margin: "50px" }} />
            <div className="gallery" ref={scrollContainer}>
                <div>
                    <img src={image1_icon} alt="Image 1" />
                    <img src={image2_icon} alt="Image 2" />
                    <img src={image3_icon} alt="Image 3" />
                </div>
                <div>
                    <img src={image4_icon} alt="Image 4" />
                    <img src={image5_icon} alt="Image 5" />
                    <img src={image6_icon} alt="Image 6" />
                </div>
            </div>
            <img src="./next.png" alt="Next" onClick={handleNext} style={{ width: "50px", cursor: "pointer", margin: "50px" }} />
        </div>
    );
}

export default ImageGallery;
