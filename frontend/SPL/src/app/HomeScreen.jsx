import { StyleSheet, Text, View,FlatList,ScrollView,  Pressable, TouchableOpacity, Image } from 'react-native'
import React, { useState ,useEffect, use} from 'react'
import { getMatches } from '../APIs/league';
import {matches} from '../data/saudi-premier-league-2026-2027.json'
import Seperator from '../components/Seperator';
import { LOGO } from '../data/ClubLogo';
import { useRouter } from "expo-router";

export const Home = () => {
   
    const router = useRouter()

    const [selectedMatch , setSelectedMatch] = useState([])
    const [selectedDay, setSelectedDay] = useState(4);
    const [selectedLogo , setSelectedLogo] = useState(LOGO)
    
    
 
const getDate = (daysFromToday) => {
    const d = new Date();
    d.setDate(d.getDate() + daysFromToday);

    return d
        .toDateString()
        .replace(',', '')
        .replace(/ 0/, ' ')
        .slice(0,10)
        .trim();
};


const days = [
    {
        label: getDate(-4),
        date: getDate(-4)
    },
    {
        label: getDate(-3),
        date: getDate(-3)
    },
    {
        label: getDate(-2),
        date: getDate(-2)
    },
    {
        label: 'Yesterday',
        date: getDate(-1)
    },
    {
        label: 'Today',
        date: getDate(0)
    },
    {
        label: 'Tomorrow',
        date: getDate(1)
    },
    {
        label: getDate(2),
        date: getDate(2)
    },
    {
        label: getDate(3),
        date: getDate(3)
    },
    {
        label: getDate(4),
        date: getDate(4)
    },
   
];



    

const selectedDate = days[selectedDay].date;

console.log(days[0].date)


const filteredMatches = matches.filter(match => {
    return match.date ===  selectedDate;
});


    
 
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>SPL</Text>
            <View style={styles.nextToTitle}>
                
            </View>
        </View>
        <View style={styles.dates}>
              <FlatList
                    data={days}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    initialScrollIndex={5}
                    getItemLayout={(days, index) => ({
                        length: 120,
                        offset: 55 * index,
                        index,
                    })}
                    renderItem={({ item ,index}) => (
                        <Pressable style={{ width: 120 , marginTop:70}}>
                        <Text 
                            onPress={() => setSelectedDay(index)}
                            style={{
                                    color: selectedDay === index ? '#FFFFFF' : '#535252',
                                    fontSize:15,
                                    fontWeight:"bold"
                            }}>{item.label}</Text>
                        </Pressable>
                    )}

               
                 
                    />

                 <View style={styles.cardContainer}></View>
                    <View style={styles.cardOne}>
                         <Image source={require('../assets/images/SPL.png') } style={{width:20 , height:20}}/>
                         <Text style={styles.cardTitle}>SAUDI PREMIER LEAGUE</Text>
                     </View>


                <View style={styles.cardTwo}>
                   
                    <FlatList  data={filteredMatches}
                    
                            renderItem={({item ,index }) =>(
                            <View >
                              <TouchableOpacity
                                    onPress={() =>
                                        router.push({
                                        pathname: "/matchDetails",
                                        params: {
                                            id: item.id,
                                            homeTeam: item.home,
                                            awayTeam: item.away,
                                            time: item.time,
                                            homeScore: item.homeScore,
                                            awayScore: item.awayScore,
                                            isFinished: item.isFinished,
                                        },
                                        })
                                    }
                                    >
                                    <View style={styles.cardTwoContent}>
                                        <Text style={styles.clubName}>{item.home}</Text>

                                        <Image
                                        source={LOGO[item.home]}
                                        style={styles.clubLogo}
                                        />

                                        <View style={styles.matchInfo}>
                                        {item.isFinished ? (
                                            <Text style={styles.score}>
                                            {item.homeScore} - {item.awayScore}
                                            </Text>
                                        ) : (
                                            <Text style={styles.time}>{item.time}</Text>
                                        )}
                                        </View>

                                        <Image
                                        source={LOGO[item.away]}
                                        style={styles.clubLogo}
                                        />

                                        <Text style={styles.clubName}>{item.away}</Text>
                                    </View>

                                    <Seperator />
                                    </TouchableOpacity>
                            </View>
                           
                    )}
                    
                    ListEmptyComponent={
                        <Text style={styles.cardNoContent}>
                            No matches found
                        </Text>
                    }
                />
                   
             
            </View>
               
         </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    titleContainer:{
    
        marginTop:85,
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'white'
    },
   
    matchesContainer:{
        flexDirection:'row' ,
        justifyContent:'center',
        alignItems:'center' ,
        marginTop:10
    },
    cardContainer:{
        maxWidth:"95%"
    },
    cardOne:{
        flexDirection:'row',
        backgroundColor:'#302F2F',
        marginTop:70,
        marginLeft: 10,
        width:'95%',
        height:50 ,
        borderColor:'#302F2F' ,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
        borderWidth:3,
        justifyContent:'start',
        alignItems:'center' ,
        color:'white'
    },
    cardTwo: {
    backgroundColor: '#1A1A1A',
    marginLeft: 10,
    width: '95%',
    minHeight: 100,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
},
    cardTitle:{
        color:'white',
        justifyContent:'center',
        marginLeft:8,
        fontSize:14
    },
    cardTwoContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        marginTop: 20,
        marginBottom: 20,
    },
    cardNoContent:{
        color:'white',
        textAlign:'center',
        marginTop:30
    
        
        
    },
    clubName: {
        color: 'white',
        fontSize: 14,
    },
    clubLogo: {
  width: 25,
  height: 25,
  resizeMode: 'contain',
},
    time: {
    color: 'white',
    fontSize: 14,
    },
    score: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    listMatches:{
        flexDirection:'row',
    
       
    }
})

