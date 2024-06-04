import React from 'react';
import LightGallery from 'lightgallery/react';

// Import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import "./viewgalery.css"

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import TitleandSubtitels from '../../../../../shared/titleandSubtitels';

const ViewGallery = ({ img }) => {
  const onInit = () => {
    // console.log('lightGallery has been initialized');
  };

  return (
    <div className='mt-5'>
        <TitleandSubtitels heading="Gallery full of Your's memory" subtitle="Witness the majestic wildlife of the Serengeti, from lions to wildebeest, against the backdrop of spectacular sunsets."></TitleandSubtitels>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        <div className="gallery-grid">
          {img.map((image, index) => (
            <a key={index} href={image} className="gallery-item">
              <img alt={`img${index + 1}`} src={image} />
            </a>
          ))}
        </div>
      </LightGallery>
    </div>
  );
};

export default ViewGallery;
