import CharacterService from '../services/CharactererService'

class CharacterController {
 async  index(request, response) {
    const { page, title} = request.query;
    const data = await CharacterService.getCharacters(page ?? 1, title) // ?? pega essa valor, se for false pega o outro

    return response.json(data)
  }

  async show(request, response){
    const { id } = request.params;
    const data = await CharacterService.getCharacter(id)

    return response.json(data)

  }
}

export default new CharacterController();
