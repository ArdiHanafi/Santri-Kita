import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Title from '../components/Title';
import SilabusListDetail from '../components/Silabus/SilabusListDetail';

const SilabusScreen = ({route,navigation}) => {
  const data = React.useMemo(()=>{
    return route.params;
  },[route.params])
  return (
    <SafeAreaView style={styles.pageArea}>
      <Header></Header>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}>
        <Title backRoute="Silabus" title={data.pelajaran} />
        <SilabusListDetail data={data}/>
      </ScrollView>

      <Navbar></Navbar>
    </SafeAreaView>
  );
};

export default SilabusScreen;

const styles = StyleSheet.create({
  bagianScroll: {
    backgroundColor: '#fff',
    marginVertical: 50,
  },
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
  },
});
