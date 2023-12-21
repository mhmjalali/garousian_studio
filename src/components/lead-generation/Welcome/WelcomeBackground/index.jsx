import BackgroundWithImage from "@/core/components/styles/BackgroundWithImg";
import DropShadow from "@/core/components/styles/DropShadow";

const WelcomeBackground = () => {
	return (
		<BackgroundWithImage $backgroundImage='url("/images/Welcome_img.png")'>
			<DropShadow $backgroundColor="rgba(32, 55, 137, 0.8)"/>
		</BackgroundWithImage>
	)
}

export default WelcomeBackground