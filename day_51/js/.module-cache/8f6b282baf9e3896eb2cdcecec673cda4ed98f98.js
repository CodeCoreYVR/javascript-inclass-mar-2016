var App = React.createClass({displayName: "App",
  getInitialState: function(){
    return {questions: []};
  },
  componentDidMount: function(){
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/questions.json",
      success: function(data){
        console.log(this);
        this.setState({questions: data});
      }.bind(this),
      error: function(){
        alert('Problem loading questions');
      }
    })
  },
  render: function(){
    return React.createElement("div", null, 
             React.createElement("h1", null, "Awesome Answers")

           )
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('container'));
