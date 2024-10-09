import { View, Text } from 'react-native'
import React from 'react'

const NameText = ({toggle}) => {

  return (
    <View style={{paddingBottom: 15, paddingTop: 15}}>
      <Text style={{
        fontSize: 35,
        fontWeight: 'bold',
        color: toggle ? '#FFF' : '#000'}}>
          KURT NICULI
      </Text>

      <Text style={{
        fontSize: 45,
        color: toggle ? '#DDD' : '#e1e1cc',
        fontWeight: 'bold'}}>
          DAYAO
      </Text>
    </View>
  )
}

export default NameText