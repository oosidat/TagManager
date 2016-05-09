import React, {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  navigator: {flex: 1},

  containerView: {
    flex: 1,
    marginTop: 10,
    paddingTop: 10
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 15,
    backgroundColor: '#ffffff',
  },

  copyNotification: {
    height: 36,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'green'
  },

  copyNotificationText: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'white'
  },
  
  todo: {
    marginTop: 10,
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },

  name: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 2,
    color: '#222222',
  },

  hr: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: 1,
    marginLeft: 0,
    marginRight: 0,
  }
});

module.exports = styles;
