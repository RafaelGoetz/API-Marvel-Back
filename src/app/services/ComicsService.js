import BaseService from './BaseService'
import axios from 'axios';

class ComicsService extends BaseService {
  constructor(){
    super(); //busca os dados do constructor do outro qie esta em extends
  }

  async getComic(id){
    const url = `https://gateway.marvel.com/v1/public/comics/${id}?apikey=${this.apiKey}&hash=${this.hash}&ts=${this.ts}`
    const response = await axios.get(url);

    return {
      data:
        response.data.data.results.length > 0
       ? response.data.data.results[0]
       : null
    }
  }

}

export default new ComicsService()
