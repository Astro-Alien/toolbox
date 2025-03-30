import * as Icons from "react-icons/fa";

function SideBarIcons({ icon, tooltip }) {
  const IconComponent = Icons[icon]; // Dynamically get the icon component

  return (
    <div className="sidebar-icon group">
        {IconComponent && <IconComponent size="28" />} {/* Render the icon */}
        <span className="sidebar-tooltip group-hover:scale-100">
            {tooltip}
        </span>
    </div>
  );
}

export default SideBarIcons;