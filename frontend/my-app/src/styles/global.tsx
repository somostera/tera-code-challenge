import styled, { createGlobalStyle } from "styled-components";
import {Toolbar, Button, Typography} from "@material-ui/core";
import { Link } from "react-router-dom";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-b0x;
  font-family: 'Rubik', sans-serif !important;    
}

body {
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
}
`;

export const TypographyChanged = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  margin-bottom: 10px;
  
  &.font {
    color: ${props => props.theme.colors.primary};
    height: 20px;
  }
`;

export const TextSubtitle = styled(Typography)`
  ${TypographyChanged};
  &&& {
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 1.3;
    color: ${props => props.theme.colors.primary};
    font-weight: 300;

    &.align-text {
    margin-bottom: 0;
    }
  }
`;

export const TypographyDescription = styled(Typography)`
  ${TypographyChanged};
  &&& {
    font-size: 26px;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 20px;

    &.description-style {
      font-size: 18px;
      font-weight: 300;
      line-height: 1.4;
      font-family: 'Roboto', 'sans-serif'!important;
      text-align: justify;
      text-indent: 2em;
    }
  }
`;

export const ResponsiveDescription = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
  
export const TypographySmall = styled.small`
  font-size: 12px;
  display: flex;
  align-items: center;
  height: 16px;
  color: ${props => props.theme.colors.primary};
`;

export const ToolbarContent = styled(Toolbar)`
  &&&{
    background: ${props => props.theme.menu.background};
    color: #FCF7F8;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 2%);

    @media only screen and (max-width: 600px){
      & .title-menu {
        font-size: 1rem;
      };
    };

  }
`;

export const ButtonContainer = styled(Button)`
  text-transform: none;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  padding: 2px;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  };
`;

export const CardListBook = styled.div`
  margin: 0 -5px;
  margin-top: 7px;
  position: relative;

  .rowCardList:after {
    content: "";
    display: table;
    clear: both;
  }

  .columnCardList {
    float: left;
    width: 23%;
    padding: 0 10px;

    @media only screen and (max-width: 600px) {
      width: 100%;
    };
  }

  .cardList {
    padding: 16px;
    text-align: left;
    background-color: none;
  }

  
`;

export const LinkStyled = styled(Link)`
  &&& {
    color: ${props => props.theme.colors.text};
    display: flex;
    text-decoration: none;
    margin-bottom: 10px;
  }
`;

export const CardMediaChanged = styled.img`
  &&& {
    height: 220px;
    background-size: contain;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;

    &.flag::before {
      background: rgb(252 247 248 / 74%);
      position: absolute;
      content: 'FORA DE ESTOQUE';
      right: -10px;
      color: black;
    }

    &.align-image {
      float: right;
      margin: 0 38px 0px 20px;
      height: 300px;
    }

    @media only screen and (max-width: 600px){
      &.align-image {
        float: none;
        margin: 0 auto 20px auto;
      }
    };
  }
`;

export const PaginatedStyle = styled.div`
  position: absolute;
  bottom: 20px;
  right: 50%;
  left: 43%;
  display: flex;

  @media only screen and (max-width: 600px){
    bottom: -300%;
    left: 32%;
  };
`;

export const InputStyle = styled.input`
  border: 1px solid #D0D0D0;
  width: 300px;
  height: 40px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.12);
  text-indent: 10px;
  background: ${props => props.theme.colors.bcg_input};
  color: ${props => props.theme.colors.text};

  @media only screen and (max-width: 600px){
    width: auto;
  };
`;

export const SelectStyle = styled.select`
  width: 205px;
  height: 42px;
  text-indent: 10px;
  background: ${props => props.theme.colors.bcg_input};
  color: ${props => props.theme.colors.text};
  border: 1px solid #D0D0D0;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.12);
  text-transform: capitalize;

  @media only screen and (max-width: 600px){
    width: auto;
  };
`;