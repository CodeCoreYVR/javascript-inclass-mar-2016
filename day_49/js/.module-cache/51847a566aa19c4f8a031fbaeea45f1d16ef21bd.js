var Name = React.createClass({displayName: "Name",
  render: function() {
    return React.createElement("li", null, this.props.name);
  }
});

var NameList = React.createClass({displayName: "NameList",
  filterNames: function(){
    var filterTerm = this.refs.userInput.value.toLowerCase();

  },
  render: function(){
    var people = this.props.people.map(function(name, index){
      return React.createElement(Name, {name: name, key: index})
    });
    return React.createElement("div", null, 
            React.createElement("input", {type: "text", ref: "userInput", onChange: this.filterNames}), 
              React.createElement("ul", null, 
               people
              )
           )
  }
});
