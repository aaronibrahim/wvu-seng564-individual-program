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

import { useSafeArea } from 'react-native-safe-area-context';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Directions } from 'react-native-gesture-handler';

export default function SortScreen() {
const insets = useSafeArea();

return (
<>
<AppBar
  style={{
    paddingTop: insets.top, 
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
  {/* BGN: Page Body */}
  <Box
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 10,
      columnGap: 40
    }}
  >
    <Text>Hello from sort screen</Text>
  </Box>
  {/* END: Page Body */}
  </ScrollView>
</>
);
}
