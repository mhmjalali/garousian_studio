import BackgroundWithImage from "@/core/components/styles/BackgroundWithImg";
import DropShadow from "@/core/components/styles/DropShadow";

const FooterBackground = () => {
	return (
		<BackgroundWithImage $backgroundImage='url("/images/Footer_image.png")'>
			<DropShadow $backgroundColor="rgba(0, 0, 0, 0.6)"/>
		</BackgroundWithImage>
	)
}

export default FooterBackground