import React from "react";


//create your first component
const Home = (props) => {
	return (
		
		<div className="text-center d-flex">
<h1 className="text-center mt-5">{props.numero2}</h1>
			<h1 className="text-center mt-5">{props.numero1}</h1>
			
		</div>
	);
};

export default Home;

