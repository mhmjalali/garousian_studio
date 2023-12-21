import styled from "styled-components";

const BackgroundWithImage = styled.div`
	background-image: ${({ $backgroundImage }) => $backgroundImage};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
`;

export default BackgroundWithImage