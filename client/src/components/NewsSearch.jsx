import React from 'react';

class NewsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { birthday: '' };

    this.changeInput = this.changeInput.bind(this)
  }

<<<<<<< HEAD:client/src/components/NewsSearch.jsx
  changeInput = (e) => {
    e.preventDefault();
    this.setState({ birthday: e.target.value });
=======
  changeInput (event){
    this.setState({ birthday: event.target.value });
>>>>>>> f386e715fb0474649139cd44f22f731b3d5d901c:client/src/components/search.jsx
  }

  render(){
    return (
      <div>
        <h4>  </h4>
<<<<<<< HEAD:client/src/components/NewsSearch.jsx
        <input value={this.state.birthday} placeholder="YYYYMMDD" onChange={this.changeInput}/>
=======
        <input value={this.state.birthday} placeholder="YYYYMMDD no spaces no - no /" onChange={this.changeInput.bind(this)}/>
>>>>>>> f386e715fb0474649139cd44f22f731b3d5d901c:client/src/components/search.jsx
        <button onClick={() => (this.props.onSearch(this.state.birthday))}> Enter your birthday </button>
      </div>
    )
  }
}
export default NewsSearch;