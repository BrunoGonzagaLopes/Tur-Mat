import { router } from "expo-router";
import { useEffect } from "react";
import { useUser } from '../context/UserContext';
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import BollGereric from '../components/BollGeneric'
import Points from "../components/Points";
import CuponsCard from "../components/CuponsCard";

export default function CreateRestaurant() {
  const { user } = useUser();

  useEffect(() => {
    if (user == null) {
      router.push('/view/LoginView');
    }
  }, [user]);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F3EFEA' }}>
      <View style={{ backgroundColor: '#F3EFEA', flexDirection: "column", }}>


        {/* Header */}
        <View style={styles.containerHeader}>
          <BollGereric style={styles.positionBoll} onPress={() => router.push('/')}><Image source={require('../assets/images/icons/arrowreturn.png')} style={styles.iconBoll}></Image></BollGereric>

          <View style={styles.ContainerPoints}>
            <Text style={styles.Points}>Meus Pontos</Text>
            <Points></Points>
          </View>
          <BollGereric
            style={styles.positionBoll}
            onPress={() => router.push('/view/QrScannerView')}
          >
            <Image
              source={require('../assets/images/icons/qrcode.png')}
              style={styles.iconBoll}
            />
          </BollGereric>
        </View>
      </View>
    </ScrollView>
  )

}
const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 'auto'

  },
  ContainerPoints: {
    marginTop: 60,
  },
  positionBoll: {
    marginTop: 60,
    marginBottom: 10,
    marginHorizontal: 20
  },
  iconBoll: {
    width: '66%',
    height: '66%',
    margin: 'auto'
  }
  ,
  Points: {
    color: '#939393',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'center'
  },
  myLocalization: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.5,
    textAlign: 'center'
  },

  imageBoll: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderColor: '#FAB418',
    borderWidth: 3
  },
});