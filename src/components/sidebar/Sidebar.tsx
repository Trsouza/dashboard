import { Avatar, Layout, Menu, } from "antd";
import Title from 'antd/lib/typography/Title';
import '../../App.css';
import {
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import {

} from "./styles";

const { Header, Sider } = Layout;

// interface IProps {
//   children: React.ReactNode;
// }

//const { Content } = Layout;
//const { SubMenu } = Menu;

const Sidebar = () => {

  //const navigate = useNavigate();

// So in v5, you can have:
// import { useHistory } from "react-router-dom";
// let history = useHistory();
// history.push("/home");

// But in v6, you have to switch it to :
// import { useNavigate } from "react-router-dom";
// let navigate = useNavigate();
// navigate("/home");

  return (

    <div className="side-custom" style={{position: "fixed"}}>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: 'right' }} src='./dp.png' />
          <Title style={{ color: 'white' }} level={3}>TATHI</Title>
        </Header>
        <Layout>
          <Sider >
            <Menu
              defaultSelectedKeys={['Home']}
              mode="inline"
              theme="dark"
            >
              <Menu.Item key='Home' icon={<HomeOutlined />} > <Link to="/">Home</Link></Menu.Item>
              <Menu.Item key='settings' icon={<SettingOutlined />} > <Link to="/settings">Settings</Link></Menu.Item>      

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
          {/* <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
            </Content>
           <div>
           <Footer style={{marginTop: 30, width: "100%", textAlign: 'center' }}>Ant Design Layout </Footer>
           </div>
          </Layout> */}
        </Layout>
      </Layout>
    </div>

  );
};

export default Sidebar;
