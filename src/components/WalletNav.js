import React from 'react';
import loupe from './assets/loupe.png';

const WalletNav = () => {

    function searchZone() {
        document.getElementById("searchZone").classList.toggle("showZone");
    }

    function search() {

        var input, filter, ul, li, a, i;
        var anim = document.querySelectorAll('.showZone');
        input = document.getElementById("mySearch");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myMenu");
        li = ul.getElementsByTagName("li");

        for (i = 0; i < li.length; i++) {

        a = li[i].getElementsByTagName("a")[0];
            if ((a.innerHTML.toUpperCase().indexOf(filter) > -1)&&(anim[i].style.animationPlayState === 'paused')) {
                li[i].style.display = "";
                anim[i].style.animationPlayState = 'running';
            } else {
                li[i].style.display = "none";
                anim[i].style.animationPlayState = 'paused';
            }
        }
    }

    return (
        <div className='wallet-navigation'>
            <footer>
                <div>
                    <dl>
                        Valeur portefeille :<dd>5000 €<br/>12 BIT</dd>
                    </dl>

                    <dl>
                        <nav>
                            <ul>
                                <li>Favoris</li><li>Ajouter</li><li>Récents</li>
                            </ul>
                        </nav>

                        <span id="searchZone" className="search-content">
                            <input type="search" placeholder="trouver dans mes cartes…" id='mySearch' onKeyUp={search}/>
                            <ul id='myMenu'>
                                <li><a href='#doubt'>blond by Franck Ocean</a><p>120v</p></li>
                                <li><a href='#crisis'>crisis by krix</a><p>120v</p></li>
                                <li><a href='#blind'>blind by futur</a><p>120v</p></li>
                                <li><a href='#Ovid'>Ovid by Covid404</a><p>120v</p></li>
                            </ul>
                        </span>
                        <button onClick={searchZone}><img src={loupe} alt="loupe" /></button>
                    </dl>
                </div>
            </footer>
        </div>
    );
};

export default WalletNav;