import { Colors } from "../../Constants/colors";

export const styles= {
    container:{
        textAlign: 'center',
        padding: '20px',
        display: 'flex',
        flexDirection :'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.backgroundColor
    },
    title: {fontSize: '3rem', fontWeight: '600', padding: '0px 40px 40px 40px', color: 'white', fontStyle:'italic'},
    gridRow: {
        display: 'grid',
        gap: '10px',
        gridTemplateColumns: 'repeat(3, 1fr)',
        // backgroundColor: '#2196F3',
        backgroundColor: Colors.black,
        padding: '10px',
    },
    gridItem: {

        // backgroundColor: 'rgba(0,0,0, 0.8)',
        backgroundColor: Colors.lightGray,
        border: '1px solid rgba(0, 0, 0, 0.8)',
        padding: '10px',
        fontSize: '2rem',
        textAlign: 'center',
        // maxWidth: '200px',  
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRation :1,
        width: '100px',
        height: '100px'
    },
    resetButton:{padding: '4px 16px', fontSize: '1.5rem', border: '2px solid', borderRadius: '8px', margin: '30px', 
        backgroundColor: Colors.pink, color: 'black',
    },
}