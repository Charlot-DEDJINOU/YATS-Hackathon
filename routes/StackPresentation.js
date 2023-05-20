import {createStackNavigator} from 'react-navigation-stack' ;
import {createAppContainer} from 'react-navigation' ;
import Presentation from '../screens/Presentation';
import ShowLevel from '../screens/ShowLevel';

const screens={
    Hom :{
        screen: Presentation
    },
    ShowLevel: {
        screen: ShowLevel
    }
}

const PresentationStack = createStackNavigator(screens)

export default createAppContainer(PresentationStack)