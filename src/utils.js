/* --------------- UTILITIES OBJECTS --------------- */
// to be shared across modules
const Utils = {
	generateUID: function() {
	    var S4 = function() {
	       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	    };
    	return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	}
}


/* ++++++++++ --------------- EXPORTS --------------- ++++++++++ */
export default Utils;


