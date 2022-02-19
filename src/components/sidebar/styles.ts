import styled from "styled-components";
import { Layout } from "antd";

const { Header, Sider } = Layout;

export const LogoContainer = styled.div`
  width: 28.1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 3.7rem;
  padding: 0.3rem;
  margin-left: 1rem;

  span {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.3rem;
    color: var(--white);
  }
`;

export const DelLogo = styled.img`
  width: 11.2rem;
  height: 2rem;
`;

export const AvatarUser = styled.div`
  display: grid;
  line-height: 1rem;
  min-height: 0.9rem;
  margin: 0.8rem;
  color: var(--white);
  grid-gap: 10px;
`;

export const ProfileName = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--white);
`;

export const MainHeader = styled(Header)`
  background: var(--blue-600);
  padding: 0;
  height: 54px;

  .ant-layout-header,
  .ant-menu {
    display: flex;
    flex-direction: row;
    height: 14px !important
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ASide = styled(Sider)`
  /* min-height: 100vh; */
  background-color: var(--blue-600);

  .ant-layout-sider-trigger {
  color: var(--white);
  font-size: 1.2rem;
  background: var(--blue-600);
}

.ant-layout-sider-trigger:hover {
  color: var(--white);
  background: var(--blue-900);
}

.ant-dropdown-menu {
  margin-right: 1.5rem;
  min-width: 7.5rem;
  min-height: 2.5rem;
  color: var(--black);
}

.undefined-item {
    color: var(--black);
}

.undefined-item:hover {
    color: var(--black);
}

.ant-dropdown-menu-item {
  clear: both;
  margin: 0;
  padding: 0.3rem 0.75rem;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.4rem;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;
}

.anticon > * {
  line-height: 1;
}

.ant-layout-sider-children {
  height: 20px;
  margin-top: -0.1px;
  padding-top: 0.1px;
  background: var(--blue-800);
}

.ant-layout {
  background: var(--white);
}

.ant-menu-inline > .ant-menu-item-selected {
  background-color: var(--blue-800)!important;
}

.center_page {
  display: inline-block;
}

.align-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.center_div {
  text-align: center;
}

.ant-menu-item-selected:nohover {
  pointer-events: none;
}

.ant-menu-submenu-title:hover {
  background: var(--blue-800);
}

.ant-menu-item:hover {
  background: var(--blue-800);
}

.ant-menu-dark > .ant-menu-item-selected {
  background: var(--blue-600);
}

.ant-menu.ant-menu-dark,
.ant-menu-dark .ant-menu-sub,
.ant-menu.ant-menu-dark .ant-menu-sub {
  color: rgba(255, 255, 255, 0.65);
  background: var(--blue-600);
}

.ant-layout {
  background: var(--white);
}
`;

export const ContainerUser = styled.div`
  width: 8.1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 3.7rem;
  padding: 0.4rem;
  margin-right: 2.5625rem;
`;
