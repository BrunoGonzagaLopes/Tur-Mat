import {get} from "../services/httpService";
import UserEntity from "../entities/User";

const toEntity = (u) => {
    return new UserEntity(u.id, u.nome, u.telefone, u.urlImagemPerfil);
}

export async function getUser() {
    let dados = await get("usuarios/logado");
    return toEntity(dados);
}