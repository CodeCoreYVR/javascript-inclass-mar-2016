var Name = React.createClass({
  nameMatched: function(){
    return this.props.filterTerm === null || this.props.name.toLowerCase().match(this.props.filterTerm.toLowerCase());
  },
  render: function() {
    if(this.nameMatched()) {
      var styles = {display: "list-item"};
    } else {
      var styles = {display: "none"};
    }
    return <li style={styles}>{this.props.name}</li>;
  }
});

var NameList = React.createClass({
  getInitialState: function(){
    return {filterTerm: null};
  },
  filterNames: function(){
    var filterTerm = this.refs.userInput.value.toLowerCase();
    this.setState({filterTerm: filterTerm});
  },
  render: function(){
    var people = this.props.people.map(function(name, index){
      return <Name name={name}
                  key={index}
                  filterTerm={this.state.filterTerm} />
              }.bind(this));
    return <div>
            <input type="text" ref="userInput" onChange={this.filterNames} />
              <ul>
               {people}
              </ul>
           </div>
  }
});


// var Name = React.createClass({
//   render: function() {
//     return <li>{this.props.name}</li>;
//   }
// });
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

ReactDOM.render(<NameList people={["Greg", "Jon", "Jacob", "Todd", "Matthew"]} />, document.getElementById('container'));
