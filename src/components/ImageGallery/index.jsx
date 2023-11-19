import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ images, showModal }) => {
  return (
    <ul className="imageGallery">
      {images.map(image => (
        <ImageGalleryItem
          image={image}
          key={image.id}
          handleClick={showModal}
        />
      ))}
    </ul>
  );
};
