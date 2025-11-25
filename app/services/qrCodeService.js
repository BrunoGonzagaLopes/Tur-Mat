import {  useCameraPermissions } from 'expo-camera';
import { router } from "expo-router";
import {adicionarPontos} from "../services/BeneficiosSevice";

export function useQrCodeService() {
  const [permission, requestPermission] = useCameraPermissions();

  async function handleBarCodeScanned({ data }, setScanned) {
    setScanned(true);
    let dados = await adicionarPontos(data)
    router.push({pathname: '/view/assessView', params: {restauranteid: dados.estabelecimento.id}})
  }

  return {
    permission,
    requestPermission,
    handleBarCodeScanned,
  };
}