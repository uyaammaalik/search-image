import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  docTitle = (event) => {
    this.props.getTitle("Search Images");
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.getInputData(this.state.term);
    //  console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              name=""
              id=""
              value={this.state.term}
              placeholder="Type image type"
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
