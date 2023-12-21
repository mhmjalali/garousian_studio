
import styled from "styled-components";

const DropShadow = styled.div`
	background-color: ${({ $backgroundColor }) => $backgroundColor};
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

export default DropShadow