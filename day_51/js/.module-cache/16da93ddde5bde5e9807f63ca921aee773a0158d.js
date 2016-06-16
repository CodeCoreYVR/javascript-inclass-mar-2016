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
    return React.createElement("div", null, 
             React.createElement("h1", null, "Awesome Answers"), 
              this.questionsDisplay()
           );
  }
});

var QuestionSummary = React.createClass({displayName: "QuestionSummary",
  getInitialState: function(){
    return {questionDetails: null, insights: []};
  },
  getDetails: function(){
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/questions/" + this.props.question.id + ".json",
      success: function(data){
        this.setState({questionDetails: data.question, insights: data.insights});
      }.bind(this),
      error: function(){
        alert("can't load question details");
      }
    });
  },
  hideDetails: function(){
    this.setState({questionDetails: null});
  },
  sendInsight: function() {
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/questions/" + this.props.question.id + "/insights",
      data: {insight: {body: this.refs.newInsight.value}},
      success: function(data) {
        if(data.success) {
          this.setState({insights: this.state.insights.concat(data.insight)})
        } else {

        }
      }
    })
  },
  questionDisplay: function(){
    if(this.state.questionDetails) {
      return React.createElement("div", null, 
               React.createElement("h2", null, 
                 React.createElement("a", {href: "javascript:void(0)", onClick: this.hideDetails}, 
                  this.props.question.title
                 )
                ), 
               React.createElement("p", null, this.state.questionDetails.body), 
               React.createElement("p", null, this.state.questionDetails.created_at), 
               React.createElement("h3", null, "Insights"), 
               React.createElement("input", {type: "text", ref: "newInsight"}), 
               React.createElement("input", {type: "submit", onClick: this.sendInsight}), 
               this.state.insights.map(function(insight, index){
                  return React.createElement("p", {key: index}, insight.body)
               })
             );
    } else {
      return React.createElement("h2", null, 
               React.createElement("a", {href: "javascript:void(0);", onClick: this.getDetails}, 
                 this.props.question.title
               )
             );
    }
  },
  render: function() {
    return React.createElement("div", null, 
             this.questionDisplay(), 
             React.createElement("hr", null)
           );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('container'));
