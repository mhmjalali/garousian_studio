import styled from "styled-components";

const Background = styled.div`
	background-image: url("/images/Footer_image.png");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
`;

const DropShadow = styled.div`
	background-color: rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

const FooterBackground = () => {
	return (
		<Background>
			<DropShadow/>
		</Background>
	)
}

export default FooterBackground