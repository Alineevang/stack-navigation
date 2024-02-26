
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style= {styles.container}>
      <Text></Text>
      <TouchableOpacity style={styles.navButton}onPress={() => navigation.navigate ("Perfil")}>
      <Text>Perfil</Text>
    </TouchableOpacity>

      <Text></Text>
      <TouchableOpacity style={styles.navButton}onPress={() => navigation.navigate ("Contato")}>
      <Text>Contato</Text>
    </TouchableOpacity>

      <Text></Text>
      <TouchableOpacity style={styles.navButton}onPress={() => navigation.navigate ("Home")}>
      <Text>Home</Text>
    </TouchableOpacity>
    </View>
  )
}
