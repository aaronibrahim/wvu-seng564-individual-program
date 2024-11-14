import {  
    Button,
    Flex,
    Surface,
    Text,
    Stack
} from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

interface SortCardProps {
  id: number,
  index: number,
  title: string
  displayAttributes: string
  orderItemHigher: (id:number) => void
  orderItemLower: (id:number) => void
  
}

export default function SortCard(props:SortCardProps) {

  const surfaceStyles = {
    padding: 8,
    marginTop: 24
  }

  return (
      <Surface 
          elevation={1}
          style={surfaceStyles}
        >
          <Text
            style={{
              fontWeight: 'bold',
              paddingBottom: 8
            }}
          >{props.title}</Text>
          <Text>{props.displayAttributes}</Text>
          <Stack direction='row' spacing={8}>
            <Button 
              title="More Important" 
              color='green' 
              variant='contained' 
              trailing={props => <Icon color={"white"} name="arrow-up" />}
              onPress={ () => props.orderItemHigher(props.id) }
              pressEffect='none'
            />
            <Button 
              title="Less Important" 
              color='green' 
              variant='outlined' 
              trailing={props => <Icon color={"green"} name="arrow-down" />}
              onPress={ () => props.orderItemLower(props.id) }
              pressEffect='none'
            />
          </Stack>
        </Surface>
  );
}
