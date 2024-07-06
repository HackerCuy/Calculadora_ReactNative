import {StyleSheet, Text, View } from "react-native"

const TitleText =(props) =>{

    const styles = StyleSheet.create({

        title: {
            width: 150,
            justifyContent: "left",
            backgroundColor: "white",
            color:props.titleColor !== undefined ? props.titleColor : "purple",
            margin: 5,
            borderRadius: 10,
            alignItems: "center",
            textAlign: "left",
            
          },
          value:{
            color:props.valueColor !== undefined ? props.valueColor : "black",
            fontSize:props.valueFontSize !== undefined ? Number(props.valueFontSize) : 14,
            alignItems:"center",
            textAlign:"center",
    
          },
          container:{
            height:60,
            backgroundColor: "white",
            borderRadius:10,
            marginBottom:20,
            width: props.containerWidth!== undefined ? Number(props.containerWidth) : 160,

          }     
        })
        return(
          //Componente
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.value}>{props.value}</Text>
    </View>
        )
      }


export default TitleText