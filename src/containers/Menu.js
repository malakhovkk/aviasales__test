import React from 'react';

import styles from './Menu.module.css'

function Menu() {
  return (
    <div className={styles.menu}>
        <div className={styles.menuTitle}>Количество пересадок</div>
        <ul className="menu__list">
            <li className="menu__list__item">
            <label className="menu__name"><input className="menu__checkbox" type="checkbox" name="all"/><div className="menu__checkmark"><svg className="rect" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z" fill="#2196F3"/>
</svg></div>Все</label>
            </li>
            <li className="menu__list__item">
            <label className="menu__name"><input className="menu__checkbox" type="checkbox" name="zero"/><div className="menu__checkmark"><svg className="rect" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z" fill="#2196F3"/>
</svg></div>Без пересадок</label>
            </li>
            <li className="menu__list__item">
            <label className="menu__name"><input className="menu__checkbox" type="checkbox" name="single"/><div className="menu__checkmark"><svg className="rect" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z" fill="#2196F3"/>
</svg></div>1 пересадка</label>
            </li>
            <li className="menu__list__item">
            <label className="menu__name"><input className="menu__checkbox" type="checkbox" name="double"/><div className="menu__checkmark"><svg className="rect" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z" fill="#2196F3"/>
</svg></div>2 пересадки</label>
            </li>
            <li className="menu__list__item">
            <label className="menu__name"><input className="menu__checkbox" type="checkbox" name="triple"/><div className="menu__checkmark"><svg className="rect" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z" fill="#2196F3"/>
</svg></div>
3 пересадки</label>
            </li>
        </ul>
    </div>
  );
}

export default Menu;