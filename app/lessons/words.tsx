import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Link } from 'expo-router'

const Words = () => {
  return (
    <View className='flex flex-column p-4 gap-4'>
      <Stack.Screen
        options={{
          title: 'Words',
        }}
      />
      <View className='bg-white rounded-lg p-4'>
        <Text className='text-3xl'>Words</Text>
        <Text className='text-lg'>
          Learn the most common words in Ukrainian
        </Text>
        <Link href='/lessons/words'>
          <Text className='text-blue-500'>Start</Text>
        </Link>
      </View>
      <View className='bg-blue-500 p-4'>
        <Text className='text-3xl'>Phrases</Text>
      </View>
      <View className='bg-blue-500 p-4'>
        <Text className='text-3xl'>Conversations</Text>
      </View>
      <View className='bg-blue-500 p-4'>
        <Text className='text-3xl'>Grammar</Text>
      </View>
    </View>
  )
}

export default Words

const styles = StyleSheet.create({})