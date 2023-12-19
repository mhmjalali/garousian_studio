import styled from "styled-components";

const ButtonBox = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
`;

const DefaultBtn = styled.div`
    padding: 8px 20px;
    border-radius: 4px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    color: #fff;
    ${({ $type }) =>
        $type === "contained" ? 
        "border: 2px solid #fff;" : 
        "border: none; background-color: #5274F9"}
`;

const ContentButtonBox = () => {
    return (
        <ButtonBox>
            <DefaultBtn $type="outlined">مشاوره میخوام</DefaultBtn>
            <DefaultBtn $type="contained">فرم تماس با ما</DefaultBtn>
        </ButtonBox>
    )
}

export default ContentButtonBox