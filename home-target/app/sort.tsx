import React, { useState } from 'react';
import { 
    Image,
    ScrollView, 
} from 'react-native';
import {  AppBar, 
    Avatar,
    Box,
    Button,
    IconButton,
    Portal,
    Pressable,
    Stack,
    Surface,
    Text,
} from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { default as SortCard } from './SortCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SortScreen() {

  const surfaceStyles = {
    padding: 8,
    marginTop: 24
  }

  const storeData = async (value:any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-key', jsonValue);
    } catch (e) {
      console.log("Saving error", e);
    }
  };

  const defaultSortCards = [
    { 
      id: 1,
      title: "Square Footage",
      displayAttributes: "Min: 1200sqft | Max: 2100sqft"
    },
    { 
      id: 2,
      title: "Home Style",
      displayAttributes: "Tudor, Duplex, Standalone Home"
    },
    { 
      id: 3,
      title: "Land",
      displayAttributes: "Min: 0.5acr | Max: 2acr"
    },
    { 
      id: 4,
      title: "School District",
      displayAttributes: "Tampa City School District"
    },
    { 
      id: 5,
      title: "School District",
      displayAttributes: "Monogalia County Schools"
    },
    { 
      id: 6,
      title: "Bedrooms",
      displayAttributes: "3"
    },
    { 
      id: 7,
      title: "Bathrooms",
      displayAttributes: "2.5"
    },
    {
      id: 8,
      title: "HOA",
      displayAttributes: "none"
    },
    {
      id: 9,
      title: "Price",
      displayAttributes: "Min: $200,000 | Max: $400,000"
    },
    {
      id: 10,
      title: "Built",
      displayAttributes: "After 2000"
    }

  ];

  const [sortCards, setSortCards] = useState(defaultSortCards);
  const orderItemHigher = (id:number) => {
    let transitionArray = [...sortCards];
    const itemToMoveIndex = transitionArray.findIndex(item => item.id === id);
    let itemToMove;

    if (itemToMoveIndex !== 0) {
      itemToMove = transitionArray.splice(itemToMoveIndex, 1);
      transitionArray.splice(itemToMoveIndex - 1, 0, itemToMove[0]);
    }

    console.log(transitionArray);
    setSortCards([...transitionArray]);
  }
  

  const orderItemLower = (id:number) => {
    let transitionArray = [...sortCards];
    const itemToMoveIndex = transitionArray.findIndex(item => item.id === id);
    let itemToMove;

    if (itemToMoveIndex !== ( transitionArray.length - 1 ) ) {
      itemToMove = transitionArray.splice(itemToMoveIndex, 1);
      transitionArray.splice(itemToMoveIndex + 1, 0, itemToMove[0]);
    }

    console.log(transitionArray);
    setSortCards([...transitionArray]);
  }

  return (
  <>
  <AppBar
    style={{
      paddingTop: 10, 
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
        <Text variant='h3' style={{
          fontSize: 25,
          marginBottom: 16
        }}>Set your priorities</Text>
      </Box>
      {/* END: Page Body */}

      <Stack>
        {sortCards.map( (sortCard, idx) => (
          <SortCard
            key={sortCard.id}  
            index={idx}
            orderItemHigher={orderItemHigher}
            orderItemLower={orderItemLower}
            {...sortCard}
          />
        ))}
      </Stack>
      <Button 
            title="New Priority" 
            color='blue' 
            trailing={props => <Icon color={"white"} name="plus" />}
            onPress={ () => null }
            pressEffect='none'
      />
    </ScrollView>
  </>
  );
}
