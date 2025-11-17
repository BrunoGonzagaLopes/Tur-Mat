import RestaurantEntity from "../entities/restaurants";
import {get} from "../services/httpService";
import {getCurrentAddress} from "../services/locationService";
import AsyncStorage from "@react-native-async-storage/async-storage";

class RestaurantService {
  static toEntity(d) {
    return new RestaurantEntity(
      d.id, d.nome, d.mediaAvaliacao, d.endereco, d.descricao,
      d.imageUrl, "12345678910", d.distancia/1000
    );
  };

  static async getAllHTTP() {
    console.log(await AsyncStorage.getItem("token"));
    let localizacaoaAtual = await getCurrentAddress();
    let enderecoFormatado = "";
    if (localizacaoaAtual != null) {
      enderecoFormatado = `${localizacaoaAtual.street}, ${localizacaoaAtual.streetNumber}. ${localizacaoaAtual.postalCode}, ${localizacaoaAtual.district}`
      alert(enderecoFormatado);
    }
    let estabelecimentos = await get(`estabelecimentos?endereco=${enderecoFormatado}`);
    alert(estabelecimentos);
    return estabelecimentos.map(this.toEntity);
  }
}

export default RestaurantService;