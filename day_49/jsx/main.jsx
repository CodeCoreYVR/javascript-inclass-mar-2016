var Hello = React.createClass({
  render: function() {
    return <div>Hello World</div>;
  }
});

var Box = React.createClass({
  getInitialState: function() {
    return {lastClicked: "N/A"};
  },
  setLastClicked: function(color) {
    this.setState({lastClicked: color});
  },
  printToConsole: function(){
    console.log(this.refs.userInput.value);
  },
  render: function() {
    var circles = this.props.circles.map(function(color, index){
                    return <Circle color={color}
                                   notifyParent={this.setLastClicked}
                                   key={index}/>;
                               }.bind(this));
    return <div className="box red">
              <input type="text" ref="userInput" onChange={this.printToConsole} />
              {circles}
              You last click the {this.state.lastClicked} circle
           </div>;
  }
});

var Circle = React.createClass({
  notifyParentContainer: function(){
    this.props.notifyParent(this.props.color);
  },
  render: function() {
    return <div className="circle"
                onClick={this.notifyParentContainer}
                style={{backgroundColor: this.props.color}}>
           </div>
  }
});

ReactDOM.render(<Box circles={["blue", "green", "cyan", "papayawhip"]} />, document.getElementById('container'));
