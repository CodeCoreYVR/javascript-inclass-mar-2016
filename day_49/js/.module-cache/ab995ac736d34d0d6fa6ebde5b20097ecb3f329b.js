var Hello = React.createClass({displayName: "Hello",
  render: function() {
    return React.createElement("div", null, "Hello World");
  }
});

var Box = React.createClass({displayName: "Box",
  getInitialState: function() {
    return {lastClicked: "N/A"};
  },
  render: function() {
    var circles = this.props.circles.map(function(color, index){
                    return React.createElement(Circle, {color: color, key: index});
                  });
    return React.createElement("div", {className: "box red"}, 
              circles, 
              "You last click the ", this.state.lastClicked, " circle"
           );
  }
});

var Circle = React.createClass({displayName: "Circle",
  render: function() {
    return React.createElement("div", {className: "circle", style: {backgroundColor: this.props.color}}
           )
  }
});

ReactDOM.render(React.createElement(Box, {circles: ["blue", "green", "cyan", "papayawhip"]}), document.getElementById('container'));
