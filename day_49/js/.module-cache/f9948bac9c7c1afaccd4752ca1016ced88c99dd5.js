var Hello = React.createClass({displayName: "Hello",
  render: function() {
    return React.createElement("div", null, "Hello World");
  }
});

var Box = React.createClass({displayName: "Box",
  getInitialState: function() {
    return {lastClicked: "N/A"};
  },
  setLastClicked: function(color) {
    this.setState({lastClicked: color});
  },
  render: function() {
    var circles = this.props.circles.map(function(color, index){
                    return React.createElement(Circle, {color: color, 
                                   notifyParent: this.setLastClicked, 
                                   key: index});
                               }.bind(this));
    return React.createElement("div", {className: "box red"}, 
              React.createElement("input", {type: "text", ref: "color", onChange: this.print}), 
              circles, 
              "You last click the ", this.state.lastClicked, " circle"
           );
  }
});

var Circle = React.createClass({displayName: "Circle",
  notifyParentContainer: function(){
    this.props.notifyParent(this.props.color);
  },
  render: function() {
    return React.createElement("div", {className: "circle", 
                onClick: this.notifyParentContainer, 
                style: {backgroundColor: this.props.color}}
           )
  }
});

ReactDOM.render(React.createElement(Box, {circles: ["blue", "green", "cyan", "papayawhip"]}), document.getElementById('container'));
