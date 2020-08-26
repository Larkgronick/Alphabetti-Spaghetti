import React from "react";
import './WritingSystem.scss';
import {alphabetENG, alphabetJPN, alphabetRUS} from '../../constants/Languages'
import Button from "@material-ui/core/Button";

class WritingSystem extends React.Component{
	
	generateTable(){
		const language = this.props.language;
		let show;
		show = this.letterGenerator(language)
		return (
			<div className="alpahabet-container">{show}</div>
		  ) 
		}
	
	letterGenerator(language){
		let alphabet
		if (language === 'english'){
			alphabet = alphabetENG;
		} else if(language === 'russian'){
			alphabet = alphabetRUS;

		} else if(language === 'japan')
			alphabet = alphabetJPN;
		let buttons = alphabet.map((item) => 
		<div className='button-wrapper'>
			<Button  variant="contained">{item}</Button>
		</div>
		) 
		return buttons	
	}

	render(){
		return(
			<div>
				{this.generateTable()}
			</div>
		)
	}
}

export default WritingSystem
