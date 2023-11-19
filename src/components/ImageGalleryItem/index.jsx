export const ImageGalleryItem = ({ image, handleClick }) => {
  return (
    <li className="imageGalleryItem">
      <img
        className="imageGalleryItem-image"
        src={image.webformatURL}
        alt={image.largeImageURL}
        onClick={event => handleClick(event.target.alt)}
      />
    </li>
  );
};
