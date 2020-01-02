import React, { useState } from 'react'

const messages = [
	"Me treasure is safe and sound.",
	"ARRRRR!!! Ye stole me ruby!",
	"ARRRRRR!!! Ye stole me doubloon!",
	"ARRR! Ye stole me silver coin!",
	"Ye stole all me booty!"
]

const Captain = ({contents}) => {
	const [captainMessage, setCaptainMessage] = useState(messages[0]);
	
	// First, check to make sure that there is any booty left!
	if( (contents.rubies + contents.doubloons + contents.silverCoins) <= 0 ) {
		setCaptainMessage(messages[4]);
	}

	return (
		<section>
			<h1> Captain </h1>
			<hr />
			<h2>The Captain says: {captainMessage} </h2>
		</section>
	)
}

export default Captain;

