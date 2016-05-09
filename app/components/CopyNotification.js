import React, {
  Animated,
  Component,
  Text,
  View
} from 'react-native';

import styles from '../styles/styles';

class CopyNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        duration: 400,
        toValue: 1
      }
    ).start();
  }

  render() {
    return (
      <Animated.View style={[styles.copyNotification, {opacity: this.state.fadeAnim}]}>
        <Text style={styles.copyNotificationText}>Copied!</Text>
      </Animated.View>
    );
  }
}

export default CopyNotification;
