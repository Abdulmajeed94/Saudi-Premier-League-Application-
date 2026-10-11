
import { useState , useEffect } from 'react';
import { Platform,  SafeAreaViewBase,  StyleSheet ,Text , View} from 'react-native';
import { SafeAreaView } from 'react-native';
import Splash from '../screen/Splash'
import Home from './HomeScreen'
import MatchDetails from './matchDetails'
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  withRepeat,
  SharedValue
} from 'react-native-reanimated';







export default function HomeScreen() {

  
  const [isLodaing , setIsLoading] = useState(true)
  const opacity = useSharedValue(0)

   const animatedStyle = useAnimatedStyle(() => {
      return {
        opacity: opacity.value,
       
      };
    });
  

  useEffect(() =>{
    opacity.value = withTiming(1,{
        duration:1000,
        reduceMotion: ReduceMotion.Never
    })
   
  },[])
  
  useEffect(() => {
   const timer = setTimeout(()=>{
      setIsLoading(false)
    }, 3000)
  
   return () => clearTimeout(timer);
  }, [])
  
  return (
    <>

            <View style={styles.container}>
              {isLodaing ? (
                <Animated.View style={[styles.content, animatedStyle]}>
                  <Splash />
                </Animated.View>
                  ) : (
                    
                    <Home />
                  )}
                
            </View>
       
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
