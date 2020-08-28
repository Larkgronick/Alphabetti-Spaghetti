import React from 'react';
import AppBar from './components/AppBar/AppBar';
import Dropdown from './components/Dropdown/Dropdown';
import WritingSystem from './components/WritingSystem/WritingSystem';
import Login from './components/Login/Login'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      login: false,
      email: 'test@email.com',
      password: '1234',
      inputedEmail: '',
      inputedPassword: '',
      language: 'english' 
    }
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.checkLoginData = this.checkLoginData.bind(this);
  }
  
  componentDidMount(){
    alert("Hi! \nemail: 'test@email.com' \npassword: '1234'. \nP.S You did not see me ")
  }

  selectLanguage  = (language) => {
    this.setState({language: language})
  }

  updateEmail(e){
    this.setState({inputedEmail: e.target.value})
  }

  updatePassword(e){
    this.setState({inputedPassword: e.target.value})
    console.log(typeof e.target.value)
  }
  
  
  checkLoginData(){
    let inputedEmail = this.state.inputedEmail;
    let email = this.state.email;
    let inputedPassword = this.state.inputedPassword;
    let password = this.state.password;
    if(inputedEmail === email && inputedPassword === password){
      this.setState({login: true})
      alert('Nice, lets go!')
    } else {
      alert('Incorrect data, mate(')
    }
    
  }

  render(){
    if(this.state.login === false){
      return <div className="App"><Login data={this.state} checkLoginData={this.checkLoginData} updateEmail={this.updateEmail} updatePassword={this.updatePassword}/></div>
    } else {
      return  <div className="App">
      <AppBar />
      <Dropdown selectLanguage={this.selectLanguage}/>
      <WritingSystem language = {this.state.language}/>
    </div>
    }
  }
}

export default App;
