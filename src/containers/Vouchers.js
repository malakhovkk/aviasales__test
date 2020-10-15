import React,{useState} from 'react';

import info from './vouchers.json'

function Vouchers() {
    const [_info, setInfo] = useState(info);
    let res = {};
    let min = info.tickets[0];

    info.tickets.forEach(el =>{
        if(el.price < min.price)
        {
            res = el;
        }
    } )

  return (
    <div className="vouchers">
        <button className="split active">
            Самый дешевый
        </button>
        <button className="split" id="second">
            Самый быстрый
        </button>
        <div className="voucher">
              <div className="first">
                <div className="voucher__price">
            {res.price} Р
                </div>
                <div className="voucher__logo">
                    <img src="s7.png"/>
                </div>
            </div>
            <div className="second">
                <div className="voucher__item">
                    <div class="voucher__title">
                        {res.segments[0].origin} - {res.segments[0].destination}
                    </div>
                    <div class="voucher__content">
                        10:45 - 08:00
                    </div>
                </div>

                <div className="voucher__item">
                    <div class="voucher__title">
                        В пути
                    </div>
                    <div class="voucher__content">
                        21ч 15м
                    </div>
                </div>

                <div className="voucher__item">
                    <div class="voucher__title">
                        2 пересадки
                    </div>
                    <div class="voucher__content">
                        HKJ, JNB
                    </div>
                </div>
                <div className="voucher__item">
                    <div class="voucher__title">
                    {res.segments[0].origin} - {res.segments[0].destination}
                    </div>
                    <div class="voucher__content">
                        11:20 - 00:50
                    </div>
                </div>
                <div className="voucher__item">
                    <div class="voucher__title">
                        В пути
                    </div>
                    <div class="voucher__content">
                        13ч 30м
                    </div>
                </div>
                <div className="voucher__item">
                    <div class="voucher__title">
                        1 пересадка
                    </div>
                    <div class="voucher__content">
                        Hkg
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Vouchers;