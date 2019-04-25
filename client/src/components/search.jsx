import React from 'react';

class NewsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { birthday: '' };
  }

  changeInput (event){
    this.setState({ birthday: event.target.value });
  }

  render(){
    return (
      <div>
        <h4>  </h4>
        <input value={this.state.birthday} placeholder="YYYYMMDD no spaces no - no /" onChange={this.changeInput.bind(this)}/>
        <button onClick={() => (this.props.onSearch(this.state.birthday))}> Enter your birthday </button>
      </div>
    )
  }
}
export default NewsSearch;