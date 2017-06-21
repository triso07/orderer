/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
import React from 'react';
import ReactDOM from 'react-dom';

import Items from './data/images.json';
import Orderer from './components/orderer.js';

import './styles/index.css';



/* --------------- CONTAINER --------------- */
class Container extends React.Component {
	constructor() {
		super();
		this.state = {
			items: Object.assign([], Items), // create instance of list items so as not to mutate data
			numOfCols: 4
		}
		this.handleGridSize = this.handleGridSize.bind(this);
	}
	handleGridSize(e) {
		this.setState({ 
			numOfCols: parseInt(e.target.value, 10) 
		}); // need to parseInt or else we get a string
	}
	render() {
		//console.log('**********------- render all -------**********');
		//console.log(this.state);
		return (
		  <div id="container">
		  	<select name="gridSizer" value={this.state.numOfCols} onChange={this.handleGridSize}>
		  		<option value="1">1</option>
		  		<option value="2">2</option>
		  		<option value="3">3</option>
		  		<option value="4">4</option>
		  		<option value="5">5</option>
		  		<option value="6">6</option>
		  	</select>
		  	<Orderer type="image" cols={this.state.numOfCols} items={this.state.items} />
		  </div>
		);
	}
}



/* ++++++++++ --------------- REACT DOM RENDER --------------- ++++++++++ */
ReactDOM.render(
	<Container />,
	document.getElementById('root')
);


