import React,{ Component } from 'react';
import Board from './Board.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
  }

  handleFetch(){
    event.preventDefault();
    console.log('handling fetch')
    fetch('/api')
    .then(response => response.json())
    .then(res => {
      console.log(res.body.abilities);
      document.getElementById('display').innerText = res.body
    })
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div>
        <h1>REACTIDE BOISSSSSSS</h1>
        <Board />
        <button onClick={this.handleFetch}>PIKAAACHUUUUUUUU</button>\
        <div id='display'> </div>
      </div>
    )
  }
}

export default App;