var NameList = React.createClass({displayName: "NameList",
  render: function(){
    var people = this.props.people.map(function(name, index){
      return React.createElement(Name, {name: name, key: index})
    });
    return React.createElement("div", null, 
            people
           )
  }
});
