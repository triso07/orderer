/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
import React from 'react';
import Image from '../components/image.js';
import '../styles/orderee.css';



/* --------------- ORDEREE --------------- */
function Orderee(props) {
	let typeToRender;
	// switch used here in case we have multiple types of orderees (divs, images, any other element)
	switch (props.type) {
		case "image":
			typeToRender = <Image klass="picture" src={props.item} alt="" draggable={false} />;
			break;
		default:
			console.log('Make sure to pass a "type" to "Orderer" component');
	}
	return (
		<div className={`orderee type-${props.type}`} draggable={props.draggable} onDragStart={props.onDragStart.bind(this)} onDragOver={props.onDragOver.bind(this)} onDrop={props.onDrop.bind(this)}>{typeToRender}</div>
	);
}



/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default Orderee;


