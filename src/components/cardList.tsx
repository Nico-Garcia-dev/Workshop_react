import data from "../data/data.json";
import Card from "./card";
import type { simpsonsType } from "../types/types.ts";
import "../styles/cardList.css";
import { useState } from "react";

export default function CardList() {
	const [random, setRandom] = useState<simpsonsType | null>(null)

	function handleClick() {
		const randomIndex = Math.floor(Math.random() * data.length)
		console.log(randomIndex)
		setRandom(data[randomIndex]);
	}

	return (
		<div className="Card">
			{data.map((d: simpsonsType) => (
				<Card
					key={d.id}
					image={d.image}
					firstName={d.firstName}
					lastName={d.lastName}
				/>
			))}
			<div className="random">
				{random && (
					<Card
						key={random.id}
						image={random.image}
						firstName={random.firstName}
						lastName={random.lastName}
					/>
				)}
				<button type="button" onClick={handleClick}>Choose your Simpson</button>
			</div>
		</div>
	);
}
