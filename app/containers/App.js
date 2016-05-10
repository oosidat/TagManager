import React, {
  Component,
  StyleSheet,
  Navigator,
} from 'react-native';

import styles from '../styles/styles';
import TagSetManagerContainer from './TagSetManagerContainer';

function renderScene(route, navigator) {
  return <route.component route={route} navigator={navigator} {...route.passProps} />;
}

class NavWrapper extends Component {
  render() {
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={{component: TagSetManagerContainer}}
        renderScene={renderScene}
      />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <NavWrapper/>
    );
  }
}
