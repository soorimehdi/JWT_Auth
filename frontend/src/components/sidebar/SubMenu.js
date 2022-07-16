import React, {useState} from 'react';
import{Link} from 'react-router-dom';
import Styled from 'styled-components'; 


const SidebarLink = Styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items:center;
    padding: 20px;
    list-style:none;
    height:60px;
    text-decoration: none;

    &:hover{
        background: #0667A9;
        border-right: 10px solid #632ce4;
        cursor: pointer;
        color: white;
        opacity: 0.7;
    }
`;

const SidebarLabel = Styled.span`
    margin-right: 20px;
    font-size:16px;
`;

const DropdownLink = Styled(Link)`
    background: #1099F7;
    height: 45px;
    padding-right: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;

    &:hover{
        background: #0667A9;
        cursor: pointer;
        color:white;
        opacity: 0.7;
    }
`;


const SubMenu =({item})=> {
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)
    return(
        <>
            <SidebarLink  to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav 
                    ? item.iconOpened 
                    : item.subNav 
                    ? item.iconClosed 
                    : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index)=>{
                return(
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    );

};

export default SubMenu;