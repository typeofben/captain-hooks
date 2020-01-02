import React from 'react';

const TreasureChest = ({ contents }) => {
	return (
		<>
			<h4>{contents.rubies} Rubies </h4>
			<h4>{contents.doubloons} Doubloons </h4>
			<h4>{contents.silverCoins} Silver Coins </h4>
		</>
	);
}

export default TreasureChest;