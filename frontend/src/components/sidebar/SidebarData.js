import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'داشبورد',
        path: '',
        icon: <AiIcons.AiFillDatabase size={25}/>,
        iconClosed: <RiIcons.RiArrowDownSFill size={25}/>,
        iconOpened: <RiIcons.RiArrowUpSFill size={25}/>,
        subNav:[
            {
                title: 'خانه ',
                path: '/',
                icon: <IoIcons.IoIosGlobe size={20}/>,
            },
            {
                title: 'فرم اطلاعات',
                path: '/personal/checkout',
                icon: <FaIcons.FaGlobeAsia size={20}/>,
            },
            {
                title: 'فرم',
                path: '/personal',
                icon: <FaIcons.FaCity size={20}/>,
            },
            {
                title: 'دانشگاه',
                path: '',
                icon: <FaIcons.FaUniversity size={20}/>,
            },
            {
                title: 'اتحادیه',
                path: '',
                icon: <RiIcons.RiGroup2Fill size={20}/>,
            },
            {
                title: 'انجمن',
                path: '',
                icon: <RiIcons.RiGroup2Line size={20}/>,
            },
        ]
    },

    {
        title: 'حسابهای کاربری',
        path: '',
        icon: <FaIcons.FaUserEdit size={25}/>,
        iconClosed: <RiIcons.RiArrowDownSFill size={25}/>,
        iconOpened: <RiIcons.RiArrowUpSFill size={25}/>,
        subNav:[
            {
                title: ' کاربران',
                path: '/userpermissions',
                icon: <RiIcons.RiUserAddLine size={20}/>,
            },
            {
                title: 'مدیریت صفحه ها',
                path: '/pagepermissions',
                icon: <FaIcons.FaPager size={20}/>,
            },
            {
                title: 'مدیریت حسابها',
                path: '',
                icon: <FaIcons.FaUserCheck size={20}/>,
            },
        ]
    },

    {
        title: 'اعزام مبلغ',
        path: '',
        icon: <IoIcons.IoIosAirplane size={25}/>,
        iconClosed: <RiIcons.RiArrowDownSFill size={25}/>,
        iconOpened: <RiIcons.RiArrowUpSFill size={25}/>,
        subNav:[
            {
                title: 'ایجاد لیست اعزام',
                path: '',
                icon: <RiIcons.RiFileList2Line size={20}/>,
            },
        ]
    },

    {
        title: 'سایر',
        path: '',
        icon: <FaIcons.FaBoxOpen size={25}/>,
        iconClosed: <RiIcons.RiArrowDownSFill size={25}/>,
        iconOpened: <RiIcons.RiArrowUpSFill size={25}/>,
    }
]