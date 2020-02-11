import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    users: [],

  };
  
  componentDidMount(){
    axios
      .get('https://api.github.com/users/msinnema33')
      .then(e => {
        console.log('data: ', e);
        this.setState({
          users: e.data
        });
      })
      .catch(err => console.log(err));
  }

  render(){

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
  }
}

export default App;
