// src/components/Sidebar.js
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';

const Sidebar = () => {
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
        >
            <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/">frequent</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<InfoCircleOutlined />}>
                <Link to="/Contacts">Contacts</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<PhoneOutlined />}>
                <Link to="/imports">imports</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Sidebar;
