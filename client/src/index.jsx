import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import NewsList from "./components/list.jsx";
import NewsSearch from "./components/search.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      birthday: ""
    };
    this.find = this.find.bind(this);
  }

  componentDidMount() {
    axios
      .get("/bday")
      .then(data => {
        //console.log("Success in componentDidMount", data.data);
        this.setState({
          news: data.data
        });
      })
      .catch(error => {
        console.log("Error in componentDidMount", error);
      });
  }

  find(birthday) {
    const payload = {
      birthday: birthday
    };
    axios
      .post("/bday", payload)
      .then(data => {
        console.log("successfully posted");
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h4 />
        <NewsSearch onSearch={this.find} />
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
