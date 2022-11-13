import { Button, Drawer, Typography, Switch } from "antd";

import classes from "./dashboardLayout.module.scss";
const { Title, Text } = Typography;

const SideSettingDrawer = ({
  hideDrawer,
  visible,
  handleFixedNavbar,
  handleSidenavColor,
}) => {
  return (
    <Drawer
      className={classes["settings-drawer"]}
      mask={true}
      width={360}
      onClose={hideDrawer}
      placement="right"
      visible={visible}
    >
      <div layout="vertical">
        <div className={classes["header-top"]}>
          <Title level={4}>
            Configuration
            <Text className={classes["subtitle"]}>
              Change configuration of your dashboard
            </Text>
          </Title>
        </div>

        <div className={classes["sidebar-color"]}>
          <Title level={5}>Sidebar Color</Title>
          <div className={classes["theme-color"]}>
            <div className="btnContainer">
              <Button
                type="primary"
                onClick={() => handleSidenavColor("#1890ff")}
              >
                1
              </Button>
              <Button
                type="success"
                onClick={() => handleSidenavColor("#52c41a")}
              >
                1
              </Button>
              <Button
                type="danger"
                onClick={() => handleSidenavColor("#d9363e")}
              >
                1
              </Button>
              <Button
                type="yellow"
                onClick={() => handleSidenavColor("#fadb14")}
              >
                1
              </Button>

              <Button type="black" onClick={() => handleSidenavColor("#111")}>
                1
              </Button>
            </div>
          </div>

          <div>
            <Title level={5}>Nazvbar Fixed </Title>
            <Switch onChange={(e) => handleFixedNavbar(e)} />
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default SideSettingDrawer;
