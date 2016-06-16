var Name = React.createClass({displayName: "Name",
  nameMatched: function(){
    return this.props.name === null || this.props.name.toLowerCase().match(this.props.filterTerm.toLowerCase());
  },
  render: function() {
    if(nameMatched()) {
      var styles = {display: "list-item"};
    } else {
      var styles = {display: "none"};
    }
    return React.createElement("li", {style: styles}, this.props.name);
  }
});

var NameList = React.createClass({displayName: "NameList",
  getInitialState: function(){
    return {filterTerm: null};
  },
  filterNames: function(){
    var filterTerm = this.refs.userInput.value.toLowerCase();
    this.setState({filterTerm: filterTerm});
  },
  render: function(){
    var people = this.props.people.map(function(name, index){
      return React.createElement(Name, {name: name, 
                  key: index, 
                  filterTerm: this.state.filterTerm})
              }.bind(this));
    return React.createElement("div", null, 
            React.createElement("input", {type: "text", ref: "userInput", onChange: this.filterNames}), 
              React.createElement("ul", null, 
               people
              )
           )
  }
});

// var NameList = React.createClass({
//   getInitialState: function(){
//     return {filteredNames: this.props.people};
//   },
//   filterNames: function(){
//     var filterTerm = this.refs.userInput.value.toLowerCase();
//     var filteredNames = this.props.people.filter(function(name){
//                           return name.toLowerCase().match(filterTerm);
//                         });
//     this.setState({filteredNames: filteredNames});
//   },
//   render: function(){
//     var people = this.state.filteredNames.map(function(name, index){
//       return <Name name={name} key={index} />
//     });
//     return <div>
//             <input type="text" ref="userInput" onChange={this.filterNames} />
//               <ul>
//                {people}
//               </ul>
//            </div>
//   }
// });

ReactDOM.render(React.createElement(NameList, {people: ["Greg", "Jon", "Jacob", "Todd", "Matthew"]}), document.getElementById('container'));
