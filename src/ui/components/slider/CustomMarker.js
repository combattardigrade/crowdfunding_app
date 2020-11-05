import React,{memo} from 'react'
import {View} from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { colors } from '../../../constants/colors';


export default memo(()=> {
    return(
        <View style={{width:20,height:20,backgroundColor:"white",borderRadius:20,borderColor:colors.borderColor,borderWidth:1,top:4}}/>
    )
})