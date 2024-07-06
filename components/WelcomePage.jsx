import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts, Anton_400Regular, LondrinaOutline_400Regular } from '@expo-google-fonts/dev';


//componente pantalla bienvenida
const WelcomePage = (props) =>{
    //Hook para descargar las fuentes de google y poder referenciarlas en los estilos
    const [fontsLoaded] = useFonts({
        Anton_400Regular,
        LondrinaOutline_400Regular,
    });
    return(<View style={styles.container}>

        <Text style={styles.greentx}>EASY</Text>
        <Text style={styles.purpletx}>TAX</Text>
        
        <TouchableOpacity style={styles.startBtn} onPress={()=> props.navigation.navigate("App")}>
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>

    </View>)
}


const styles =StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        textAlign: "center",
        backgroundColor:"black",
    },

    greentx:{
        color:"#daff60",
        fontSize:70,
        fontFamily: "Anton_400Regular",
        
    },

    purpletx:{
        color:"#D4B6FF",
        fontSize:70,
        fontFamily: "LondrinaOutline_400Regular",
        marginTop:-40,
        textAlign:"center",
    },

    startBtn:{ 
        width: 150,
        height:50,
        justifyContent: 'center',
        backgroundColor: "white",
        margin:5,
        borderRadius: 10,
        alignItems:"center",
        textAlign:"center",
        
    },
    btnText:{
        color:"#D4B6FF",
        fontFamily:"Anton_400Regular"
    }
  
})

export default WelcomePage