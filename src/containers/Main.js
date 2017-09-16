import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';

import DataForm from '../components/DataForm';
import { requestData } from '../actions';

@connect(state => ({data: state.data}), {requestData})
export default class Main extends React.Component {

  getData = (name) => {
    this.props.requestData(name)
      .then(() => {
        this.refs.toast.show(this.props.data.message, DURATION.LENGTH_LONG);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <DataForm
          requestData={(name) => this.getData(name)} />
        <Toast
          ref="toast"
          position="top" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
