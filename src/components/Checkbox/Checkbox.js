
import React from 'react';

import styles from './Checkbox.module.css'

function Checkbox( {children, ...props}) {
  return (
<label className={styles.menu__name}><input className={styles.menu__checkbox} type="checkbox" name={props.name}/><div className={styles.menu__checkmark}><svg className={styles.rect} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.28571 8L0 4.16123L1.20857 3.0787L4.28571 5.82726L10.7914 0L12 1.09021L4.28571 8Z" fill="#2196F3"/>
  </svg></div>{children}</label>
  );
}

export default Checkbox;
