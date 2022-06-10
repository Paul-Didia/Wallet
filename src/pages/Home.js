import React from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import WalletNav from '../components/WalletNav';

const Home =() => {


    return (
        <div className="home">
            <Header/>
            <div className='zone-1'>
                <Cards/>
            </div>

            <p>Bibliothèque</p>
            <div className='bibliotheque'>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>

            <WalletNav/>
        </div>
    );
}

export default Home;
