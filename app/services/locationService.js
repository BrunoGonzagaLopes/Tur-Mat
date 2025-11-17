import * as Location from "expo-location";

export const getCurrentAddress = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") return null;

  const location = await Location.getCurrentPositionAsync({});
  const [address] = await Location.reverseGeocodeAsync(location.coords);
  
  
  return address;
};