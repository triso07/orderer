/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
import React from 'react';
import Orderee from '../components/orderee.js';
import '../styles/row.css';



/* --------------- ROW --------------- */
function Row(props) {
	// create row markup and orderee markup
	return(
		<div className={`row row-${props.num}`}>
			{props.groupedItems.map((rowItem, index) => <Orderee item={rowItem} type="image" key={`${rowItem.replace(/[^A-Z0-9]+/ig, "").substring(0, 10).toLowerCase()}${index}`} />)}
		</div>
	);
}



/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default Row;


