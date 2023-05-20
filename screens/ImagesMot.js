import {FlatList, Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native' ;
import { useState } from 'react';
 
export default function ImagesMot(){

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function randomize(tab) {
        var i, j, tmp;
        for (i = tab.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
        }
        return tab;
    }

   function get_letters(mot){

    var tableau=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var letters=[]
    var letters_search = []
    var word=[]

    for(var i of mot){
        word.push(i)
        letters_search.push('')

        if(letters.indexOf(i) === -1)
            letters.push(i)

        if(tableau.indexOf(i) !== -1)
            tableau.splice(tableau.indexOf(i),1)
        
        
        letters.push(tableau[getRandomInt(tableau.length)]) 
    }

    letters=randomize(letters)

    return [letters,letters_search,word]
   }

   function verify_and_add(letter){
        var letters=state[0]
        var letters_search=state[1]
        var word=state[2]

        if(word.indexOf(letter) !== -1){
            for(var i=0 ; i< word.length ; i++){
                if(word[i] === letter)
                    letters_search[i]=letter
            }
            letters.splice(letters.indexOf(letter),1)
        }
        setState([letters,letters_search,word])
   }

   function Keyboard(tab,here) {
        var keyboard = []
        var k=0
        for(var i of tab){
            if(here === 0){
                keyboard.push(
                    <TouchableOpacity style={styles.key} onPress={() => verify_and_add(i) } key={k}>
                            <Text style={styles.letter}>{i}</Text>
                    </TouchableOpacity>)
            }else{
                keyboard.push(
                    <TouchableOpacity style={styles.key} key={k}>
                            <Text style={styles.letter}>{i}</Text>
                    </TouchableOpacity>)
            }
            k++
        }

        return keyboard
   }
    
    const mot = "nerys"

    const [state, setState] = useState(get_letters(mot))

    
    
    return(
        <View style={styles.container}>
            <View style={styles.animate}>
                <TouchableOpacity>
                    <Text style={styles.text}>Help</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <View style={styles.item}>
                    <Image source={require('../assets/piece.jpg')} style={styles.image}/>
                    <Image source={require('../assets/piece.jpg')} style={styles.image}/>
                </View>
                <View style={styles.item}>
                    <Image source={require('../assets/piece.jpg')} style={styles.image}/>
                    <Image source={require('../assets/piece.jpg')} style={styles.image}/>
                </View>
            </View>
            <View style={styles.mot}>
                {Keyboard(state[1],1)}
            </View>
            <View style={styles.keyboard}>
                {Keyboard(state[0],0)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#471045',
      width: '100%' ,
      height: '100%' ,
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    content: {
        width: '97%' ,
        height: 380 ,
    },
    item: {
        width: '100%' ,
        height: '48%' ,
        flexDirection: 'row',
        justifyContent: 'space-around'
    } ,
    image: {
        width: '45%' ,
        height: 170 ,
        borderRadius: 5 ,
        borderWidth: 1
    },
    key: {
        width: 25 ,
        height: 25 ,
        backgroundColor: 'white' ,
        alignItems: 'center' ,
        justifyContent: 'center',
        borderRadius: 5 ,
        margin: 10
    },
    letter: {
        color: 'green' ,
        fontSize: 20 ,
        fontWeight : 'bold',
    } ,
    mot: {
        height: 'auto' ,
        width: '97%' ,
        flexWrap: 'wrap' ,
        flexDirection: 'row' ,
        justifyContent: 'center' ,
        alignItems: 'center' ,
        paddingVertical: 5,
    },
    keyboard: {
        width: '97%' ,
        flexDirection: 'row' ,
        justifyContent: 'center' ,
        alignItems: 'center' ,
        flexWrap: 'wrap' ,
        borderColor: 'white' ,
        height: 'auto' ,
        borderWidth: 3 ,
        paddingVertical: 5,
    } ,
    animate: {
        width: '97%' ,
        height: '10%' ,
        justifyContent: 'center' ,
        alignItems: 'flex-end'
    },
    text: {
        color: 'white' ,
        fontWeight: 'bold' ,
        marginRight: 12 ,
        fontSize: 15 ,
    }
})