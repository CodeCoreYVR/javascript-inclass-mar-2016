var Hello = React.createClass({displayName: "Hello",
  render: function() {
    return React.createElement("div", null, "Hello World");
  }
});

var Box = React.createClass({displayName: "Box",
  render: function() {
    var circles = this.props.circles.map(function(color){
                    return React.createElement(Circle, {color: color});
                  });
    return React.createElement("div", {className: "box red"}, circles);
  }
});

var Circle = React.createClass({displayName: "Circle",
  render: function() {
    return React.createElement("div", {className: "circle", style: {backgroundColor: this.props.color}}
           )
  }
});

ReactDOM.render(React.createElement(Box, {circles: ["blue", "green", "cyan", "papayawhip"]}), document.getElementById('container'));
