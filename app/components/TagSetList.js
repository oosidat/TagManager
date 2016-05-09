import React, {
  Component,
  ListView
} from 'react-native';

import styles from '../styles/styles';
import TagSet from './TagSet';

class TagSetList extends Component {
  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
  }

  render() {
    const dataSource = this.dataSource.cloneWithRows(this.props.items);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={(rowData, sectionID, rowID) =>
          <TagSet item={rowData}
            onPress={() => this.props.onPressItem(rowData, rowID)}
            onLongPress={() => this.props.onLongPressItem(rowData, rowID)} />
        }
      style={styles.listView}/>
    );
  }
}

export default TagSetList;
