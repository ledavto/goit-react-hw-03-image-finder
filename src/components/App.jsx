import { Button } from './Button';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { Searchbar } from './Searchbar';
import { Component } from 'react';
import api from '../api/api';

export class App extends Component {
  state = {
    images: [],
    searchStr: '',
    isLoader: false,
    error: null,
    page: 1,
    modal: { isShow: false, src: '' },
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state);

    if (this.state.images !== prevState.images) {
      // console.log(this.state.images);
    }

    //Если нажата кнопка LoadMore или Search
    if (
      this.state.page !== prevState.page ||
      this.state.searchStr !== prevState.searchStr
    ) {
      // console.log(this.state.page);
      api.getSearch(this.state.searchStr, this.state.page).then(data => {
        // console.log(this.state.page < Math.ceil(data.totalHits / 12));
        // console.log(this.state.page);
        this.setState(prev => ({
          images: [...prev.images, ...data.hits],
          isLoader: false,
          isLoadMore: prev.page < Math.ceil(data.totalHits / 12),
        }));
      });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  handleShowModal = e => {
    // console.log(e);
    this.setState({ modal: { isShow: true, src: e } });
  };

  handleSearch = searchInput => {
    // console.log(searchInput);
    this.setState({
      isLoader: true,
      searchStr: searchInput,
      page: 1,
      images: [],
    });
  };

  handleCloseModal = e => {
    this.setState({ modal: { isShow: false } });
  };

  render() {
    return (
      <>
        {/* Компонент приймає один проп onSubmit – функцію для передачі 
        значення інпута під час сабміту форми. */}
        <Searchbar onSubmit={this.handleSearch} />
        {this.state.images.length > 0 && (
          <ImageGallery
            images={this.state.images}
            showModal={this.handleShowModal}
          />
        )}
        {this.state.isLoader && <Loader />}
        {this.state.isLoadMore && <Button onLoadMore={this.handleLoadMore} />}

        {this.state.modal.isShow && (
          <Modal
            imgURL={this.state.modal.src}
            keyClose={this.handleCloseModal}
          />
        )}
      </>
    );
  }
}
