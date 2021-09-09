import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Item from './src/components/Item';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import _, { set } from "lodash";
import { data } from 'browserslist';
const Data = [
  {
    title: 'Tra Thao Moc',
    engtitle: 'Lucky Tea',
    img: 'https://aeonmall-binhduongcanary-en.com/wp-content/uploads/2020/05/5a893da4cab487-trthomcphclong.png',
    price: "55.000đ",
  },
  {
    title: 'Hong Tra Tac',
    engtitle: 'Forest Black Tea',
    img: 'https://aeonmall-binhtan.com.vn/wp-content/uploads/2021/05/dae727e03e8092-daccam.png',
    price: "65.000đ",
  },
  {
    title: 'Tra Dao Phuc Long',
    engtitle: 'Phuc Long Peach Tea',
    img: 'https://aeonmall-binhtan.com.vn/wp-content/uploads/2021/05/3937476a64a213-trophclong.png',
    price: "55.000đ",
  },
  {
    title: 'Tra Dao Da Xay',
    engtitle: 'Peach Tea',
    img: 'https://aeonmall-binhduongcanary-en.com/wp-content/uploads/2020/05/83168aba00828b-troxayphclong.png',
    price: "65.000đ",
  },
  {
    title: 'Trà Lài Đác Thơm',
    engtitle: 'Pineapple Tea',
    img: 'https://aeonmall-binhtan.com.vn/wp-content/uploads/2021/05/b8f1dd4d4f583c-dacthom.png',
    price: "55.000đ",
  },
  {
    title: 'Trà Ô Long',
    engtitle: 'O Long Tea',
    img: 'https://aeonmall-binhtan.com.vn/wp-content/uploads/2021/05/f4c93deb475436-trlong.png',
    price: "55.000đ",
  },
  {
    title: 'Táo Và Dâu Ép',
    engtitle: 'Apple And Strawberry Juice',
    img: 'https://aeonmall-binhtan.com.vn/wp-content/uploads/2021/05/82d9495c75a9f0-tovdup.jpg',
    price: "60.000đ",
  },
  {
    title: 'Sữa Chua Phúc Bồn Tử Đác Cam',
    engtitle: 'Berry Berry Yogurt',
    img: 'https://www.phuclong.com.vn/uploads/dish/4136b3715bff3e-sachuaphcbntccamphclong.png',
    price: "55.000đ",
  },
];
const App = () => {
  const [data, setData] = useState(Data);
  const [keyword, setKeyword] = useState('');
  // useEffect(() => {
  //   const inteval=setInterval(() => {
  //     setData(_.shuffle(data));
  //   }, 5000)
  //   if(keyword!=""){
  //   setData(data.filter(item=>item.title.includes(keyword)));
  //   }
  //   else{
  //     setData(Data);
  //   }
  //   return ()=>{
  //     clearInterval(inteval);
  //   }
  // }, [data.length,keyword])
  const renderItem = ({ item }) => {
    return (
      <Item src={item.img} title={item.title} engtitle={item.engtitle} price={item.price} key={item.engtitle} />
    )
  }
  return (
    <SafeAreaView style={{ height:'100%' }}>
      <View style={{ height:'10%', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 15, }}>
        <View style={{ flex: 1 }}>
          <FontAwesome5 name={'align-justify'} style={styles.icon} />
        </View>
        <View style={{ flex: 9, marginTop: -6 }}>
          <Text style={styles.title}>PHUC LONG</Text>
        </View>
        <View style={{ flex: 1 }}>
          <FontAwesome5 name={'shopping-cart'} style={styles.icon} />
        </View>
      </View>
      <View style={{height:'5%'}}>
      <TextInput placeholder="Tìm kiếm" keyboardType="visible-password" value={keyword} onChangeText={(text) => { setKeyword(text) }} />
      </View>
      <View style={styles.menu}>
        <FlatList
          numColumns={2}
          data={Data}
          renderItem={item => renderItem(item)}
          keyExtractor={item => item.img}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menu: {
    height:'85%',
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
    fontSize: 26,
    color: '#0c713d',
  },
  title: {
    fontSize: 25,
    paddingHorizontal: 64,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
    color: '#0c713d',
  },
  titlemenu: {
    fontSize: 25,
    paddingHorizontal: 64,
    fontFamily: 'DancingScript-Regular',
    alignSelf: 'center',
  },
});

export default App;
