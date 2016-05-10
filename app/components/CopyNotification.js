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
    Animated.sequence([
      Animated.timing(
        this.state.fadeAnim,
        {
          duration: this.props.fadeInDuration,
          toValue: 1
        }
      ),
      Animated.timing(
        this.state.fadeAnim,
        {
          delay: this.props.fadeOutDelay,
          duration: this.props.fadeOutDuration,
          toValue: 0
        }
      )
    ])
    .start();
  }

  render() {
    return (
      <Animated.View style={[styles.copyNotification, {opacity: this.state.fadeAnim}]}>
        <Text style={styles.copyNotificationText}>Copied!</Text>
      </Animated.View>
    );
  }
}

CopyNotification.defaultProps ={
  fadeInDuration: 300,
  fadeOutDelay: 700,
  fadeOutDuration: 500
}

export default CopyNotification;
