import React from 'react';


const MenuListItem = ({title}) => {
    return (
        <div classmenu="menu-modal__content">
          <h4 classmenu="menu__name selected">{title}</h4>
        </div>
      )
}

export default MenuListItem;