import React, { useEffect, useState } from 'react';
import { styles } from './style';

const TicTacToe = () => {
    const [value, setValue] = React.useState(['','','','','','','','','']);
    const [currentX, setCurrentX] = React.useState(true);
    const [lock, setLock] = useState(false)
    const[count, setCount] = useState(0)
    const [winCount, setWinCount] = useState({X: 0, O: 0})

    const handleClick = (idx) => {
        // if(value[i][j] === '') {
        //     const newValue = [...value];
        //     newValue[i][j] = currentvalue;
        //     setValue(newValue);
        //     setCurrentValue(currentvalue === 'X' ? 'O' : 'X');
        // }
        if(!lock && value[idx] === '') {
                const newValue = [...value];
                newValue[idx] = currentX ? 'X' : 'O';
                setValue(newValue);
                setCurrentX(!currentX);
                setCount(prev=>prev+1)
                console.log("newValye", count)
        }
    }
    const handleReset=()=>{
        setValue(['','','','','','', '','',''])
        setCount(0)
        setLock(false)
    }
    const handleWin=(win)=>{
        if(win==='Draw'){
            alert(win)
        }else{
            setWinCount(prev=>({...prev, [win]: prev[win]+1}))
        }
        setLock(true)
        
    }
    useEffect(() => {
        if(value[0]===value[1] && value[1]===value[2] && value[2]!==''){
            handleWin(value[2])
        }
        if(value[3]===value[4] && value[4]===value[5] && value[5]!==''){
            handleWin(value[5])
        }
        if(value[6]===value[7] && value[7]===value[8] && value[8]!==''){
            handleWin(value[8])
        }
        if(value[0]===value[3] && value[3]===value[6] && value[6]!==''){
            handleWin(value[6])
        }
        if(value[1]===value[4] && value[4]===value[7] && value[7]!==''){
            handleWin(value[7])
        }
        if(value[2]===value[5] && value[5]===value[8] && value[8]!==''){
            handleWin(value[8])
        }
        if(value[0]===value[4] && value[4]===value[8] && value[8]!==''){
            handleWin(value[8])
        }
        if(value[2]===value[4] && value[4]===value[6] && value[6]!==''){
            handleWin(value[6])
        }
    },[value])
    return ( 
        <div style={styles.container}>
            <div style={styles.title}>Tic Tac Toe</div>
            {lock ? <div style={{padding: '8px', fontSize: '2rem', color:'white'}}>Congratution <span style={{color: !currentX ? 'red' : 'blue'}}>{!currentX ? 'X' : 'O'}</span> win</div>
            : count===9 && !lock ?
                <div style={{padding: '8px', fontSize: '2rem',  color: 'red'}}>Match Draw! Play Again</div>
            :<div style={{padding: '8px', fontSize: '2rem', color: 'red'}}></div>
            }
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{color: 'white', fontSize: '1.5rem', padding: '0px 30px'}}><span style={{color: 'blue'}}>O :</span> {winCount.O}</div>
                <div style={{color: 'white', fontSize: '1.5rem', padding: '0px 30px'}}><span style={{color: 'red'}}>X :</span> {winCount.X}</div>
            </div>
            <div style={{borderWidth: 1, borderColor: 'black', aspectRatio: 1, display: 'grid'}}>
                <div style={styles.gridRow}>
                {value.map((item, idx)=>(
                    <div key={idx} style={{...styles.gridItem, color: item==='X' ? 'red' : 'blue'}} onClick={()=>handleClick(idx)}>
                        {item}
                    </div>
                ))}
                </div>
            </div>
            <div style={styles.resetButton} onClick={handleReset}>Play Again</div>
        </div>
     );
}
 
export default TicTacToe;