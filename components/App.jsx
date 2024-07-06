import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
//importamos el archivo json
import taxes from "../assets/Data.json"
import TitleText from "../components/TitleText"




//Este arreglo se usa para enlasar el componente dropdown con los datos de la api
//Los datos se convierten a un qrreglo de objetos con los atributos label y value
const data = taxes.taxes.map(tax => {
  return {
    label: tax.state_name + " (" + tax.tax_percentage + "%)",
    value: tax.tax_percentage 
  }
});


const App = () => {
//Este hook almacena y modifica el valor del tax seleccionado en el dropdown
  const [tax, setTax] = useState(null);
//Este hook almacena y modifica el valor que el usuario captura en el input "amount"
  const [amount, setAmount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.greentx}>EASY</Text>
      <Text style={styles.purpletx}>TAX</Text>

      <TouchableOpacity
        style={styles.amount}>     
        <TextInput
          placeholder="Insert Amount"
          keyboardType="numeric"
          //onchangetext ejecuta el hook de set amount para cambiar el valor de amount
          textAlign="center" onChangeText={(newText)=> setAmount(newText)}></TextInput>
          
      </TouchableOpacity>

     
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        // Muestra la lista de objetos
        data={data}
        search
        maxHeight={300}
        //Con labelfield toma el atributo label de la base de datos
        labelField="label"
        //Con valuefield toma el Tax de la base de datos
        valueField="value"
        placeholder="Select State"
        searchPlaceholder="Search..."
        //Lo que esta seleccionado en ese estado
        value={tax}
        onChange={(item) => {
          //Aqui mandamos llamar el settax para actualizar el estado de tax y los componentes que lo usan
          setTax(item.value);
        }}
      />

       {/* En este componente realizamos la operacion de calcular el tax del valor capturado, mediante el tax seleccionado */}
        <TitleText title="Tax Amount" value={"$" + (tax * amount / 100).toFixed(2)}/>
         {/* En este componente se reutiliza el componente anterior y se calcula el total del tax mas cantidad  */}
        <TitleText valueColor="purple" valueFontSize="18" containerWidth="200" title="Total Amount" value={"$" + ((tax * amount / 100) + Number(amount)).toFixed(2)}/>
    

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
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
},


  amount: {
    width: 150,
    height: 50,
    justifyContent: "center",
    backgroundColor: "white",
    color: "grey",
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
    textAlign: "center",
  },

  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    backgroundColor: "white",
    color: "grey",
    width: 150,
    borderRadius:10,
  },
  placeholderStyle: {
    textAlign:"center",
    fontSize: 14,
    color:"grey",
  },
  selectedTextStyle: {
    fontSize: 14,
    textAlign:"center",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },

  totalAmount:{
    marginTop: 20,
  }
});

export default App;
