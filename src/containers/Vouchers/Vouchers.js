import React,{useState, useEffect} from 'react';

import info from './vouchers.json'
import Voucher from '../../components/Voucher/Voucher'
import styles from './Vouchers.module.css'
function Vouchers() {
    const [_info, setInfo] = useState(info);
    const [res, setRes] = useState([]);
    const [sortType, setSortType] = useState(true);
    useEffect (
        () =>{

            let sorted=[..._info.tickets];
            if(sortType) 
            {
                sorted.sort((el1, el2) => el1.price - el2.price);
            }
            else
            {
                sorted.sort((el1, el2) => el1.segments[0].duration + el1.segments[1].duration  - (el2.segments[0].duration + el2.segments[1].duration ));
            }
            setRes(sorted.slice(0,4));
            console.log(1);
        },[sortType]
    );
   
  function convertDur(duration)
  {
      return `${Math.floor(duration / 60)} ч ${duration % 60} м` ;
  }
  function convertTime(date, duration)
  {
      return date.slice(0, 4);
  }
  console.log(res);
  if(Object.keys(res).length == 0)
  {
    return (<div>Loading...</div>);
  }
  else
  return (
    <div className={styles.vouchers}>
        <button className={`${styles.split} ${sortType ?  styles.active : ""} `}  onClick={() => setSortType(true)}>
            Самый дешевый
        </button>
        <button  className={`${styles.split} ${!sortType ?  styles.active : ""} `} onClick={() => setSortType(false)}  id="second">
            Самый быстрый
        </button>
        {
            res && res.map((el, i) =>{
                return(
                    <Voucher key={i} price={el.price} carrier={el.carrier} stopsFrom={el.segments[0].stops} originFrom={el.segments[0].origin}
                            destinationFrom={el.segments[0].destination} timeStartFrom={convertTime(el.segments[0].date)} originTo={el.segments[1].origin} destinationTo={el.segments[1].destination}
                            timeEndFrom={convertTime(el.segments[0].date, el.segments[0].duration)} stopsTo={[...el.segments[1].stops]}  durationFrom={convertDur(el.segments[0].duration)} timeStartTo={convertTime(el.segments[1].date)}
                            timeEndTo={convertTime(el.segments[1].date, el.segments[1].duration)} durationTo={convertDur(el.segments[1].duration)} />
                );
            })
        }
        </div>
  );
}

export default Vouchers;