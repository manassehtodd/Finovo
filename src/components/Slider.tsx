import React, { useState } from 'react';
import './../../src/index.css';

interface SliderProps {
    children: React.ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
    };

    const goToNext = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
    };

    return (
    <div className="slider-container">
        <button className="slider-btn slider-btn-prev" onClick={goToPrevious}>
        &#10094;
        </button>

        <div className="slider-wrapper">
        {children.map((child, index) => (
            <div
            key={index}
            className={`slider-item ${index === currentIndex ? 'active' : ''}`}
            >
            {child}
            </div>
        ))}
        </div>

        <button className="slider-btn slider-btn-next" onClick={goToNext}>
        &#10095;
        </button>
    </div>
    );
};

export default Slider;
