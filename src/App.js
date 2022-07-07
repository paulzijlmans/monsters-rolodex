import { Component } from 'react';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      filteredMonsters: []
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return {
          monsters: users,
          filteredMonsters: users
        }
      },
        () => {
          console.log(this.state);
        }
      ));
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          const searchString = event.target.value.toLocaleLowerCase();
          const filteredMonsters = this.state.monsters.filter(monster => {
            return monster.name.toLocaleLowerCase().includes(searchString);
          });
          this.setState(() => {
            return { filteredMonsters: filteredMonsters }
          });
        }} />
        {this.state.filteredMonsters
          .map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
