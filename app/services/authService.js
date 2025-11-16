const BASE_URL = "http://52.67.58.153:8080";

export async function loginService(email, senha) {
  try {
    const response = await fetch(`${BASE_URL}/api/usuarios/logado`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa(`${email}:${senha}`)
      },
    });
    if (!response.ok) {
      return { ok: false, message: "Usuário ou senha inválidos" };
    }
    await AsyncStorage.setItem("token", btoa(`${email}:${senha}`));
    // const data = await response.json();
    return { ok: true /*, token: data.token, user: data.user*/ };

  } catch (error) {
    return { ok: false, message: error.message};
  }
}
