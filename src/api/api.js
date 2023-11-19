import axios from 'axios';
import Notiflix from 'notiflix';
// Реалізація всіх запитів через екземпляр классу
// nodemon ./src/js/api.js

class Api {
  // #BASE_URL = 'https://pixabay.com/api/';
  #BASE_URL = 'https://pixabay.com/api/';

#KEY_API = '39839369-8c713c9a2c0ac40d1d76da13a';
#IMG_KOL = 40;
// let pageNum = 1;

  async #getData(url) {
    const response = await axios.get(url);
    return response.data;
  }

  
  #handleError(error) {
    Notiflix.Notify.failure(error.response.data.message);
  }

  // async getFilters(params) {
  //   try {
  //     // const searchParams = new URLSearchParams(params);
  //     // return await this.#getData(`${this.#BASE_URL}/filters?${searchParams}`);
  //     return await this.#getData(`${this.#BASE_URL}?q=cat&page=1&key=${this.#KEY_API}&image_type=photo&orientation=horizontal&per_page=12'`);
  //   } catch (error) {
  //     this.#handleError(error);
  //   }
  // }

    async getSearch(params, page) {
    try {
      return await this.#getData(`${this.#BASE_URL}?q=${params}&page=${page}&key=${this.#KEY_API}&image_type=photo&orientation=horizontal&per_page=12`);
    } catch (error) {
      this.#handleError(error);
    }
  }

}

const api = new Api();
export default api;
