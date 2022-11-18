import React from "react";
import styled from "styled-components";

function Footer(){
    return(
        <FooterContainer>
            © 2022 &nbsp;EUN CHO.&nbsp; All Rights Reserved.
        </FooterContainer>  
    )
}

export default Footer;

const FooterContainer = styled.div`
    text-align: center;
    color: white;
    padding-bottom: 20px;
    font-weight: 200;
    font-size: 12px;
`;