var App = React.createClass({displayName: "App",
  getInitialState: function(){
    return {questions: []};
  },
  componentDidMount: function(){
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/questions.json",
      success: function(data){
        this.setState({questions: data});
      }.bind(this),
      error: function(){
        alert('Problem loading questions');
      }
    })
  },
  questionsDisplay: function() {
    if(this.state.questions.length == 0) {
      return "Loading....";
    } else {
      return this.state.questions.map(function(question, index){
        return React.createElement(QuestionSummary, {key: index, question: question});
      });
    }
  },
  render: function(){
    console.log(this.state.questions);
    return React.createElement("div", null, 
             React.createElement("h1", null, "Awesome Answers"), 
              this.questionsDisplay()
           );
  }
});

var QuestionSummary = React.createClass({displayName: "QuestionSummary",
  render: function() {
    return React.createElement("div", null, 
             React.createElement("h2", null, this.props.question.title), 
             React.createElement("hr", null)
           );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('container'));
