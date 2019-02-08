import React, { Component } from 'react';
import logo from './Logo-Banco-Galicia.svg';
import './App.css';

const API = 'http://localhost:3001/poc-api/users';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
         (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {

    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container-fluid App">

          <div className="col-md-2">
            <div className="row">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              </header>
            </div>
          </div>

          <div className="col-md-10">
            <div className="row text-left">
              <div className="container-fluid">

                <ul>
                  {items.map(item => (
                    <li key={item.id}>
                      {item.id} {item.username}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>

        </div>
      );
    }
  }
}

export default App;
