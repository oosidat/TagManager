import React, {
  Component,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import styles from '../styles/styles';

class TagSet extends Component {
  render() {
    const item = this.props.item;

    return (
      <View>
        <TouchableHighlight
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}>
          <View style={styles.container}>
            <Text
              style={[styles.name, item.complete && styles.completed]}>
              {item.name}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.hr}/>
      </View>
    );
  }
}

export default TagSet;
