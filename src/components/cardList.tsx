import data from "../data/data.json";
import Card from "./card";
import type { props } from "../types/types.ts";

import "../styles/cardList.css";

export default function CardList() {
	return (
		<div className="Card">
			{data.map((d: props) => (
				<Card
					key={d.id}
					image={d.image}
					firstName={d.firstName}
					lastName={d.lastName}
				/>
			))}
		</div>
	);
}
