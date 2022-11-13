import { sidenavIcons } from "./icons";

export const dashboardPagesData = {
  main: [
    {
      key: 1,
      link: "/dashboard/dashboard",
      icon: sidenavIcons.dashboard,
      label: "Dashboard",
    },
    {
      key: 2,
      link: "/dashboard/user-managment",
      icon: sidenavIcons.profile,
      label: "User Managment",
    },
    {
      key: 3,
      link: "/dashboard/plans",
      icon: sidenavIcons.billing,
      label: "Plans",
    },
  ],
  account: [
    {
      key: 201,
      link: "/dashboard/profile",
      icon: sidenavIcons.profile,
      label: "Profile",
    },
  ],
};
