import { useState } from "react";

import {
	PiDiceOneFill,
	PiDiceTwoFill,
	PiDiceThreeFill,
	PiDiceFourFill,
	PiDiceFiveFill,
	PiDiceSixFill,
	PiDiamondsFourFill,
	PiDiamondFill,
	PiCoinBold,
} from "react-icons/pi";

function App() {
	const [dice, setDice] = useState({ die1: null, die2: null });
	const [betAmount, setBetAmount] = useState(1);
	const [balance, setBalance] = useState(100);
	const [betMethod, setBetMethod] = useState("even");

	const getRandomDice = () => {
		const die1 = Math.floor(Math.random() * 5 + 1);
		const die2 = Math.floor(Math.random() * 5 + 1);
		setDice({ die1: die1, die2: die2 });
	};

	const handleBetAmount = (e) => {
		setBetAmount(e.target.value);
	};

	const diceElement = (dieNumber) => {
		if (dieNumber === 1) {
			return <PiDiceOneFill />;
		} else if (dieNumber === 2) {
			return <PiDiceTwoFill />;
		} else if (dieNumber === 3) {
			return <PiDiceThreeFill />;
		} else if (dieNumber === 4) {
			return <PiDiceFourFill />;
		} else if (dieNumber === 5) {
			return <PiDiceFiveFill />;
		} else if (dieNumber === 5) {
			return <PiDiceSixFill />;
		} else {
			return <PiDiamondFill />;
		}
	};

	return (
		<div className="flex items-center justify-center h-screen bg-gray-800">
			<div className="w-full max-w-xl p-4 border border-gray-700 rounded-xl ">
				{/* DICE */}
				<div className="flex items-center justify-around text-xl text-gray-600 bg-gray-700 rounded-xl">
					<PiDiamondsFourFill />
					{dice && (
						<div className="flex text-red-400 text-7xl ">
							{diceElement(dice.die1)}
							{diceElement(dice.die2)}
						</div>
					)}
					<PiDiamondsFourFill />
				</div>

				{/* BET METHOD */}
				<div className="flex justify-between gap-2 p-2 mt-4 text-sm text-red-400 border border-gray-700 rounded-md">
					<div className="flex gap-2">
						<button
							onClick={() => {
								setBetMethod("even");
							}}
							className={`p-2 border border-red-400 rounded-md ${
								betMethod === "even"
									? "bg-red-400 text-gray-800 border-gray-700"
									: null
							}`}
						>
							even
						</button>
						<button
							onClick={() => {
								setBetMethod("odd");
							}}
							className={`p-2 border border-red-400 rounded-md ${
								betMethod === "odd"
									? "bg-red-400 text-gray-800 border-gray-700"
									: null
							}`}
						>
							odd
						</button>
					</div>

					<button
						onClick={getRandomDice}
						className="px-4 py-2 font-semibold text-gray-800 bg-red-400 rounded-md"
					>
						Roll{" "}
					</button>
				</div>

				{/* BET AMOUNT */}
				<div className="flex items-center gap-2 p-2 mt-4 text-sm text-gray-700 border border-gray-700 rounded-md">
					<div className="flex items-center gap-2 p-2 text-yellow-400 border border-yellow-400 rounded-md ">
						<PiCoinBold />
						<p>{balance}</p>
					</div>

					<div className="flex gap-2 ">
						<label
							className="flex items-center text-gray-500"
							htmlFor="betAmount"
						>
							{" "}
							bet amount :{" "}
						</label>
						<input
							id="betAmount"
							className="flex w-1/5 p-1 font-semibold text-center text-yellow-400 bg-gray-700 rounded-md outline-none"
							type="number"
							onChange={handleBetAmount}
							value={betAmount}
						/>
						<button
							onClick={() => setBetAmount((prev) => prev * 2)}
							className="px-2 text-gray-500 border border-gray-700 rounded-md"
						>
							x2
						</button>
						<button
							onClick={() => setBetAmount((prev) => prev / 2)}
							className="px-2 text-gray-500 border border-gray-700 rounded-md"
						>
							1/2
						</button>
						<button
							onClick={() => setBetAmount(balance)}
							className="px-2 text-gray-500 border border-gray-700 rounded-md"
						>
							max
						</button>
						<button
							onClick={() => setBetAmount(0)}
							className="px-2 text-gray-500 border border-gray-700 rounded-md"
						>
							clear
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
