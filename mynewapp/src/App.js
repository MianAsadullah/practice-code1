import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state= {
    Person: [
      {name:'asad', age: 34},
      {name:'zafar',age: 23},
      {name:'umer', age: 25}
    ]
  }
  render() {
    return (
    < div className="App">
      <h1>hello   main</h1>
      <p> my first name is asadullah </p>
      <button> HELLO WORLD</button>
      <Person name= {this.state.Person[0].name} age= {this.state.Person[0].age} />
      <Person  name={this.state.Person[1].name} age={this.state.Person[1].age}>i am racing!</Person>
      <Person name={this.state.Person[2].name} age={this.state.Person[2].age} />
    </div>
  );
  // return React.createElement('div',{className: 'App'},      React.createElement('h1',null,'my name is asadulah?'))
}
}
export default App;