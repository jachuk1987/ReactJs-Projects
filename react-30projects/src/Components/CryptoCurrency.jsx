import React, { Component } from 'react';
import bg_icon from "../assets/background.png";
import bitcoin_icon from "../assets/bitcoin.png";
import dogecoin_icon from "../assets/dogecoin.png";
import ether_icon from "../assets/ethereum.png";
import logo_icon from "../assets/logo.png";

export default class CryptoCurrency extends Component {
  render() {
    const styles = {
      body: {
        backgroundImage: `url(${bg_icon})`,
        margin: 0,
        padding: 0,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
      },
      header: {
        display: 'flex',
        width: '100%',
        marginLeft: '100px',
        marginTop: '20px',
      },
      ul: {
        display: 'flex',
        marginRight: '100px',
        listStyle: 'none',
        padding: 0,
      },
      li: {
        margin: '10px',
        cursor: 'pointer',
      },
      language: {
        marginLeft: '300px',
        width: '50px',
        border: '2px solid grey',
        padding: '10px',
        borderRadius: '10px',
        cursor: 'pointer',
      },
      main: {
        display: 'flex',
        marginLeft: '100px',
      },
      block1: {
        marginBottom: '30px',
      },
      cryptoText: {
        color: 'rgb(243, 161, 10)',
      },
      exploreButton: {
        border: '2px solid white',
        borderRadius: '10px',
        width: '150px',
        padding: '10px',
        backgroundColor: 'orange',
        cursor: 'pointer',
        textAlign: 'center',
      },
      block2: {
        display: 'flex',
        marginLeft: '500px',
        width: '900px',
        marginTop: '150px',
      },
      card: {
        display: 'flex',
        margin: '20px',
        padding: '10px',
        border: '2px solid grey',
        borderRadius: '20px',
        alignItems: 'center',
        color: 'black',
        backgroundColor: 'white',
      },
      cardContent: {
        marginLeft: '20px',
      },
    };

    return (
      <div style={styles.body}>
        <header style={styles.header}>
          <ul style={styles.ul}>
            <li style={styles.li}>Market</li>
            <li style={styles.li}>Features</li>
            <li style={styles.li}>White paper</li>
            <li style={styles.li}>About us</li>
          </ul>
          <div>
            <h4 style={styles.language}>EN</h4>
          </div>
        </header>

        <div id="main" style={styles.main}>
          <div id="block1" style={styles.block1}>
            <h1>Buy &</h1>
            <h1>SELL <span style={styles.cryptoText}>Crypto</span></h1>
            <p>World's biggest cryptocurrency exchange available on web<br />as well as mobile phone</p>
            <div style={styles.exploreButton}>EXPLORE MORE</div>
          </div>
        </div>

        <div id="block2" style={styles.block2}>
          <div className="one" style={styles.card}>
            <img src={bitcoin_icon} alt="Bitcoin" />
            <div className="two" style={styles.cardContent}>
              $484111<br />
              Bitcoin
            </div>
          </div>

          <div className="one" style={styles.card}>
            <img src={ether_icon} alt="Ethereum" />
            <div className="two" style={styles.cardContent}>
              $3873.4<br />
              Ethereum
            </div>
          </div>

          <div className="one" style={styles.card}>
            <img src={dogecoin_icon} alt="Dogecoin" />
            <div className="two" style={styles.cardContent}>
              $0.179935<br />
              Dogecoin
            </div>
          </div>
        </div>
      </div>
    );
  }
}
