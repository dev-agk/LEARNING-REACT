import React, { Component } from "react";

class Counter extends Component {
  state = {
    //has any data the component needs
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  constructor() {
    //need to call the constructor of Component class from where we are inheriting
    //super(); -> what is this
    //In JS every function is an object, therefore the bind property can be used on each function.
    //this.handleIncrements.bind(this); -> why bind is needed?
  }
  //you can use arraow functions to inherit without constructors and bind()
  // handleIncements= ->(){}
  handleIncrements() {
    //Questions?
    //https://www.phpied.com/3-ways-to-define-a-javascript-class/ -> everything in javascript os actually an object.
    //handleIncrements() -> Is a method of the class counter -> which is an object? If so shouldnt this return a reference to the class?
    //Why is a constructor needed?
    //Notes:
    // In javascript if a function who is a member of the object -> this returns reference to that object.
    // However if a standalone function is called it returns undefined in strict mode, and reference to the window object by default
    // We use the bind() method to solve the above.
    //does not work without the constructor
    //https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    //this.state.count++; -> dont use this use setState();
  }

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
