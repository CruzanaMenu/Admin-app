import React from 'react';

//Components
import Info from '@components/info';

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
			<Info />
		</div>
		
		// 
		
	);
}

export default Home;