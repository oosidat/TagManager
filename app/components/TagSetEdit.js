import React, {
  Component,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import FormStuff from 'tcomb-form-native';
import styles from '../styles/styles';
import NavigationBar from 'react-native-navbar';

const Form = FormStuff.form.Form;
const TagSet = FormStuff.struct({
  name: FormStuff.Str,
  tags: FormStuff.maybe(FormStuff.Str)
});

const options = {
  fields: {
    name: {
      label: 'Set Name',
      placeholder: 'Enter TagSet Name here',
      autofocus: true,
      error: 'Set Name Can\'t Be Empty!'
    },
    tags: {
      label: 'Tags',
      placeholder: 'Add hashtags here'
    }
  }
}

class TagSetEdit extends Component {
  constructor() {
    super();
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate() {
    const value = this.refs.form.getValue();
    if (value) new Promise((resolve, reject) => {
      this.props.update(value, this.props.id);
    });
  }

  render() {

    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigator.pop()
    }

    const rightButtonConfig = {
      title: 'Save',
      handler: () => this.onUpdate()
    }

    const titleConfig = {
      title: 'Edit'
    }

    return (
      <View style={styles.tagSetEdit}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
          leftButton={leftButtonConfig} />
        <Form
          ref="form"
          type={TagSet}
          onChange={this._onChange}
          options={options}
          value={this.props.item}
        />
      </View>
    )
  }

}

export default TagSetEdit;
