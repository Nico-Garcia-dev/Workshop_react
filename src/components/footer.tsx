import useSound from "use-sound";

import "../styles/footer.css";

export default function Footer() {
	const [playSound] = useSound("../public/doh-101soundboards.mp3");
	return (
		<footer>
			<span>
				<button type="button" onClick={() => playSound()}>
					DOH !
				</button>
			</span>
		</footer>
	);
}
