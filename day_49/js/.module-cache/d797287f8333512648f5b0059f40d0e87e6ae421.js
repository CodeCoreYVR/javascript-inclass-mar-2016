var List = React.createClass({displayName: "List",
  render: function(){
    var tasks = this.props.tasks.map(function(name, index){
      return React.createElement(Task, {name: name, 
                   key: index})
    });
    return React.createElement("div", null, 
              tasks
           );
  }
});

var Task = React.createClass({displayName: "Task",
  getInitialState: function() {
    return {textDecoration: 'none'};
  },
  crossOut: function(){
    if(this.state.textDecoration === 'line-through') {
      this.setState({textDecoration: 'none'});
    } else {
      this.setState({textDecoration: 'line-through'});
    }
  },
  render: function(){
    return React.createElement("div", {style: {textDecoration: this.state.textDecoration}}, 
            React.createElement("input", {type: "checkbox", onChange: this.crossOut}), 
            this.props.name
           );
  }
});

ReactDOM.render(React.createElement(List, {tasks: ["Task 1", "Task 2", "Task 2"]}),
                document.getElementById('container'));
