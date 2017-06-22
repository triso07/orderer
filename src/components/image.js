/* ++++++++++ --------------- IMPORTS --------------- ++++++++++ */
import React from 'react';
import '../styles/image.css';



/* --------------- IMAGE --------------- */
function Image(props) {
	return (
    	<img className={props.klass} src={`images/orderables/${props.src}`} alt={props.alt} draggable={props.draggable} />// should add alt here using image name property from a modified JSON file that uses objects instead of strings
	);
}



/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default Image;

