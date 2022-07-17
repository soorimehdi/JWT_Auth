import React, {useState} from 'react';
import{Link} from 'react-router-dom';
import Styled from 'styled-components'; 


const SidebarLink = Styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: center;
    align-items:center;
    padding: 5px;
    list-style:none;
    height:50px;
    text-decoration: none;

    &:hover{
        background: #0667A9;
        cursor: pointer;
        color: white;
        opacity: 0.6;
    }
`;


const DropdownLink = Styled(Link)`
    height: 45px;
    display: flex;
    align-items: center;
    justify-Content:center;
    text-decoration: none;
    color: #f5f5f5;

    &:hover{
        background: #0667A9;
        cursor: pointer;
        color:white;
        opacity: 0.7;
    }
`;


const SubMenuIcons =({item})=> {
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)
    return(
        <>
            <SidebarLink  to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index)=>{
                return(
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                    </DropdownLink>
                )
            })}
        </>
    );

};

export default SubMenuIcons;