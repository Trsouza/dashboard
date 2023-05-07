import { Avatar, Breadcrumb, Layout, Menu } from "antd";
import Title from "antd/lib/typography/Title";
import "../../App.css";
import { HomeOutlined, SettingOutlined, DingdingOutlined, RadarChartOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

import {} from "./styles";
import { Footer } from "antd/lib/layout/layout";

const { Header, Sider } = Layout;

interface IProps {
  children: React.ReactNode;
}

const { Content } = Layout;
//const { SubMenu } = Menu;

const Sidebar: React.FC<IProps> = ({ children }) => {
 
  //const navigate = useNavigate();
  const location = useLocation();

  // So in v5, you can have:
  // import { useHistory } from "react-router-dom";
  // let history = useHistory();
  // history.push("/home");

  // But in v6, you have to switch it to :
  // import { useNavigate } from "react-router-dom";
  // let navigate = useNavigate();
  // navigate("/home");

  return (
    <div className="side-custom" style={{ }}>
      {/*  <div className="side-custom" style={{ position: "fixed" }}> */}
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ padding: "20px 10px"}}>
          {/* <Avatar style={{ float: 'right' }} src='./dp.png' /> */}
          <Title style={{ color: "#49ed64" }} level={3}> 
            <DingdingOutlined />
            {" "} Digital Coins
          </Title>
        </Header>
        <Layout>
          <Sider>
          {/* defaultSelectedKeys={["Home"]} */}
            <Menu mode="inline" theme="dark"> 
              <Menu.Item key="Home" icon={<HomeOutlined />} className={location.pathname==='/home'?'sidebar_active':''}>
                <Link to="/home">Home</Link>
              </Menu.Item>
              <Menu.Item key="coins" icon={<RadarChartOutlined />} className={location.pathname.includes('/coins')?'sidebar_active':''}>
                <Link to="/coins" >Coins</Link>
              </Menu.Item>
              <Menu.Item key="settings" icon={<SettingOutlined />} className={location.pathname==='/settings'?'sidebar_active':''}>
                <Link to="/settings">Settings</Link>
              </Menu.Item>

              {/* <SubMenu
                title={
                  <span>
                    <span>Sub menu</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='submenu' title='Title'>
                  <Menu.Item key='location1' icon={<HomeOutlined />} > <Link to="/">Home</Link></Menu.Item>
                  <Menu.Item key='location2' icon={<SettingOutlined />} > ></Menu.Item>
                </Menu.ItemGroup>
              </SubMenu> */}
            </Menu>
          </Sider>
          <Layout>
            <Content className="content-side" style={{ padding: '0 10px', width: "" }}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb> */}
               {children}
            </Content>
           <Footer style={{marginTop: 30, width: "", textAlign: 'center', backgroundColor: "#c7d4c9", padding: "10px 0" , color: "#658387"}}>© 2022 Trs. All rights reserved.</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Sidebar;
