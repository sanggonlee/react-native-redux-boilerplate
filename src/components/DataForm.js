import React from 'react';
import { connect } from 'redux'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class DataForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  submit = () => this.props.requestData(this.state.name)

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text stlye={styles.label}>Your name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({name: text})} />
        </View>
        <Button
          title='Go'
          onPress={this.submit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    height: 60
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    justifyContent: 'center',
    marginLeft: 8,
    width: 120
  }
});
