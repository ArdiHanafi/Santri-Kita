import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Biaya from '../components/Home/Biaya';
import Profile from '../components/Home/Profile';
import Menus from '../components/Home/Menus';
import Aktivitas from '../components/Home/Aktivitas';
import {useQuery, gql} from '@apollo/client';
const GET_DATA = gql`
  query Get_Data($id: ID!) {
    user(id: $id){
      student{
        id
        nama
        kelas {
          kelas
          lesson_histories(limit:3){
            id
            pelajaran
            tanggal
          }
        }
      }
    }
  }
`;

const HomeScreen = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_DATA,{
    variables:{id:"2"}
  });

  if(loading) return(<Text>Loading</Text>)
  if(error) return(<Text>Error</Text>)
  return (
    <SafeAreaView style={styles.pageArea}>
      <Header></Header>
      
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}>
        <Biaya />
        <Profile />
        <Menus />
        <Aktivitas data={data.user.student.kelas.lesson_histories}/>
      </ScrollView>

      <Navbar></Navbar>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bagianScroll: {
    backgroundColor: '#fff',
    marginVertical: 50,
  },
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
    alignContent: 'center',
  },
});
