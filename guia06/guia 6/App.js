import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';

const App = () => {
  const [modalVisiblePlaya, setModalVisiblePlaya] = useState(false);
  const [modalVisiblePlatillos, setModalVisiblePlatillos] = useState(false);
  const [modalVisibleRutas, setModalVisibleRutas] = useState(false);

  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblePlaya}
          onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>NUESTRO HOTEL EL SALVADOR</Text>
              <Text>ENTRE LO MEJOR QUE PODRAS ENCONTRAR EN TODO CENTROAMERICA</Text>
              <Button title="Cerrar" onPress={() => (setModalVisiblePlaya(!modalVisiblePlaya))}></Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblePlatillos}
          onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>BIENVENIDOS</Text>
              <Text>ACA ERES BIENVENIDOS</Text>
              <Button title="Cerrar" onPress={() => (setModalVisiblePlatillos(!modalVisiblePlatillos))}></Button>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleRutas}
          onRequestClose={() => { alert('Modal has been closed'); }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Rutas</Text>
              <Text>Aca podras encontrar tu mejor lugar de estadia en el mejor pais</Text>
              <Button title="Cerrar" onPress={() => (setModalVisibleRutas(!modalVisibleRutas))}></Button>
            </View>
          </View>
        </Modal>
        {/* <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.banner}
            source={require('./src/imagen/b1')}
          />
        </View> */}

        <View styles={styles.contenedor}>
          <Text style={styles.titulo}>NUESTROS SERVICIOS</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight onPress={() => { setModalVisiblePlaya(!modalVisiblePlaya) }}>
                <Image
                  style={styles.ciudad}
                  source={require('./src/imagen/a')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/imagen/b')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/imagen/c')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/imagen/d')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/imagen/e')}
              />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>COMIDAS CULINARIAS</Text>
          <View>
            <View>
              <TouchableHighlight onPress={() => { setModalVisiblePlatillos(!modalVisiblePlatillos) }}>
                <Image
                  style={styles.mejores}
                  source={require('./src/imagen/t')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./src/imagen/h')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./src/imagen/p')}
              />
            </View>
          </View>

          <Text style={styles.titulo}>NUESTRAS HABITACIONES</Text>
          <View style={styles.listado}>

            <View style={styles.listaItem}>
              <TouchableHighlight onPress={() => { setModalVisibleRutas(!modalVisibleRutas) }}>
                <Image
                  style={styles.mejores}
                  source={require('./src/imagen/cojutepeque')}
                />
              </TouchableHighlight>
            </View>

            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/imagen/sebas')}
              />
            </View>

            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/imagen/izalco')}
              />
            </View>

            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require('./src/imagen/planes')}
              />
            </View>
          </View>

        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 150,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10
  },
  contenedor: {
    marginHorizontal: 10
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listaItem: {
    flexBasis: '49%'
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center'
  }
});

export default App;