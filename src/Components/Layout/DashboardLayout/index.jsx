import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Drawer, Affix } from "antd";
import Header from "./DashboardHeader";
import Sidenav from "./Sidenav";
import classes from "./dashboardLayout.module.scss";

const { Header: AntHeader, Content, Sider } = Layout;

function DashboardLayout() {

  //SIdenav configs
  const [visible, setVisible] = useState(false);
  const [sidenavColor, setSidenavColor] = useState("#1890ff");
  const [fixed, setFixed] = useState(false);

  const openDrawer = () => setVisible(!visible);
  const handleSidenavColor = (color) => setSidenavColor(color);
  const handleFixedNavbar = (type) => setFixed(type);

  return (
    <Layout
      className={`${classes["layout-dashboard"]}`}
    >

      {/* Sidebar for small scrren */}
      <Drawer
        title={false}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        width={250}
        className={classes[`drawer-sidebar`]}
        placement="left"
        key={"right"}
      >
        <Layout className={classes[`layout-dashboard`]}>
          <Sider
            trigger={null}
            width={250}
            theme="light"
            className={`${classes["sider-primary"]} ${classes["ant-layout-sider-primary"]}`}
          >
            <Sidenav color={sidenavColor} />
          </Sider>
        </Layout>
      </Drawer>

      {/* Sidebar for big scrren */}
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        width={250}
        theme="light"
        className={`${classes["sider-primary"]} ${classes["ant-layout-sider-primary"]}`}
      >
        <Sidenav color={sidenavColor} />
      </Sider>

      <Layout className={classes.contentLayout}>
        {fixed ? (
          <Affix className={classes.affix}>
            <AntHeader className={classes.mainHeader}>
              <Header
                onPress={openDrawer}
                handleSidenavColor={handleSidenavColor}
                handleFixedNavbar={handleFixedNavbar}
              />
            </AntHeader>
          </Affix>
        ) : (
          <AntHeader className={classes.mainHeader}>
            <Header
              onPress={openDrawer}
              handleSidenavColor={handleSidenavColor}
              handleFixedNavbar={handleFixedNavbar}
            />
          </AntHeader>
        )}

        <Content className={classes.mainContent}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
