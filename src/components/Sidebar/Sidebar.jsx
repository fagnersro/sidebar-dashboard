import React, { useState } from 'react';
import '../../assets/image/photo.jpg';
// ICONS
import {
  menu,
  logo,
  search,
  gridSvg,
  pet,
  user,
  vet,
  settings,
  logOut,
} from '../../assets/svgIcons';

// CSS
import './style.css';

const Sidebar = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const descriptionItem = document.getElementsByClassName('.item-descricao');

  function togleSidebar() {
    //SELECTS ELEMENTS
    const containerSideBarOpen = document.querySelector(
      '.container-sidebar-open'
    );

    const containerSideBarClose = document.querySelector(
      '.container-sidebar-close'
    );

    if (sideOpen) {
      containerSideBarOpen.style.display = 'none';
      containerSideBarClose.style.display = 'flex';

      setSideOpen(false);
    } else {
      containerSideBarOpen.style.display = 'flex';
      containerSideBarClose.style.display = 'none';

      setSideOpen(true);
    }
  }

  return (
    <>
      <div className="container-sidebar-open">
        <aside className="sidebar-open">
          <nav>
            <ul className="ul-sidebar-open">
              <li className="li-sidebar-open">
                {logo}
                <button
                  id="btn-sidebar-open"
                  onClick={() => {
                    togleSidebar();
                  }}
                >
                  {menu}
                </button>
              </li>
              <li className="search-sidebar-open">
                {search}
                <input type="text" placeholder="Buscar" />
              </li>
              <li>
                {gridSvg}
                <p className="item-descricao">dashboard</p>
              </li>
              <li>
                {pet}
                <p className="item-descricao">pets</p>
              </li>
              <li>
                {user}
                <p className="item-descricao">clientes</p>
              </li>
              <li>
                {vet}
                <p className="item-descricao">vets</p>
              </li>
              <li>
                {settings}
                <p className="item-descricao">ajustes</p>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="user-open">
          <div className="wrapper-use-open">
            <div className="photo-use-open"></div>
            <span style={{ marginRight: '47px' }}>
              <span
                style={{
                  display: 'block',
                  fontSize: '1.5rem',
                  fontWeight: '400',
                }}
              >
                Eleanor Pena
              </span>
              <span
                style={{
                  display: 'block',
                  fontWeight: '400',
                  fontSize: '12px',
                }}
              >
                Veterinária
              </span>
            </span>
            {logOut}
          </div>
        </div>
      </div>

      <div className="container-sidebar-close">
        <aside className="sidebar-close">
          <nav>
            <ul className="ul-sidebar-close">
              <li>
                <button id="btn-sidebar-close" onClick={togleSidebar}>
                  {menu}
                </button>
              </li>
              <li className="search-sidebar-close" id="search-sidebar-close-id">
                {search}
              </li>
              <li>{gridSvg}</li>
              <li>{pet}</li>
              <li>{user}</li>
              <li>{vet}</li>
              <li>{settings}</li>
            </ul>
          </nav>
        </aside>

        <div className="user-close">
          <div>{logOut}</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
