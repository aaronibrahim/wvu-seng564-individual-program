import {  Button,
          Image,
          Pressable,
          ScrollView, 
} from 'react-native';
import {  AppBar, 
          Avatar,
          Box,
          IconButton,
          Stack,
          Text,
} from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';
import { useSafeArea } from 'react-native-safe-area-context';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Directions } from 'react-native-gesture-handler';

export default function HomeScreen() {
  
  const navigation = useNavigation();

  return (
    <>
      <AppBar
        style={{
          paddingTop: 15,
          paddingBottom: 15,
          paddingRight: 10
        }}
        title="My Home Target" 
        color="#2196F3"
        tintColor="#ffffff"
        leading={props => (
          <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
        )}
        trailing={props => (
          <Avatar 
            color="#aab7b8"
            tintColor='#ffffff'
            initials={true} 
            label={"Aaron Ibrahim"} 
            size={48} 
          />
        )}
      />
      <ScrollView
        style={{
          padding: 10,
          backgroundColor: "#ffffff"
        }}
      >
        {/* BGN: Header */}
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 10,
            columnGap: 40
          }}
        >
          <Box
            style={{
              flex: .4,
              display: 'flex',
              flexDirection: 'column',
              alignContent:'flex-start',
            }}
          >
            <Image 
                source={require('@/assets/images/realtor-photo.png')}
                style={{
                  width: '100%',
                }}
                resizeMode='contain'
              />          
          </Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              flex: .6
            }}
          >
            <Image 
              source={require('@/assets/images/remax-logo.png')}
              style={{
                width: '100%',
                aspectRatio: '5',
                height: 'auto',
                marginBottom: 8
  
              }}
              resizeMode='contain'
            />
            <Text>
              <Text style={{ fontWeight: "bold"}} >Phil Haines</Text> · Realtor
            </Text>
            <Text>RE/MAX Greater Central Valley</Text>
            <Text>(614) 555-5555</Text>
            <Text>phaines@remaxgcv.com</Text>
          </Box>
        </Box>
        {/* END: Header */}
        
        {/* BGN: Welcome Heading */}
        <Box>
          <Text variant="h3" style={{
            fontSize: 25,
          }}>Welcome, Aaron!</Text>
        </Box>
        {/* END: Welcome Heading */}

        {/* BGN: Welcome Message Body */}
        <Box>
          <Text style={{marginTop: 20}} >
            It was so great to meet you and Emily last Saturday, and I'm proud to welcome you to RE/MAX Greater Central Valley family!
          </Text>
          <Text style={{marginTop: 20}} >
            I have helped thousands of clients like you find their perfect home in the Central Valley region and the My Home Target app will help us get there.
          </Text>
          <Text style={{marginTop: 20}} >
            It's easy! Click on the Get Started button below, on the next page you'll find I have already entered the priorities we spoke through during our first meeting. But priorities change! Make your Home Target reflect the best home for your family and I will get to work making it a reality!        
          </Text>
        </Box>
        {/* END: Welcome Message Body */}

        {/* BGN: Signature */}
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}
        >
          <Stack
            direction='column'
            style={{
              width: '65%',
              paddingTop: 25
            }}
          >
            <Image 
              source={require('@/assets/images/signature.png')}
              style={{
                width: '75%',
                flex: 1,
                height: 'auto',
                aspectRatio: 2
              }}
              resizeMode='contain'
            />
            <Text>
              <Text style={{ fontWeight: "bold"}} >Phil Haines</Text> · Realtor
            </Text>
            <Text>RE/MAX Greater Central Valley</Text>
          </Stack>
        </Box>
        {/* END: Signature */}
        {/* BGN: Button */}
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 32,
          }}        
        >
          <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '65%',
            paddingBottom: 100
          }}
          >
            <Link href="/sort" asChild>
              <Pressable
                style={{
                  padding: 15,
                  backgroundColor: 'green',
                  borderRadius: 10
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center'
                  }}
                >Let's Get Started!</Text>
              </Pressable>
            </Link>
          </Box>
        </Box>
        {/* BGN: Button */}
      </ScrollView>
    </>
  );
}
