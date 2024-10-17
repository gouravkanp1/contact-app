import React from 'react'
import { FieldTimeOutlined, UsergroupAddOutlined, CloudDownloadOutlined, ToolOutlined, DeleteOutlined, DownloadOutlined, BarsOutlined } from '@ant-design/icons'
import { Menu } from 'antd';

const Menulist = () => {
    return (
        <Menu theme="dark">
            <Menu.Item key="Contacts" icon={<UsergroupAddOutlined />}>
                Contacts
            </Menu.Item>
            {/* <Menu.SubMenu key="subtasks" icon={<BarsOutlined />} title="Tasks">
                <Menu.Item key="task-1">Task-1</Menu.Item>
                <Menu.Item key="task-2">Task-2</Menu.Item>
                <Menu.Item key="task-3">Task-3</Menu.Item>
            </Menu.SubMenu> */}
            <Menu.Item key="Frequent" icon={<FieldTimeOutlined />}>
                Frequent
            </Menu.Item>
            <Menu.Item key="Others Contacts" icon={<CloudDownloadOutlined />}>
                Others Contacts
            </Menu.Item>
            <Menu.Item key="Marge And Fixed" icon={<ToolOutlined />}>
                Marge And Fixed
            </Menu.Item>
            <Menu.Item key="Import" icon={<DownloadOutlined />}>
                Import
            </Menu.Item>
            <Menu.Item key="Bin" icon={<DeleteOutlined />}>
                Bin
            </Menu.Item>
        </Menu>
    )

}

export default Menulist;
