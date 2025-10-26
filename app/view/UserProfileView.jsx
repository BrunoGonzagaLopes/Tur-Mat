import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {

  return (

    <View style={{ backgroundColor: '#F3EFEA', }}>
      <View style={{ backgroundColor: '#e7b100ff', flex:1, height:100 }}>


       
        <View style={styles.containerHeader}>
          <View style={styles.ContainerTextEndereco}>
            <Text style={styles.Textendereco}>Endereço</Text>
          </View>


        </View>
      
        
      </View>
      </View>
  
  );
}





const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 'auto'

  },
  ContainerTextEndereco: {
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
  Textendereco: {
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
})