import ComicsService from '../services/ComicsService'

class ComicsController {

  async show(request, response){
    const { id } = request.params;
    const data = await ComicsService.getComic(id)

    return response.json(data)
  }
}

export default new ComicsController();
