import React from 'react';
import Label from './Label';

const Cards = () => {

    function cardInformation() {
        document.getElementById("myDropdown").classList.toggle("show");
      }

    return (
        <div className='cards' id='#doubt' alt="flyp">
            <div className='cards-form' onClick={cardInformation}>
                <img src={''} alt=""/>
                <span>
                    <p>blond<br/>by. Franck Ocean</p>
                    <Label/>
                </span>
                <div id="myDropdown" className="dropdown-content">
                    <dd><p>&#x1F4C5; Date :</p><p>01/01/2022</p></dd>
                    <dd><p>Valeur :</p><p>12000 v</p></dd>
                    <dd><p>N° carte :</p><p>75887878703</p></dd>
                </div>
            </div>
        </div>
    );
};

export default Cards;