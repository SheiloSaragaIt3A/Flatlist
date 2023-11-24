import * as React from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet } from 'react-native';
import FiMoreHorizontal from './src/FiMoreHorizontal';

const DATA = [
    
    {id: '1',lastname: 'Aninipot',firstname:'Joshua',add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '2',lastname: 'Bale',firstname: 'Lloyd', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '3',lastname: 'Bugnos', firstname:'Eric', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '4',lastname: 'Barogga' ,firstname: 'Teflor', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '5',lastname: 'Cabudbud', firstname:'Jaylord', add:'Bagtic, Catigbian, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '6',lastname: 'Digaum', firstname:'Ulygen', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '7',lastname: 'Daguing', firstname:'Jess Warren', add:'Liboron, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '8',lastname: 'Daguing', firstname:'Noryn', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '9',lastname: 'Jagunos', firstname:'Mervin', add:'Liboron, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '10',lastname: 'Gementiza', firstname:'Melvian', add:'Liboron, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '11',lastname: 'Lauronal', firstname:'Jomar', add:'Liboron, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '12',lastname: 'Luzon', firstname:' Mark Edward', add:'Liboron, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '13',lastname: 'Languita', firstname:'Loren Mae', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '14',lastname: 'Laolao', firstname:'Edzel', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />} ,
    {id: '15',lastname: 'Laguros', firstname:'Angeline', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '16',lastname: 'Malano', firstname:'Dominick', add:'Hagbuaya, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '17',lastname: 'Oracion', firstname:'kenneth Ivan', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '18',lastname: 'Prisiados', firstname:'Ronalyn', add:'Ipo, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '19',lastname: 'Panganoron', firstname:'Michael', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '20',lastname: 'Saraga', firstname:'Sheilo', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '21',lastname: 'Salibay', firstname:'Jessa Mae', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '22',lastname: 'Senados', firstname:'Clara Mae', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '23', lastname: 'Sab', firstname:'Liezel', add:'Liboron, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '24',lastname: 'Salandron', firstname:'Joan', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '25',lastname: 'Teves', firstname:'Joshua', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '26',lastname: 'Usaraga', firstname:'Alden', add:'Liboron, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />}, 
    {id: '27',lastname: 'Samante', firstname:'Carmelito', add:'Alegria, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '28',lastname: 'Inson', firstname:'Jeanne', add:'Alegria, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '29',lastname: 'Ponte', firstname:'Jezel', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '30',lastname: 'Jandayan', firstname:'Jhaysine', add:'Baang, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '31',lastname: 'Patac', firstname:'Resty Jay', add:'Bagtic, Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
];

const Item = ({ lastname, firstname, add,icon }) => {
  // Extract the first letters of the first name and last name
  const firstInitial = firstname.charAt(0);
  const lastInitial = lastname.charAt(0);

  return (
    <View style={styles.wholeContainer}>
      <View style={styles.intialsContainer}><Text style={styles.initials}>{firstInitial}{lastInitial}</Text></View>
      <View style={styles.listItem}>
        
        <Text style={styles.listItemText}>{lastname}, {firstname}</Text>
        <Text style={styles.listItemAdd}>{add}</Text>
        
      </View>
      
     
      <View style={styles.iconContainer}>{icon}</View>
   
    </View>
  );
};

export default function App() {
   
      return (
        <SafeAreaView>
            <View style={styles.container}>
                
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Item lastname={item.lastname} firstname={item.firstname} add={item.add}  icon={item.icon}/>}
                    
                />
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
      
      backgroundColor: 'white',
      alignItems: 'left',
      height: 670,
      marginTop:170,
      
  },
  text: {
      fontSize: 18,
      color: '#101010',
      marginTop: 5,
      fontWeight: '700',
      fontFamily:'Arial',
      marginBottom:10
  },
  listItem: {
      marginTop: 15,
      
      alignItems: 'left',
      backgroundColor: '#fff',
      width: '70%'
  },
  listItemText: {
      fontSize: 18,
      fontWeight:'bold',
      fontFamily:'Arial'
    
  },
  listItemAdd:{
      fontSize:15,
      fontFamily:'Arial'
  },
  wholeContainer:{
      flexDirection:'row' ,
      

  },
  initials:{
    fontSize:15,
    fontWeight:'bold',
    fontFamily:'Arial',
    alignSelf:'center',
    margin:10,
    color:'white'
    
  },
  intialsContainer:{
      alignContent:'center',
      alignItems:'center',
     margin:10,
      backgroundColor:'blue',
      height:35,
      width:35,
      borderRadius:70
  },
  iconContainer: {
      margin: 10,
    },
});