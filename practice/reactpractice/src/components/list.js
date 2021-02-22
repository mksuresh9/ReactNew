import React from "react";

class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.data.name}</li>
        </ul>
      </div>
    );
  }
}

export default List;
