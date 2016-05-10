import React, { Component } from 'react-native';
import TagSetManager from '../components/TagSetManager';

export default class TagSetManagerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCopied: false,
      items: [
        {name: 'Hello', tags: '#this #hello #is'},
        {name: 'Stuff'},
        {name: 'Beans', tags: '#cool #beans'},
        {name: 'Good'},
      ]
    }
  }
  render() {
    const navigator = this.props.navigator;
    const toggleShowCopied = () => {
      this.setState({showCopied: !this.state.showCopied});
    }

    const updateItem = (item, index) => {
      const items = this.state.items;
      if (index) {
        items[index] = item;
      } else {
        items.push(item)
      }
      this.setState({items: items});
      navigator.pop();
    }
    return (
      <TagSetManager
        navigator={navigator}
        tagSets={this.state.items}
        showCopied={this.state.showCopied}
        toggleShowCopied={toggleShowCopied}
        updateItem={updateItem}
      />
    );
  }
}
