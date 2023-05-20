import {StyleSheet,View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DataField from './DataField';

const heart = <FontAwesome5 name={'heart'} solid size={20} color='red'/>;
const coins = <FontAwesome5 name={'coins'} solid size={20} color='rgb(237, 147, 2)'/>;
const house_user = <FontAwesome5 name={'house-user'} solid size={30} color='green'/>;
const user = <FontAwesome5 name={'user'} solid size={30} color='white'/>;
const trophy = <FontAwesome5 name={'trophy'} solid size={30} color='yellow'/>;
const setting = <FontAwesome5 name={'wrench'} solid size={30} color='green'/>;
const health = <FontAwesome5 name='briefcase-medical' solid size={30} color='white'/>;

export default function Presentation({navigation}) {

    const Data=DataField()
    
    const [page,setPage] = useState("home")

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerRang}>
                <Text style={styles.text}>Rang</Text>
                <Text style={styles.text}>18</Text>
          </View>
          <View style={styles.headerChild}>
                <Image source={require('../assets/progress-phote1.jpg')} style={styles.image_header}/>
                <Text style={styles.text}>0/7</Text>
          </View>
          <View style={styles.headerChild}>
                <Text>{coins}</Text>
                <Text style={styles.text}>18</Text>
          </View>
          <View style={styles.headerChild}>
                <Text>{heart}</Text>
                <Text style={styles.text}>18</Text>
          </View>
        </View>
        <View style={styles.start}>
            <View style={styles.animations}>
                <Image source={(require('../assets/cane1.jpg'))} style={styles.cane}/>
            </View>
            <View style={styles.fields}>
                <FlatList 
                    style={styles.flatlist}
                    data={Data}
                    renderItem={({item}) => <TouchableOpacity style={styles.field} onPress={()=> alert("momo")}>
                                            <Text style={styles.textfield}>{item.name}</Text>
                                    </TouchableOpacity>}
                />
            </View>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.image}>{house_user}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.image}>{health}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.image}>{trophy}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.image}>{user}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>{setting}</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#471045',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%' ,
    height: '100%' ,
  },
  header: {
    flexDirection: 'row' ,
    alignItems: 'flex-end' ,
    justifyContent: 'space-around' ,
    backgroundColor: '#471035' ,
    zIndex: 3 ,
    width: '97%' ,
    height: '12%',
    borderBottomColor: 'white',
    borderWidth: 2
  },
  headerChild: {
    flexDirection: 'row' ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    height: 30 ,
    width: 'auto' ,
    marginVertical: 10 ,
  },
  headerRang: {
    flexDirection: 'row' ,
    justifyContent: 'space-between' ,
    alignItems: 'center' ,
    height: 30 ,
    marginVertical: 10 ,
    width: '20%' ,
  },
  image_header: {
    width: 50 ,
    height: 30 ,
  },
  image: {
    width: 50 ,
    height: 30 ,
  },
  text: {
    color: 'white' ,
    fontWeight: 'bold' ,
    fontSize: 18 ,
    marginLeft: 5,
  },
  start: {
    flexDirection: 'column' ,
    height: '80%',
    width: '97%' ,
    borderWidth: 1 ,
    justifyContent: 'space-evenly' ,
    alignItems: 'center'
  },
  footer: {
    flexDirection: 'row' ,
    alignItems: 'center' ,
    justifyContent: 'space-around' ,
    zIndex: 3 ,
    borderTopColor: 'white' ,
    borderWidth: 2 ,
    width: '97%' ,
    height: '9%' ,
  },
  animations: {
    width: '97%' ,
    height: '30%',
    alignItems: 'center'
  },
  fields: {
    height: '40%' ,
    width: '97%' ,
  },
  field: {
    width: '90%' ,
    height: 50 ,
    backgroundColor: 'green' ,
    borderRadius: 10 ,
    alignItems: 'center' ,
    justifyContent: 'center' ,
    marginHorizontal: 15 ,
    marginBottom: '10%'
  } ,
  textfield: {
    color: 'white' ,
    fontWeight: 'bold' ,
    fontSize: 20 ,
  },
  flatlist: {
    height: '100%' ,
    width: '100%' ,
  }
})