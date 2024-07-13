
import styled from "styled-components"


import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`

background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items:center;

`

export const ToDoList = styled.div`

background: white;
padding: 30px 20px;
border-radius: 5px;

ul{
    padding: 0;
    margin-top: 60px;
}

`
export const Imput = styled.input`

font-size: 15px;
font-weight: 400;
line-height: 17.58px;
color: #000000;
padding-left:20px;
margin-right: 28px;
width: 342px;
height: 40px;
border: 2px;
border-radius: 5px;
border: 2px solid #D1D3D466

`

export const Button = styled.button`

width: 130px;
height: 40px;
border-radius: 5px;
border: none;
background: #8052EC;
font-size: 17px;
font-weight: 900;
line-height: 2.5px;
align-items: center;
color:#FFFFFF;
content: Adicionar;
cursor: pointer;

&:hover {

    opacity: 0.8;
}

&:active {

    opacity: 0.6;
}

`

export const ListItem = styled.div`

background: ${( props) => (props.isFinished ? "#E8FF88" : "#E4E4E4")};
box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
border-radius: 5px;
height: 60px;
padding: 0 10px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
width: 500px;


li{
 list-style: none;
}

`
export const Trash = styled(FcEmptyTrash)`
cursor: pointer;

`
export const Check = styled(FcCheckmark)`
cursor: pointer;

`