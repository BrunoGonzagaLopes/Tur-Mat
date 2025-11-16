import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from "expo-router";

export function useQrCodeService() {
  const [permission, requestPermission] = useCameraPermissions();

  async function handleBarCodeScanned({ data }, setScanned) {
    setScanned(true);
    alert(`QR Code lido: ${data}`);
    router.push('/view/CuponsListView')
  }

  return {
    permission,
    requestPermission,
    handleBarCodeScanned,
  };
}