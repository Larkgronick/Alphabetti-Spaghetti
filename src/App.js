import React from 'react';
import AppBar from './components/AppBar/AppBar';
import Dropdown from './components/Dropdown/Dropdown';
import WritingSystem from './components/WritingSystem/WritingSystem';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      language: 'english' 
    }
  }
  
  selectLanguage  = (language) => {
    this.setState({language: language})
  }

  render(){
    return (
      <div className="App">
        <AppBar />
        <Dropdown selectLanguage={this.selectLanguage}/>
        <WritingSystem language = {this.state.language}/>
      </div>
    );
  }
}

export default App;
