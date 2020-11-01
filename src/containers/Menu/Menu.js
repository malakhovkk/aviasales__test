import React, {useEffect, useState} from 'react';

import styles from './Menu.module.css'
import Checkbox from '../../components/Checkbox/Checkbox'
function Menu() {
  const [checkbox, setCheckbox] = useState([0, 0, 0, 0, 0]);
  useEffect(
    () =>{
      console.log(checkbox);
    }
  );
  function setTrue(...arr)
  {
    setCheckbox(prev => {
      let res = [...prev];
      arr.forEach(el => res[el] = 1);
      if (res[1] + res[2] + res[3] + res[4] === 4) res[0] = 1;
      return res;
    });
  }
  function setFalse(...arr)
  {
    setCheckbox(prev => {
      let res = [...prev];
      arr.forEach(el => res[el] = 0);
      console.log(arr, res);
      return res;
    });

  }
  return (
    <div className={styles.menu}>
        <div className={styles.menuTitle}>Количество пересадок</div>
        <ul className="menu__list">
            <li className="menu__list__item">
              <Checkbox name="all" checked={checkbox[0]} onChange={(e) => {e.target.checked ?  setTrue(0, 1, 2, 3, 4) : setFalse(0);}} >Все</Checkbox>
            </li>
            <li className="menu__list__item">
              <Checkbox name="zero" checked={checkbox[1]} onChange={(e) => {e.target.checked ? setTrue(1) : setFalse(0,1);}}>Без пересадок</Checkbox>
            </li>
            <li className="menu__list__item">
              <Checkbox name="one" checked={checkbox[2]} onChange={(e) => {e.target.checked ? setTrue(2) : setFalse(0,2);}}>1 пересадка</Checkbox>
            </li>
            <li className="menu__list__item">
             <Checkbox name="double" checked={checkbox[3]} onChange={(e) =>  {e.target.checked ? setTrue(3) : setFalse(0,3);}}>2 пересадки</Checkbox>
            </li>
            <li className="menu__list__item">
              <Checkbox name="triple" checked={checkbox[4]} onChange={(e) => {e.target.checked ? setTrue(4) : setFalse(0,4);}}>3 пересадки</Checkbox>
            </li>
        </ul>
    </div>
  );
}

export default Menu;