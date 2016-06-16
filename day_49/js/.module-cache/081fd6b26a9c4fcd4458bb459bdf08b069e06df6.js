var Hello = React.createClass({displayName: "Hello",
  render: function() {
    return React.createElement("div", null, "Hello World");
  }
});

var Box = React.createClass({displayName: "Box",
  render: function() {
    return React.createElement("div", {className: "box red"});
  }
});

var Circle = React.createClass({displayName: "Circle",

});

ReactDOM.render(React.createElement(Hello, null), document.getElementById('container'));
