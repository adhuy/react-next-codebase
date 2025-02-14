import React, { useState } from "react";
import { SidebarIcon, SidebarCloseIcon } from "lucide-react";
import "./sidebar.css";

export interface SidebarProps {
  list: { label: string, icon: React.ReactNode }[];
  title?: string;
  className?: string;
}

export const Sidebar = ({
  list,
  title = 'Project Name',
  className
}:SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const widthBar = isOpen ? { width: '300px' } : { width: '60px' };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('');
  };

  return (
    <div className={['sidebar-wrapper', className].join(' ')} style={widthBar}>
      <div className='sidebar-collapse-icon'>
        {isOpen ? <SidebarCloseIcon onClick={() => setIsOpen(!isOpen)} /> : <SidebarIcon onClick={() => setIsOpen(!isOpen)} />}
      </div>
      <div className='sidebar-header'>
        <h2>
          {isOpen ? title : getInitials(title)}
        </h2>
      </div>
      <div className='sidebar-body'>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {isOpen ? item.label : item.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
