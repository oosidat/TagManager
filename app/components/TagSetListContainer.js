import React, {
  AlertIOS,
  Clipboard,
  Component,
  ListView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import styles from '../styles/styles';

import CopyNotification from './CopyNotification';
import TagSetList from './TagSetList';
import TagSetEdit from './TagSetEdit';

class TagSetListContainer extends Component {
  constructor() {
    super();
    this.state = {
      showCopied: false,
      items: [
        {name: 'Learn'},
        {name: 'Make tagsets'},
        {name: 'Learn'},
        {name: 'Make tagsets'},
        {name: 'Learn'},
        {name: 'Make tagsets'},
        {name: 'Learn'},
        {name: 'Make tagsets'},
        {name: 'Learn'},
        {name: 'Make tagsets'},
        {name: 'Learn'},
        {name: 'Make tagsets'},
        {name: 'Learn'},
        {name: 'Make tagsets'},
        {name: 'Learn'},
        {name: 'Make tagsets'},
        {name: 'Learn'},
        {name: 'Make tagsets'},
        {name: 'Learn'},
        {name: 'Make tagsets'},
        {name: 'Learn'},
        {name: 'Make tagsets'}
      ]
    };
    this.copyTags = this.copyTags.bind(this);
    this.openItem = this.openItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  copyTags(rowData, rowID) {
    Clipboard.setString(rowData.tags);
    this.setState({ showCopied: true });
    setTimeout(() => {
      this.setState({ showCopied: false })
    }, 1500);
  }

  openItem(rowData, rowID) {
    this.props.navigator.push({
      title: rowData && rowData.name,
      component: TagSetEdit,
      passProps: {
        item: rowData,
        id: rowID,
        update: this.updateItem
      }
    });
  }

  updateItem(item, index) {
    const items = this.state.items;
    if (index) {
      items[index] = item;
    } else {
      items.push(item)
    }
    this.setState({items: items});
    this.props.navigator.pop();
  }

  render() {
    const rightButtonConfig = {
      title: 'Add',
      handler: () => this.props.navigator.push({
        title: 'New TagSet',
        component: TagSetEdit,
        passProps: {update: this.updateItem}
      })
    }

    const titleConfig = {
      title: 'TagSets'
    }

    return (
      <View style={styles.containerView}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig} />
        <TagSetList
          items={this.state.items}
          onPressItem={this.openItem}
          onLongPressItem={this.copyTags}
        />
        { this.state.showCopied ? <CopyNotification /> : null }
      </View>
    );
  }
}

export default TagSetListContainer;
