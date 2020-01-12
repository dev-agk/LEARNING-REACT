import React, { Component } from "react";

class Counter extends Component {
  state = {
    //has any data the component needs
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    //TOLEARN: setting properties for styles? how does browser understnad this? as json?
    fontWeight: "bold",
    fontSIze: 20
  };
  render() {
    return (
      <div>
        {/* 
        TOLEARN: anonymous object[{{}}]?
        <span style={{ fontSize: 30 }} className="badge badge-primary m-2"> 
          {this.formatCount()} 
        */}
        {this.renderTagsConditionally()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //TOLEARN: OBJECT DESTRUCTURING
    let { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  //React is not a templating engine like angular so there are no loops, conditional statements etc
  renderList() {
    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  //Method to achieve conditional rendering use javascript
  renderTagsConditionally() {
    let tagLength = this.state.tags.length;
    return tagLength === 0 ? (
      <p>No tags</p>
    ) : (
      <div>
        <p>The tags are :</p>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

export default Counter;
