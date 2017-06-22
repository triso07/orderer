/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
import React from 'react';
import Utils from '../utils.js';
import Orderee from '../components/orderee.js';
import '../styles/orderer.css';



/* --------------- HELPERS --------------- */
let dragSrcEl = null; // stores drag item el


// +++++ ROW +++++ //
function Row(props) {
	// create row markup and orderee markup
	return(
		<div className={`row row-${props.num}`}>
			{props.groupedItems.map((rowItem, index) => <Orderee item={rowItem} type="image" draggable={props.draggable} onDragStart={props.onDragStart.bind(this)} onDragOver={props.onDragOver.bind(this)} onDrop={props.onDrop.bind(this)} key={Utils.generateUID()} />)}
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
	handleDragOver(e) {
		//console.log('+++++++ drag over +++++++');
		if (e.preventDefault) { e.preventDefault(); } // allows us to drop
		e.dataTransfer.dropEffect = 'move';
	}
	handleDragStart(e) {
		//console.log('+++++++ drag start +++++++');
		//console.log(e.target);
		dragSrcEl = e.target;
		e.dataTransfer.effectAllowed = 'move';
  		//e.dataTransfer.setData('text/html', e.target.innerHTML);
	}
	handleDrop(e) {
		//console.log('+++++++ drop +++++++');
		//console.log(e.target);
		// stop browser from redirecting
		if (e.stopPropagation) { e.stopPropagation(); }
		// if we're dropping to the same el do nothing
		if (dragSrcEl !== e.target) {
			// set source HTML to HTML of column we dropped on
			//console.log(e.dataTransfer.getData('text/html'));
			// swap innerHTML of src and target els
			e.target.classList.add('drop');
			let dropSrcEl = e.target.innerHTML;
			e.target.innerHTML = dragSrcEl.innerHTML;
			dragSrcEl.innerHTML = dropSrcEl;

			// now update items list order
			const revisedItems = [];
			document.querySelectorAll('.orderee img').forEach(image => revisedItems.push(image.src.split('orderables/')[1]));
			
			// now set state and render
			this.setState({
				items: revisedItems
			});
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
	  					return <Row num={rowNum} groupedItems={tempItems} onDragStart={this.handleDragStart.bind(this)} onDragOver={this.handleDragOver.bind(this)} onDrop={this.handleDrop.bind(this)} draggable={true} key={Utils.generateUID()} />
	  				}
	  			})}
	  		</div>
		);
	}
}



/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default Orderer;


