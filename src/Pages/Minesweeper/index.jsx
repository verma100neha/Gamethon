import React, { useEffect, useState } from 'react';
import { Colors } from '../../Constants/colors';

const Minesweeper = () => {
    const [n, setN] = useState(8)
    const [win, setWin] = useState(undefined)
    const [level, setLevel] = useState('easy')
    const [totalMines, setTotalMines] = useState(10)
    const colors = ['#ffd1a9', '#d3c0f0', '#f8b6d8'];
    let mines = 0
    const randomColor=()=>{
      return colors[Math.floor(Math.random()*colors.length)]
  }
    const [data, setData] = useState(Array.from({ length: n }, () => Array(n).fill({isMine: false, isOpen: false, isFlag: false, adjacentMines: 0})))
    const handleSetData=(n)=>{
      setData(prev=>Array.from({ length: n }, () => Array(n).fill({isMine: false, isOpen: false, isFlag: false, adjacentMines: 0})))
    }
    useEffect(()=>{
        if(level==='easy'){
          handleSetData(8)
            setN(8)
            setTotalMines(10)
        }else if(level==='medium'){
          handleSetData(12)
            setN(12)
            setTotalMines(30)
        }else if(level==='hard'){
          handleSetData(20)
            setN(20)
          setTotalMines(70)
        }
    },[level])

    const random=(limit)=>{
        return Math.floor(Math.random()*limit)
    }
    const placeMines=()=>{
        const newData = [...data]
        while(mines<totalMines){
            let row=random(n)
            let column= random(n)
            if(newData[row][column]?.isMine===false){
                newData[row][column] = {
                    ...newData[row][column],
                    isMine: true,
                    bgColor: randomColor()
                }
                mines++
            }
        }


        //calculate adjacent mines
        for(let i=0; i<n; i++){
          for(let j=0; j<n; j++){
            let adjacentMines= 0
            if(newData[i][j].isMine===false){
              for(let x=-1; x<=1; x++){
                for(let y=-1; y<=1; y++){
                  if(newData[i+x] && newData[i+x][j+y] && newData[i+x][j+y].isMine){
                    adjacentMines++
                  }
                }
              }
              newData[i][j]={...newData[i][j],adjacentMines: adjacentMines, bgColor: randomColor()}
            }
          }
        }
        setData(newData)
    }

    useEffect(()=>{
        placeMines()
    },[n])

    const handleOpenCell=(row, column)=>{
        if(win===true || win===false) return
        const newData=[...data]
        newData[row][column].isOpen = true
        setData(newData)
        if(data[row][column].isMine){
            setWin(false)
            handleOpenAllMines()
            return
        }
        const newD= newData.map(row=>row.filter(item=>!item.isOpen))
        const length = newD.reduce((acc, row)=> acc+row.length, 0)
        if(length===totalMines){
          setWin(true)
        }
        if(newData[row][column].adjacentMines===0){
          for(let x=-1; x<=1; x++){
            for(let y=-1; y<=1; y++){
              if(newData[row+x] && newData[row+x][column+y] && newData[row+x][column+y].isOpen===false && newData[row+x][column+y].isMine===false){
                handleOpenCell(row+x, column+y)
              }
            }
          }
        }
        
  }

    const handleOpenAllMines=()=>{
      const newData=[...data]
      newData.map(row=>row.map((item)=>item.isMine ? item.isOpen = true : null))
      setData(newData)
    }
    return ( 
        <div style={styles.container}>
            <div style={styles.title}>Minesweeper</div>
            {win===false ?
            <div style={{padding: '8px', fontSize: '2rem',  color: 'red'}}>Game Over</div>
              :win===true ? 
              <div style={{padding: '8px', fontSize: '2rem',  color: 'green'}}>You Won</div>
              : <div style={{padding: '8px', fontSize: '2rem',  color: 'green'}}></div>
            }
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
            <select id='level' value={level} onChange={(e)=>setLevel(e.target.value)}>
              <option value={'easy'}>Easy</option>
              <option value={'medium'}>Medium</option>
              <option value={'hard'}>Hard</option>
            </select>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
              <div style={{padding: 10, border: '2px solid red', margin: '10px'}}>
                  <div style={{height: 10, width: 10, backgroundColor: 'red', borderRadius: 5}}></div>
              </div>
              <div style={{color: 'white'}}>{totalMines}</div>
          </div>
          </div>
          
            <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${n}, 40px)`, // Creates 8 columns
      gridTemplateRows: `repeat(${n}, 40px)`, // Creates 8 rows
      gridGap: '1px', // Adds a gap between the cells
    }}>
      {data?.map((row, i) => 
        row?.map((cell, j) => {
        return(
          <div
            key={`${i}-${j}`}
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f0f0',
              border: '1px solid white',
              backgroundColor: cell.isOpen ? 'white' : cell.bgColor,
            }}
            onClick={()=>handleOpenCell(i, j)}
          >
            {cell.isOpen ? cell?.isMine ? 'X' : cell?.adjacentMines : ''}
          </div>
        )})
      )}
    </div>

        </div>
     );
}
 
export default Minesweeper;

const styles={
    container:{
        textAlign: 'center',
        padding: '20px',
        display: 'flex',
        flexDirection :'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.backgroundColor
    },
    title: {fontSize: '3rem', fontWeight: '600', padding: '0px 40px', color: 'white', fontStyle:'italic'},
}