/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
import React from 'react';
import Orderee from '../components/orderee.js';
import '../styles/orderer.css';



// +++++ ROW +++++ //
function Row(props) {
	// create row markup and orderee markup
	return(
		<div className={`row row-${props.num}`}>
			{props.groupedItems.map((rowItem, index) => <Orderee item={rowItem} type="image" key={`${rowItem.replace(/[^A-Z0-9]+/ig, "").substring(0, 10).toLowerCase()}${index}`} />)}
		</div>
	);
}



/* --------------- ORDERER --------------- */
class Orderer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: Object.assign([], props.items)
		}
	}
	render() {
		//console.log('**********------- render orderer -------**********');
		//console.log(this.state);
		let rowNum = 0;
		return (
			<div className={`orderer cols-${this.props.cols}`}>
	  			{this.state.items.map((currItem, index) => {
	  				// need to re-work this to not use map
	  				// if we are a multiple of cols number passed as prop, then create row markup for proper grid
	  				if (index % this.props.cols === 0) {
	  					// grab next (numOfCols passed to comp) items from array and store in tempArray
	  					let tempItems = this.state.items.slice(index, (index + this.props.cols));
	  					// increment row counter
	  					rowNum += 1;
	  					// create row markup
	  					return <Row num={rowNum} groupedItems={tempItems} key={index} />
	  				}
	  			})}
	  		</div>
		);
	}
}



/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default Orderer;


