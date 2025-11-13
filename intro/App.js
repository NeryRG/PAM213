import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MenuScreen from './Screens/MenuScreen';

export default function App() {

  return (
    <GestureHandlerRootView style={{flex:1}}>
    <MenuScreen></MenuScreen>
    </GestureHandlerRootView>
  );
}