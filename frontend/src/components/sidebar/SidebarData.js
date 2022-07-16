import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'ثبت اطلاعات اولیه',
        path: '/admin/initial',
        icon: <AiIcons.AiFillDatabase size={25}/>,
        iconClosed: <RiIcons.RiArrowDownSFill size={25}/>,
        iconOpened: <RiIcons.RiArrowUpSFill size={25}/>,
        subNav:[
            {
                title: 'حوزه کشورها',
                path: '/admin/initial/area',
                icon: <IoIcons.IoIosGlobe size={20}/>,
            },
            {
                title: 'کشور',
                path: '/admin/initial/country',
                icon: <FaIcons.FaGlobeAsia size={20}/>,
            },
            {
                title: 'شهر',
                path: '/admin/initial/city',
                icon: <FaIcons.FaCity size={20}/>,
            },
            {
                title: 'دانشگاه',
                path: '/admin/initial/university',
                icon: <FaIcons.FaUniversity size={20}/>,
            },
            {
                title: 'اتحادیه',
                path: '/admin/initial/union',
                icon: <RiIcons.RiGroup2Fill size={20}/>,
            },
            {
                title: 'انجمن',
                path: '/admin/initial/association',
                icon: <RiIcons.RiGroup2Line size={20}/>,
            },
        ]
    },

    {
        title: 'حسابهای کاربری',
        path: '/admin/accounting',
        icon: <FaIcons.FaUserEdit size={25}/>,
        iconClosed: <RiIcons.RiArrowDownSFill size={25}/>,
        iconOpened: <RiIcons.RiArrowUpSFill size={25}/>,
        subNav:[
            {
                title: 'ثبت نوع حساب کاربر',
                path: '/admin/accounting/account',
                icon: <RiIcons.RiUserAddLine size={20}/>,
            },
            {
                title: 'مدیریت صفحه ها',
                path: '/admin/accounting/createpages',
                icon: <FaIcons.FaPager size={20}/>,
            },
            {
                title: 'مدیریت حسابها',
                path: '/admin/accounting/management',
                icon: <FaIcons.FaUserCheck size={20}/>,
            },
        ]
    },

    {
        title: 'اعزام مبلغ',
        path: '/admin/dispatching',
        icon: <IoIcons.IoIosAirplane size={25}/>,
        iconClosed: <RiIcons.RiArrowDownSFill size={25}/>,
        iconOpened: <RiIcons.RiArrowUpSFill size={25}/>,
        subNav:[
            {
                title: 'ایجاد لیست اعزام',
                path: '/admin/dispatching/list',
                icon: <RiIcons.RiFileList2Line size={20}/>,
            },
        ]
    },

    {
        title: 'سایر',
        path: '/admin/other',
        icon: <FaIcons.FaBoxOpen size={25}/>,
        iconClosed: <RiIcons.RiArrowDownSFill size={25}/>,
        iconOpened: <RiIcons.RiArrowUpSFill size={25}/>,
        subNav:[
            {
                title: 'ثبت سوال و ماهیت آن',
                path: '/admin/other/questions',
                icon: <RiIcons.RiQuestionFill size={20}/>,
            },
            {
                title: 'ایجاد پرسشنامه',
                path: '/admin/other/createofquestionnaire',
                icon: <RiIcons.RiQuestionnaireFill size={20}/>,
            },
            {
                title: 'تخصیص پرسشنامه',
                path: '/admin/other/assignquestions',
                icon: <MdIcons.MdAssignment size={20}/>,
            },
            {
                title: 'نمایش تخصیص ها',
                path: '/admin/other/displayassignquestions',
                icon: <RiIcons.RiCheckboxMultipleBlankLine size={20}/>,
            },

        ]
    }
]