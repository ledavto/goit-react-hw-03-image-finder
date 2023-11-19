export const Modal = ({ imgURL, keyClose }) => {
  return (
    <div
      className="overlay"
      onClick={keyClose}
      // onKeyDown={keyClose}
      tabIndex={0}
    >
      <div className="modal">
        <img src={imgURL} alt="Text" />
      </div>
    </div>
  );
};
