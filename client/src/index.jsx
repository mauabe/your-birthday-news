import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Heading from "./components/Heading.jsx";
import NewsList from "./components/list.jsx";
import NewsSearch from "./components/NewsSearch.jsx/index.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      birthday: ""
    };
    this.find = this.find.bind(this);
    this.retrieveNews = this.retrieveNews.bind(this);
  }

  // componentDidMount() {
  retrieveNews = () => {
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

    find = (birthday) => {
      const payload = {
        birthday: birthday
      };
      axios
      .post("/bday", payload)
      .then(response => {
        console.log("successfully posted");
      })
      .catch(err => {
        console.log(err);
      });
    }

    render() {
      return (
        <div>
          <Heading />
          <NewsSearch onSearch={this.find} />
          <NewsList news={this.state.news} />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
