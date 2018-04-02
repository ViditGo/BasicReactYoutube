import React from "react";
import autobind from "react-autobind";

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    //this.onInputChange=this.onInputChange.bind(this);
    autobind(this);
    this.state = {term : ''}
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
  return (
  <div className="search-bar">
  <input onChange= {event => this.onInputChange(event.target.value)} value={this.state.term} />
  </div>
  );
  }

}

export default SearchBar;
