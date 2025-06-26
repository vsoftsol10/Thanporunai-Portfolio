import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Droplets, Users, GraduationCap, Heart, TreePine, Home } from 'lucide-react';
import Logo from '../assets/thanporunai-logo.png';
import HomeSlideOne from '../assets/HomSlide1.jpeg';
import HomeSlideTwo from '../assets/HomeSlide2.jpeg';
import HomeSlideThree from '../assets/HomeSlide3.jpeg';
import HomeSlideFour from '../assets/HomeSlide4.jpeg';
import SlideOne from '../assets/slider1.jpeg';
import SlideTwo from '../assets/slider2.jpeg';
import SlideThree from '../assets/slider3.jpeg';
import SlideFour from '../assets/slider4.jpeg';
const PorunaiPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroImageSlide, setHeroImageSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Hero section images
  const heroImages = [
    {
      id: 1,
      src: HomeSlideOne,
      alt: "River Cleaning Initiative",
      caption: "River Conservation"
    },
    {
      id: 2,
      src: HomeSlideTwo,
      alt: "Tree Plantation Drive",
      caption: "Environmental Protection"
    },
    {
      id: 3,
      src: HomeSlideThree,
      alt: "Cleaning plastic waste",
      caption: "Cleaning plastic waste"
    },
    {
      id: 4,
      src: HomeSlideFour,
      alt: "Women Empowerment",
      caption: "Community Development"
    }
  ];

  const galleryImages = [
    {
      id: 1,
      src: SlideOne,
      title: "Community Outreach",
      description: "Supporting local communities through various initiatives"
    },
    {
      id: 2,
      src: SlideTwo,
      title: "Educational Programs",
      description: "Empowering minds through quality education"
    },
    {
      id: 3,
      src: SlideThree,
      title: "Environmental Care",
      description: "Protecting our planet for future generations"
    },
    {
      id: 4,
      src: SlideFour,
      title: "Healthcare Support",
      description: "Providing essential healthcare services"
    },
    {
      id: 5,
      src: HomeSlideFour,
      title: "Youth Development",
      description: "Nurturing the leaders of tomorrow"
    },
    {
      id: 6,
      src: HomeSlideThree,
      title: "Digital Innovation",
      description: "Embracing technology for better solutions"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };
  // Sample service data with Tamil cultural context
  const services = [
    {
      id: 1,
      title: "River Cleaning Initiative",
      description: "தண்ணீர் சுத்தம் - Dedicated efforts to clean and preserve our local rivers and water bodies for future generations.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      category: "Environment",
      impact: "500+ volunteers, 50km river cleaned",
      icon: <Droplets className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Women Welfare Drive",
      description: "மகளிர் நலன் - Empowering women through skill development, health awareness, and economic independence programs.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      category: "Women Empowerment",
      impact: "200+ women benefited",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Education Support",
      description: "கல்வி உதவி - Providing educational resources and support to underprivileged children in rural communities.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
      category: "Education",
      impact: "150+ children supported",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Healthcare Outreach",
      description: "உடல்நலம் - Free medical camps and health awareness programs for rural and urban communities.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      category: "Healthcare",
      impact: "1000+ people reached",
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Food Distribution",
      description: "அன்னதானம் - Regular food distribution drives for those in need, especially during crisis situations.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      category: "Community Service",
      impact: "5000+ meals distributed",
      icon: <Home className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Tree Plantation",
      description: "மரம் நடுதல் - Large-scale tree plantation drives to combat climate change and improve air quality.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      category: "Environment",
      impact: "10,000+ trees planted",
      icon: <TreePine className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Service" },
    { number: "50+", label: "Projects Completed" },
    { number: "10,000+", label: "Lives Impacted" },
    { number: "500+", label: "Active Volunteers" }
  ];

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Who We Are', href: '#about' },
    { name: 'What We Do', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  // Auto-slide functionality for hero images
  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroImageSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(heroTimer);
  }, [heroImages.length]);

  // Auto-slide functionality for services
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 2));
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(services.length / 2) - 1 : prev - 1
    );
  };

  const nextHeroSlide = () => {
    setHeroImageSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevHeroSlide = () => {
    setHeroImageSlide((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  const getVisibleServices = () => {
    const itemsPerSlide = window.innerWidth < 768 ? 1 : 2;
    const startIndex = currentSlide * itemsPerSlide;
    return services.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-38"> {/* Increased from h-20 to h-28 */}
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-40 h-40 flex items-center justify-center"> {/* Match height to navbar */}
                <img
                  src={Logo}
                  alt="தன்பொருணை அமைப்பு Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-green-700 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-800 hover:bg-yellow-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-yellow-400 border-t border-yellow-500">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-800 hover:bg-yellow-300 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>


      {/* Hero Section */}
      <section id="home" className="pt-36 min-h-screen bg-gradient-to-br from-green-600 via-green-700 to-teal-600 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">

              <div className="mb-6">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  சுற்றுச்சூழல் விழிப்புணர்வு மற்றும் போதை இல்லா பாதை
                </h2>
                <p className="text-lg text-green-100">
                  Environmental Awareness and Drug-Free Path
                </p>
              </div>
              <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
                Dedicated to social service through river cleaning, women welfare,
                education support, and community development initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                  Join Our Mission
                </button>
              </div>
            </div>

            {/* Hero Image Slideshow */}
            <div className="relative">
              <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={heroImages[heroImageSlide].src}
                  alt={heroImages[heroImageSlide].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{heroImages[heroImageSlide].caption}</h3>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevHeroSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextHeroSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setHeroImageSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${heroImageSlide === index ? 'bg-amber-400' : 'bg-white/50'
                      }`}
                  />
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/95 p-6 rounded-xl shadow-lg text-center">
                    <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-700 mb-4">Who We Are</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <span style={{ fontWeight: 'bold' }}>Thanporunai Arakattalai</span> is a passionate social welfare organization committed to creating a cleaner, safer, and more conscious society. Rooted in the values of service and sustainability, our foundation brings together individuals and volunteers who care deeply about the environment and the well-being of future generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Clean Environment Initiatives</h3>
              <p className="text-gray-600">
                We organize community clean-up drives to remove plastic waste and restore the beauty of
                riversides and public spaces. Our mission is to reduce pollution and protect local ecosystems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Green Earth Movement</h3>
              <p className="text-gray-600">
                Through regular tree planting campaigns, we promote environmental awareness and improve air quality.
                Each tree is a step toward a healthier, greener future..
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Social Awareness & Upliftment</h3>
              <p className="text-gray-600">
                We support children and youth through education, anti-drug awareness campaigns, and community outreach - nurturing
                safer, stronger, and more conscious societies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-700 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">
              Making a difference through diverse social service initiatives
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {getVisibleServices().map((service) => (
                <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {service.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <p className="text-green-600 font-semibold mb-4">Impact: {service.impact}</p>
                  </div>
                </div>
              ))}
            </div>


            {/* Carousel Controls */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={prevSlide}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(galleryImages.length / 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentSlide === index ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Image Slider */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-700 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Visual glimpse of our community service initiatives
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={galleryImages[currentSlide].src}
                alt={galleryImages[currentSlide].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{galleryImages[currentSlide].title}</h3>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide(currentSlide === 0 ? galleryImages.length - 1 : currentSlide - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentSlide((currentSlide + 1) % galleryImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-200 ${currentSlide === index
                    ? 'w-12 h-3 bg-green-600 rounded-full'
                    : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-green-600 via-green-700 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Centered Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get Involved</h2>
          </div>

          {/* Logo and Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Logo */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={Logo} // replace with your logo import
                alt="Thanporunai Logo"
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Right: Contact Info */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-green-100 mb-6 text-lg">
                Be part of the change you want to see in the world.
                Join us in our mission to create a better tomorrow through social service.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>contact@porunai.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span>Tirunelveli, Tamil Nadu</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="text-amber-400 hover:text-amber-300 transition-colors duration-200">
                  <Facebook className="w-6 h-6" />
                </button>
                <button className="text-amber-400 hover:text-amber-300 transition-colors duration-200">
                  <Instagram className="w-6 h-6" />
                </button>
                <button className="text-amber-400 hover:text-amber-300 transition-colors duration-200">
                  <Twitter className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green-200">
            © 2025 Porunai Social Service Organization. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PorunaiPortfolio;