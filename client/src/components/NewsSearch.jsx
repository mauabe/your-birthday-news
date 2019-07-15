import React from 'react';

class NewsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { birthday: '' };

    this.changeInput = this.changeInput.bind(this)
  }

  changeInput = (e) => {
    e.preventDefault();
    this.setState({ birthday: e.target.value });
  }

  render(){
    return (
      <div>
        <h4>  </h4>
        <input value={this.state.birthday} placeholder="YYYYMMDD" onChange={this.changeInput}/>
        <button onClick={() => (this.props.onSearch(this.state.birthday))}> Enter your birthday </button>
      </div>
    )
  }
}
export default NewsSearch;