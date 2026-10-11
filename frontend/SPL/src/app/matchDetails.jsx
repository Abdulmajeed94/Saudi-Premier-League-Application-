import React, { useState } from "react";
import {
 View,
 Text,
 StyleSheet,
 SafeAreaView,
 Pressable,
 ScrollView,
 Image
} from "react-native";
import {LOGO} from '../data/ClubLogo'

import { useLocalSearchParams } from "expo-router";

export const MatchDetails = () => { 

   const { id, homeTeam , awayTeam , homeScore , awayScore , time , isFinished} = useLocalSearchParams();

   
  
   return (
    <View style={style.container}>
        <View style={style.scoreContainer}>
           <View style={{flexDirection:"column",marginRight:30}}>
                
                <Image source={LOGO[homeTeam]} style={{width:50 , height:50,marginLeft:50 , marginTop:30}}/>
                <Text style={style.homeTeamTitle}>{homeTeam} </Text>
            </View>
            {isFinished ? <Text style={style.teamTitle}>{homeScore} - {awayScore}</Text>
                : <Text style={style.time}>{time}</Text>}
            <View style={{flexDirection:"column" , marginLeft:30}}>
                <Image source={LOGO[awayTeam]} style={{width:50 , height:50, marginRight:50, marginTop:30}}/>
                <Text style={style.awayTeamTitle}>{awayTeam} </Text>
            </View>
        </View>
    </View>
   )
  }
  export default MatchDetails

  const style = StyleSheet.create({
    container:{
        flex:1,

        backgroundColor:"#050505",
       

    },
    scoreContainer:{
      flexDirection:"row",
      backgroundColor:"#121212",
      height:350,
      justifyContent:"center",
      alignItems:"center",
      

    },
    
    homeTeamTitle:{
      color:'white',
      fontSize:20,
      marginTop:20
     
    },
    awayTeamTitle:{
      color:'white',
      fontSize:20,
      marginTop:20,
    
    
    },
    time:{
      fontSize:40,
      color:"white"
    }
  })