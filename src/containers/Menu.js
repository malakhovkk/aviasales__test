import React from 'react';

import styles from './Menu.module.css'

function Menu() {
  return (
    <div className={styles.menu}>
        <div className={styles.menuTitle}>Количество пересадок</div>
        <ul className="menu__list">
            <li className="menu__list__item">
            <label className="menu__name"><input className="menu__checkbox" type="checkbox" name="all"/><span className="rect"></span>Все</label>
            </li>
            <li className="menu__list__item">
            <label className="menu__name"><input className="menu__checkbox" type="checkbox" name="zero"/><span className="rect"></span>Без пересадок</label>
            </li>
            <li className="menu__list__item">
            <label className="menu__name"><input className="menu__checkbox" type="checkbox" name="single"/><span className="rect"></span>1 пересадка</label>
            </li>
            <li className="menu__list__item">
            <label className="menu__name"><input className="menu__checkbox" type="checkbox" name="double"/><span className="rect"></span>2 пересадки</label>
            </li>
            <li className="menu__list__item">
            <label className="menu__name"><input className="menu__checkbox" type="checkbox" name="triple"/><span className="rect"></span>3 пересадки</label>
            </li>
        </ul>
    </div>
  );
}

export default Menu;