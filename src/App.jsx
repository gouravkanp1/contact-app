import { useState } from "react";
import { Layout } from "antd";
import Logo from "./components/Logo";
import Menulist from "./components/Menulist";
import ContactBody from "./components/ContactBody";
import './index.css'; // Import Tailwind CSS

const { Header, Sider } = Layout;
function App() {
  return (
    <Layout>
      <Sider className="sidebar">
        <Logo />
        <Menulist />
      </Sider>
    </Layout>
  );
}

export default App;



