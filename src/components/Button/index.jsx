export const Button = ({ onLoadMore }) => {
  // handleLoad = e => {
  //   this.props.onSubmit(e.target.searchInput.value);
  // };

  return (
    <button type="button" className="button" onClick={onLoadMore}>
      <span className="button-label">Load more</span>
    </button>
  );
};
