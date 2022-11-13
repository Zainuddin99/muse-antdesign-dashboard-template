import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import {
  dashboardPagesData,
} from "./constants";
import classes from "./dashboardLayout.module.scss";
import { sidenavIcons } from "./icons";

function Sidenav({ color }) {
  const { pathname } = useLocation();

  return (
    <>
      <div className={classes["brand"]}>
        <span>Dashboard</span>
      </div>

      <hr />

      <Menu theme="light" mode="inline">
        {dashboardPagesData.main.map((item) => {
          const { key, link, icon, label } = item;
          return (
            <Menu.Item key={key}>
              <NavLink to={link}>
                <span
                  className="icon"
                  style={{
                    background: pathname === link ? color : "",
                  }}
                >
                  {icon}
                </span>
                <span className="label">{label}</span>
              </NavLink>
            </Menu.Item>
          );
        })}

        <Menu.Item className={"menu-item-header"} key="account">
          Account Pages
        </Menu.Item>

        {dashboardPagesData.account.map((item) => {
          const { key, link, icon, label } = item;
          return (
            <Menu.Item key={key}>
              <NavLink to={link}>
                <span
                  className="icon"
                  style={{
                    background: pathname === link ? color : "",
                  }}
                >
                  {icon}
                </span>
                <span className="label">{label}</span>
              </NavLink>
            </Menu.Item>
          );
        })}
      </Menu>

      <div className={classes["aside-footer"]}>
        <div
          className={classes["footer-box"]}
          style={{
            background: color,
          }}
        >
          <span className={classes["icon"]} style={{ color }}>
            {sidenavIcons.dashboard}
          </span>
          <h6>Need Help?</h6>
          <p>Please check our docs</p>
          <Button
            type="primary"
            className="ant-btn-sm ant-btn-block"
          >
            DOCUMENTATION
          </Button>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
