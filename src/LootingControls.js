import React, { useState, useEffect, useCallback, useRef } from 'react';

const LootingControls = ({
	rubyQuantity,
	updateNumberOfRubies,
	doubloonQuantity,
	updateNumberOfDoubloons,
	silverCoinQuantity,
	updateNumberOfSilverCoins
}) => {
	const [action, setAction] = useState("take");
	const actionSelect = useRef(null);
	const quantityInput = useRef(null);
	const currencySelect = useRef(null);
	const actionString = (action === "take" ? "Plunder!" : "Give");

	const handleActionSelect = useCallback(event => {
		setAction(event.target.value);
	}, []);

	const handleUpdateTreasureChest = useCallback(event => {
		// Get values from form - use current value of refs from the synthetic event system.
		const action = actionSelect.current.value;
		const quantity = quantityInput.current.value;
		const currency = currencySelect.current.value;

		if(action === "take") {
			switch(currency){
				case "rubies":
					updateNumberOfRubies(rubyQuantity - quantity);
					break;
				case "doubloons":
					updateNumberOfRubies(doubloonQuantity - quantity);
					break;
				case "silverCoins":
					updateNumberOfRubies(silverCoinQuantity - quantity);
					break;
			}
		}else{
			switch(currency){
				case "rubies":
					updateNumberOfRubies(rubyQuantity + quantity);
					break;
				case "doubloons":
					updateNumberOfRubies(doubloonQuantity + quantity);
					break;
				case "silverCoins":
					updateNumberOfRubies(silverCoinQuantity + quantity);
					break;
			}
		}
	}, [updateNumberOfRubies, updateNumberOfDoubloons, updateNumberOfSilverCoins]);

	return (
		<form>
			<label htmlFor="treasure-chest-action">Are you generous or are you greedy?</label>
			<select ref={actionSelect} name="treasure-chest-actions" id="treasure-chest-action" onChange={handleActionSelect}>
				<option value="take">Take</option>
				<option value="give">Give</option>
			</select>

			<label htmlFor="currency-quantity">How many?</label>
			<input ref={quantityInput} type="text" id="currency-quantity" name="currency-quantity" required
       minLength="1" maxLength="4" size="4" />

			<label htmlFor="currency">Of what?</label>
			<select ref={currencySelect} name="currencies" id="currency">
				<option value="rubies" selected>Ruby</option>
				<option value="doubloons">Doubloon</option>
				<option value="silverCoins">Silver Coin</option>
			</select>
			<button type="button" value={actionString} onClick={handleUpdateTreasureChest}>{actionString}</button>
		</form>
	)
}

export default LootingControls