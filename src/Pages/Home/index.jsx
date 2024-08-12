import React from 'react';
import { styles } from './style';
// import './index.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    return ( 
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to Gameathon</h1>
            <div style={styles.gameNameContainer} onClick={()=>navigate('/tic-tac-toe')}>
                <div>Tic Tac Toe</div>
            </div>
            <div style={styles.gameNameContainer} onClick={()=>navigate('/minesweeper')}>
                <div>Minesweeper</div>
            </div>
        </div>
     );
}
 
export default Home;