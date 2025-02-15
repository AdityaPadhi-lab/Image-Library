import React from 'react';
import { motion } from 'framer-motion';
import logo from './assets/21146.jpg';


// Dynamically import all .jpg images from the 'images' folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('./assets/images', false, /\.jpg$/));

// Animation variants for images
const imageVariants = {
    hover: { scale: 1.1, boxShadow: '0px 4px 10px rgba(0,0,0,0.2)' },
    tap: { scale: 0.9 },
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const App = () => {
    return (
        <div>
            {/* Header with logo */}
            <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa' }}>
                <img
                    src={logo}
                    alt="Logo"
                    style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                />
<h1 class="stylish-title">Image Library</h1>
</header>

            {/* Image grid with animations */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '20px' }}>
                {images.map((imgSrc, index) => (
                    <motion.img
                        key={index}
                        src={imgSrc}
                        alt={`Image ${index + 1}`}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        whileTap="tap"
                        variants={imageVariants}
                        style={{
                            width: '150px',
                            height: '150px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
<div className="app">
  <h1>Image Library</h1>
  <div className="image-gallery">
    {images.map((imgSrc, index) => (
      <img
        key={index}
        src={imgSrc}
        alt={`Image ${index + 1}`}
        className="gallery-image"
      />
    ))}
  </div>
</div>


export default App;
