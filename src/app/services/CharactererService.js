import BaseService from './BaseService'
import axios from 'axios';

class CharacterService extends BaseService {
  constructor(){
    super(); //busca os dados do constructor do outro qie esta em extends
  }

  async getCharacters(page, title) {
    const offset = (page - 1) * this.limit;
    let url = `https://gateway.marvel.com/v1/public/characters?apikey=${this.apiKey}&hash=${this.hash}&ts=${this.ts}&limit=${this.limit}&offset=${this.offset}`

    if (title !== undefined) {
      url += `&nameStartsWith=${title}`

    }

    const response = await axios.get(url);

    return {
      current_page: page,
      total_page: Math.ceil(response.data.data.total / this.limit),
      data: response.data.data.results,
    }
  }

  async getCharacter(id){
    const url = `https://gateway.marvel.com/v1/public/characters/${id}?apikey=${this.apiKey}&hash=${this.hash}&ts=${this.ts}`
    const response = await axios.get(url);

    return {
      data:
        response.data.data.results.length > 0
       ? response.data.data.results[0]
       : null
    }
  }

}

export default new CharacterService()
