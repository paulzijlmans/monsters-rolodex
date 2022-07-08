import { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { classname, placeholder, onChangeHandler } = this.props;
    return (
      <input
        className={classname}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
