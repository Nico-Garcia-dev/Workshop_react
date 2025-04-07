import type { propsCard } from "../types/types.ts";
import "../styles/card.css";

export default function Card({ image, firstName, lastName }: propsCard) {
	return (
		<figcaption>
			<img src={image} alt="img" />
			<span>{firstName}</span>
			<span>{lastName}</span>
		</figcaption>
	);
}
