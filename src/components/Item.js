import React from 'react';
import { View,Text,Image,StyleSheet,TouchableOpacity, Button,Alert } from 'react-native';
import { useWindowDimensions } from 'react-native';
const handle=()=>{
    Alert.alert(
        "Thông báo",
        "Bạn có muốn đặt hàng ?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
        )
}
const Item=(props)=>{
    const imageWidth = Math.floor(useWindowDimensions().width/2);
    return(
       <View style={styles.container}>
           <Image source={{uri: `${props.src}`}} style={{ width:130, height:130,marginLeft:5 }}/>
           <Text style={{fontWeight:'bold',color:'#000'}} numberOfLines={1}>{props.title}</Text>
           <Text numberOfLines={1}>{props.engtitle}</Text>
           <Text style={{fontWeight:'bold',color:'#0c713d'}}>{props.price}</Text>
           <TouchableOpacity style={styles.btn} onPress={handle}>
               <Text style={{color:'#0c713d'}}>ĐẶT HÀNG</Text>
           </TouchableOpacity>
       </View>
    );
};

export default Item;
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        borderRadius:15,
        width:175,
        height:260,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'#000',
        shadowOpacity:0.3,
        shadowOffset:{width:0,height:2},
        shadowRadius:3.82,
        elevation: 5,
        margin:4
    },    
    btn:{
        height:30,
        width:90,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        margin:4,
        borderColor:'#0c713d',
        borderWidth: 1, 
        },
    }
);