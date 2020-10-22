import React from 'react';

import styles from './Menu.module.css'
import Checkbox from '../../components/Checkbox/Checkbox'
function Menu() {
  return (
    <div className={styles.menu}>
        <div className={styles.menuTitle}>Количество пересадок</div>
        <ul className="menu__list">
            <li className="menu__list__item">
              <Checkbox name="all">Все</Checkbox>
            </li>
            <li className="menu__list__item">
              <Checkbox name="zero">Без пересадок</Checkbox>
            </li>
            <li className="menu__list__item">
              <Checkbox name="one">1 пересадка</Checkbox>
            </li>
            <li className="menu__list__item">
             <Checkbox name="double">2 пересадки</Checkbox>
            </li>
            <li className="menu__list__item">
              <Checkbox name="triple">3 пересадки</Checkbox>
            </li>
        </ul>
    </div>
  );
}

export default Menu;