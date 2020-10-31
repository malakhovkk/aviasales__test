
import React, { useMemo } from 'react';


import styles from './Voucher.module.css'

function Voucher( {children, price, carrier, originFrom, destinationFrom, timeStartFrom, timeEndFrom, dateFrom, durationFrom, stopsFrom, originTo, destinationTo, dateTo, stopsTo, durationTo, timeStartTo, timeEndTo}) {
    console.log(stopsFrom);
    let stopsCities1 = stopsFrom.join(", ");
    let stopsCities2 = stopsTo.join(", ");
    useMemo(
        () =>{
    function convertPrice(price)
    {
        let p = price % 1000;
        if(p < 10) return "00" + p;
        if(p < 100) return "0" + p;
        return p;
    }}, price);
    return (
    <div className="voucher">
    <div className={styles.first}>
      <div className={styles.voucher__price}>
  {`${Math.floor(price / 1000)} ${convertPrice(price)}`} Р
      </div>
      <div className={styles.voucher__logo}>
          <img src="s7.png"/>
      </div>
  </div>
  <div className={styles.second}>
      <div className={styles.voucher__item}>
          <div className={styles.voucher__title}>
              {originFrom} - {destinationFrom}
          </div>
          <div className={styles.voucher__content}>
               {timeStartFrom} - {timeEndFrom}
          </div>
      </div>

      <div className={styles.voucher__item}>
          <div className={styles.voucher__title}>
              В пути
          </div>
          <div className={styles.voucher__content}>
                {durationFrom}
          </div>
      </div>

      <div className={styles.voucher__item}>
          <div className={styles.voucher__title}>
        {stopsFrom.length > 0 ? stopsFrom.length: "Без" } пересадки
          </div>
          <div className={styles.voucher__content}>
                {stopsCities1}
          </div>
      </div>
      <div className={styles.voucher__item}>
          <div className={styles.voucher__title}>
          {originTo} - {destinationTo}
          </div>
          <div className={styles.voucher__content}>
            {timeStartTo} - {timeEndTo}
          </div>
      </div>
      <div className={styles.voucher__item}>
          <div className={styles.voucher__title}>
              В пути
          </div>
          <div className={styles.voucher__content}>
                {durationTo}
          </div>
      </div>
      <div className={styles.voucher__item}>
          <div className={styles.voucher__title}>
          {stopsTo.length > 0 ? stopsTo.length: "Без" } пересадки
          </div>
          <div className={styles.voucher__content}>
              {stopsCities2}
          </div>
      </div>
  </div>
</div>
  );
}

export default Voucher;
