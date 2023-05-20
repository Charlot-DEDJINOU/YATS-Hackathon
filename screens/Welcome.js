import { StyleSheet, Text, TextInput, View, Button} from 'react-native';
import Form from 'react-native-form'
import { useState,useEffect } from 'react';
import Presentation from './Presentation';

export default function App() {
    const [form,setForm]=useState(1)

    useEffect(()=>{
           setTimeout(()=>{
                setForm(2)
        },3000) ;
     },[])

  if(form == 1){
    return (
        <View style={styles.container}>
          <Text style={styles.setFontSizeFour}>Art et Culture</Text>
        </View>
      );
  }

    else if(form == 2){
        return(
            <View style={styles.container}> 
                <View style={styles.Content}>
                    <Text style={styles.textformat}></Text>
                </View>
                <Form style={styles.Form}>
                    <View style={styles.FormAllInput}>
                        <View style={styles.FormGroup}>
                            <Text style={styles.inputText}>Entrer votre Pseudo</Text>
                            <TextInput name="myTextInput" style={styles.input}/>
                        </View>
                        <View style={styles.FormGroup}>
                            <Text style={styles.inputText}>Entrer votre age</Text>
                            <TextInput name="myTextInput" style={styles.input} keyboardType='number-pad' />
                        </View>
                        <View style={styles.FormGroup}>
                            <Text style={styles.inputText}>Departement</Text>
                            <TextInput name="myTextInput" style={styles.input} keyboardType='default' />
                        </View>
                    </View>
                    <View style={styles.button}>
                        <Button title="Envoyer" color='green' onPress={() => setForm(3)}/>
                    </View>
                </Form>
            </View>
        )
    }
    else if (form == 3){
        return(
            <Presentation />
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%' ,
      width: '100%' ,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Content: {
        height: '25%' ,
        width: '90%',
    },
    Form: {
        display: 'flex' ,
        flexDirection : 'column' ,
        justifyContent: 'space-between' ,
        alignItems: 'center' ,
        height: '70%' ,
        width: '90%',
    },
    FormAllInput: {
        width : '100%' ,
        height: '75%' ,
    },
    FormGroup: {
        width: '100%' ,
        height: 90 ,
        marginBottom : 10 ,
    },
    input: {
        width: '100%' ,
        height: 50 ,
        borderWidth: 1 ,
        marginTop: 10 ,
        borderRadius: 5 ,
        fontSize: 18 ,
        borderColor: 'white' ,
        color: 'white' ,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    inputText: {
        color: 'white',
        fontSize: 15 ,
    },
    setFontSizeFour: {
        fontSize: 40 ,
        color: 'green' ,
      },
    button: {
        width: '100%' ,
        position: 'relative' ,
        marginTop : 20
    },
    textformat: {
        fontSize: 25,
        color: 'green',
        textAlign:'center',
        padding: 5 ,
    },
});
