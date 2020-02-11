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
        <h1>My GitHub Community</h1>
        <h2>{this.state.user.name}</h2>
        <img width='200' src={this.state.user.avatar_url} />
        <h3>My repositories: {this.state.user.repos_url}</h3>
        <button onClick={this.getFollowers}>Get My Followers</button>
      </header>
      
        
        <div className='followers'>
          {this.state.followers.map(follower => (
            <img width='200' src={follower.avatar_url} key={follower.id}/>
          ))}
          <p>{this.state.followers.login}</p>
          
        </div>

    </div>
  );
  }
}

export default App;
