import React from 'react';

//Containers
import Banner from '@containers/banner';
import Recomended from '@containers/recomended';
import Popular from '@containers/cards';


const Home = () => {
	return (
		<div>
			<Banner/>
			<Popular />
			<Recomended />
		</div>
		
		// 
		
	);
}

export default Home;