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
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>{this.renderList()}</ul>
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
  renderTagsConditionally() {}
}

export default Counter;
