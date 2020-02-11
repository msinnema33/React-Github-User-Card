import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    user: [],
    followers: []

  };
  
  componentDidMount(){
    axios
      .get('https://api.github.com/users/msinnema33')
      .then(e => {
        console.log('data: ', e);
        this.setState({
          user: e.data
        });
      })
      .catch(err => console.log(err));
  }

  getFollowers = e => {
    // e.preventDefault();
    axios
      .get('https://api.github.com/users/msinnema33/followers')
      .then(res => {
        console.log('follow', res);
        this.setState({
          followers: res.data,
        });
      })
      .catch(err => console.log(err));
  }
 

  render(){

  return (
    <div className="App">
      <header className="App-header">
        GitHub User 
        Welcome: {this.state.user.name};
        <img src={this.state.user.avatar_url} />
      </header>
      <button onClick={this.getFollowers}>Get My Followers</button>
        My Followers
        <div className='followers'>
          Name:
        </div>

    </div>
  );
  }
}

export default App;
