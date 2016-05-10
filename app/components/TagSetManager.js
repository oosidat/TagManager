import React, {
  Clipboard,
  Component,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import styles from '../styles/styles';

import CopyNotification from './CopyNotification';
import TagSetList from './TagSetList';
import TagSetEdit from './TagSetEdit';

export default class TagSetManager extends Component {

  render() {
    const { updateItem, toggleShowCopied, showCopied, tagSets, navigator } = this.props;

    const openTagSetEdit = (opts) => {
      const options = Object.assign({}, {title: 'Edit', component: TagSetEdit}, opts)
      navigator.push(options)
    }

    const navBarConfig = {
      title: {
        title: 'TagSets'
      },
      rightButton: {
        title: 'Add',
        handler: () => openTagSetEdit({
          title: 'New TagSet',
          passProps: {
            update: updateItem
          }
        })
      }
    }

    const openItem = (rowData, rowID) => {
      openTagSetEdit({
        title: rowData && rowData.name,
        passProps: {
          item: rowData,
          id: rowID,
          update: updateItem
        }
      });
    }

    const copyTags = (rowData, rowID) => {
      Clipboard.setString(rowData.tags);
      toggleShowCopied();
      setTimeout(() => {
        toggleShowCopied();
      }, 1500);
    }

    return (
      <View style={styles.containerView}>
        <NavigationBar
          title={navBarConfig.title}
          rightButton={navBarConfig.rightButton} />
        <TagSetList
          items={tagSets}
          onPressItem={openItem}
          onLongPressItem={copyTags}
        />
        { showCopied ? <CopyNotification /> : null }
      </View>
    );
  }
}

export default TagSetManager;
