import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import store from './Redux/store';
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 14, }}>App Template</Text>
        </View>
      </Provider>
    )
  }
}
export default App;