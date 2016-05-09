import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
} from 'react-native';

import styles from './app/styles/styles';
import TagSetListContainer from './app/components/TagSetListContainer';
import TagSetEdit from './app/components/TagSetEdit';

function renderScene(route, navigator) {
  return <route.component route={route} navigator={navigator} {...route.passProps} />;
}

class TagManager extends Component {

  constructor() {
    super();
    this.state = {
      items: [
        {name: 'Learn', complete: false},
        {name: 'Make tagsets', complete: true}
      ]
    };
  }
  render() {
    return (
      <Navigator
        style={styles.navigator}
        initialRoute={{component: TagSetListContainer}}
        renderScene={renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('TagManager', () => TagManager);
