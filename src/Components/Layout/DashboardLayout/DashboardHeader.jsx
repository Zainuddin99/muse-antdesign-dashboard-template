import { useState, useEffect } from "react";

import { Row, Col, Breadcrumb, Button, Space } from "antd";

import { NavLink, useLocation } from "react-router-dom";
import classes from "./dashboardLayout.module.scss";
import { dashboardHeaderIcons } from "./icons";
import SideSettingDrawer from "./SideSettingDrawer";

function Header({ onPress, handleSidenavColor, handleFixedNavbar }) {
  const [isSettingDrawerVisible, setIsSettingDrawerVisible] = useState(false);

  const { pathname } = useLocation();
  const splittedPath = pathname.split("/");
  const mainPath = splittedPath[splittedPath.length - 1];

  useEffect(() => window.scrollTo(0, 0));

  const showSettingDrawer = () => setIsSettingDrawerVisible(true);
  const hideSettingDrawer = () => setIsSettingDrawerVisible(false);

  return (
    <>
      {/* Setting icon of bottom of page to open setting drawer */}
      {/* <div className={classes["setting-drwer"]} onClick={showSettingDrawer}>
        {dashboardHeaderIcons.setting}
      </div> */}

      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">Home</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
              {mainPath}
            </Breadcrumb.Item>
          </Breadcrumb>

          <div className={classes["header-heading"]}>
            <span className={classes["header-heading-title"]}>
              {mainPath.replace("-", " ")}
            </span>
          </div>
        </Col>

        <Col span={24} md={18} className={`${classes["header-control"]}`}>
          <Space direction="horizontal" align="center">
            <NavLink style={{ fontWeight: "500" }} to={"/"}>
              Home
            </NavLink>

            <Button
              type="link"
              className={classes["sidebar-toggler"]}
              onClick={() => onPress()}
            >
              {dashboardHeaderIcons.toggler}
            </Button>
            <Button type="link" onClick={showSettingDrawer}>
              {dashboardHeaderIcons.logsetting}
            </Button>
          </Space>
        </Col>
      </Row>

      {/* Side setting drawer */}
      <SideSettingDrawer
        handleFixedNavbar={handleFixedNavbar}
        handleSidenavColor={handleSidenavColor}
        hideDrawer={hideSettingDrawer}
        visible={isSettingDrawerVisible}
      />
    </>
  );
}

export default Header;
