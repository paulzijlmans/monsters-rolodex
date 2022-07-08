import { Component } from 'react';

import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    const { classname, placeholder, onChangeHandler } = this.props;
    return (
      <input
        className={`search-box ${classname}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
