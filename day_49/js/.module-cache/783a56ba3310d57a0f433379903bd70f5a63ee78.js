var Name = React.createClass({displayName: "Name",
  render: function() {
    return React.createElement("li", null, this.props.name);
  }
});

var NameList = React.createClass({displayName: "NameList",
  getInitialState: function(){
    return {filteredNames: this.props.people};
  },
  filterNames: function(){
    var filterTerm = this.refs.userInput.value.toLowerCase();
    var filteredNames = this.props.people.filter(function(name){

                        });
  },
  render: function(){
    var people = this.state.filteredNames.map(function(name, index){
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

ReactDOM.render(React.createElement(NameList, {people: ["Greg", "Jon", "Jacob", "Todd", "Matthew"]}), document.getElementById('container'));
