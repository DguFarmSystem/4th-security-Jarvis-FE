import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardIcon } from "../../../assets/icons/DashboardIcon";
import { ProfileIcon } from "../../../assets/icons/ProfileIcon";
import { ResourceIcon } from "../../../assets/icons/ResourceIcon";
import { SessionIcon} from "../../../assets/icons/SessionIcon";
import { ManagementIcon } from "../../../assets/icons/ManagementIcon";

interface TabProps {
  title?: string;
}

export const Tab = ({ title = "" }: TabProps) => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
   const navigate = useNavigate(); 

  const menus = [
    { name: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { name: "Profile", icon: <ProfileIcon />, path: "/profile" },
    { name: "Resource", icon: <ResourceIcon />, path: "/resource" },
    { name: "Session", icon: <SessionIcon />, path: "/sessions" },
    { name: "Management", icon: <ManagementIcon />, path: "/management" },
  ];

  return (
    <div
      style={{
        width: 'var(--tab-width, 325px)', 
        height: 'var(--tab-height, 920px)',
        backgroundColor: 'var(--color-blue-200)',
        boxShadow: 'var(--shadow-tab)',
        borderRadius: '40px 0 0 40px',
      }}
    >
      {/* Title 전용 패딩 */}
      <div
        style={{
          paddingTop: "41px",
          paddingRight: "69px",
          paddingBottom: "0px",
          paddingLeft: "82px",
        }}
      >
        <div
          style={{
            color: "#FFF",
            fontFamily: "var(--font-pretendard)",
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "normal",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </div>
      </div>

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {menus.map(({ name, icon }) => (
          <div
  key={name}
  onClick={() => setActiveMenu(name)}
  style={{
    height: "55px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "25px",
    paddingLeft: "22px", // 아이콘 여백만 줌
    cursor: "pointer",
    backgroundColor:
      activeMenu === name ? "var(--color-blue-300)" : "transparent",
    transition: "background-color 0.2s ease-in-out",
    width: "100%", // 부모 너비에 맞춤
    boxSizing: "border-box", // padding 포함
    color: "#FFF",
  }}
>
  {icon}
  <span
    style={{
      color: "#FFF",
      fontFamily: "var(--font-pretendard)",
      fontSize: "28px",
      fontWeight: 300,
      lineHeight: "normal",
    }}
  >
    {name}
  </span>
</div>
        ))}
      </div>
       </div>
  );
};