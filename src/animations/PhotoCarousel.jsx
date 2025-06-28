import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SlideOne from '../assets/slider1.jpeg';
import SlideTwo from '../assets/slider2.jpeg';
import SlideThree from '../assets/slider3.jpeg';
import SlideFour from '../assets/slider4.jpeg';
import SlideSix from '../assets/whatwedo4.jpeg'
import SlideSeven from '../assets/slider7.jpeg';
import SlideEight from '../assets/slider8.jpeg';
import SlideNine from '../assets/slider9.jpeg';
import SlideTen from '../assets/slider10.jpeg';
import SlideFive from '../assets/whatwedo5.jpeg';
import SlideEleven from '../assets/slider11.jpeg';
import SlideTwelve from '../assets/slider12.jpeg';
import SlideThirteen from '../assets/HomeSlide2.jpeg';
import SlideFourteen from '../assets/slider14.jpeg';
import SlideFifteen from '../assets/slider15.jpeg';
import AnimatedContent from './AnimatedContent';
const PhotoCarousel = () => {
    // Sample photos - replace with your own images
    const photos = [
        {
            id: 1,
            src: SlideOne,
            alt: 'Mountain landscape',
            caption: 'Beautiful mountain vista'
        },
        {
            id: 2,
            src: SlideTwo,
            alt: 'Ocean sunset',
            caption: 'Golden hour at the beach'
        },
        {
            id: 3,
            src: SlideThree,
            alt: 'Forest path',
            caption: 'Peaceful forest trail'
        },
        {
            id: 4,
            src: SlideFour,
            alt: 'City skyline',
            caption: 'Urban cityscape at night'
        },
        {
            id: 5,
            src: SlideFive,
            alt: 'Desert landscape',
            caption: 'Vast desert dunes'
        },
         {
            id: 6,
            src: SlideSix,
            alt: 'Desert landscape',
            caption: 'Vast desert dunes'
        },
         {
            id: 7,
            src: SlideSeven,
            alt: 'Desert landscape',
            caption: 'Vast desert dunes'
        },
         {
            id: 8,
            src: SlideEight,
            alt: 'Desert landscape',
            caption: 'Vast desert dunes'
        },
         {
            id: 9,
            src: SlideNine,
            alt: 'Desert landscape',
            caption: 'Vast desert dunes'
        },
         {
            id: 10,
            src: SlideTen,
            alt: 'Desert landscape',
            caption: 'Vast desert dunes'
        },
        {
            id: 11,
            src: SlideEleven,
            alt: 'Desert landscape',
            caption: 'Vast desert dunes'
        },
        {
            id: 12,
            src: SlideTwelve,
            alt: 'Desert landscape',
            caption: 'Vast desert dunes'
        },
        {
            id: 13,
            src: SlideThirteen,
            alt: 'Desert landscape',
            caption: 'Vast desert dunes'
        },
        {
            id: 14,
            src: SlideFourteen,
            alt: 'Desert landscape',
            caption: 'Vast desert dunes'
        },
        {
            id: 15,
            src: SlideFifteen,
            alt: 'Desert landscape',
            caption: 'Vast desert dunes'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === photos.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [photos.length]);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === photos.length - 1 ? 0 : currentIndex + 1);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const handleMouseEnter = () => { };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="text-center mb-12">
                <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={true}
                    duration={1.2}
                    ease="power1.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={0.3}
                >
                    <h2 className="text-4xl font-bold text-green-700 mb-4">Our Success Stories</h2>
                </AnimatedContent>
                <p className="text-xl text-gray-600">
                    Every step forward is a story of change!
                </p>
            </div>
            <div
                className="relative w-full h-96 md:h-[500px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
                onMouseEnter={handleMouseEnter}
            >
                {/* Main Image Display */}
                <div className="relative w-full h-full">

                    <img
                        src={photos[currentIndex].src}
                        alt={photos[currentIndex].alt}
                        className="w-full h-full object-cover transition-opacity duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Previous image"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                    aria-label="Next image"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
                {photos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                                ? 'bg-blue-500 scale-125'
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>


        </div>
    );
};

export default PhotoCarousel;