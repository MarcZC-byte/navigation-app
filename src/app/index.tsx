import { StatusBar, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import "./global.css"

const App = () => {
  return (
    <SafeAreaView className='mt-10 ml-10'>
      <Text style={{
        fontFamily: 'WorkSans-Black',
      }} className='text-4xl text-secondary-200 '>App</Text>
      <StatusBar barStyle="dark-content" />

      <Text style={{
        fontFamily: 'WorkSans-Medium'
      }} className='text-3xl text-primary'>App</Text>
      <StatusBar barStyle="dark-content" />

      <Text style={{
        fontFamily: 'WorkSans-Light'
      }} className='text-2xl'>App</Text>
      <StatusBar barStyle="dark-content" />

    </SafeAreaView>
  )
}

export default App