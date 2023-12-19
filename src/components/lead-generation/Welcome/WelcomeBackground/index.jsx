import styled from "styled-components";

const Background = styled.div`
	background-image: url("/images/Welcome_img.png");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
`;

const DropShadow = styled.div`
	background-color: rgba(32, 55, 137, 0.8);
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

const WelcomeBackground = () => {
	return (
		<Background>
			<DropShadow/>
		</Background>
	)
}

export default WelcomeBackground