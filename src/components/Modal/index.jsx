import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') this.props.keyClose();
  };

  handleClick = e => {
    if (e.target === e.currentTarget) this.props.keyClose();
  };

  render() {
    return (
      <div className="overlay" onClick={this.handleClick}>
        <div className="modal">
          <img src={this.props.imgURL} alt="Text" />
        </div>
      </div>
    );
  }
}
