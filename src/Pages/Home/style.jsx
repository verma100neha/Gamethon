import { Colors } from "../../Constants/colors";

export const styles =  {
    container:{
        margin: 0,
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-45%, -50%)',
    },
    title: {fontSize: '3rem', fontWeight: '600', padding: '0px 40px 40px 40px', color: 'white', fontStyle:'italic'},
    gameNameContainer:{
        padding: '20px',
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: '900',
        color: Colors.black,
        backgroundColor: Colors.pinkOpaque(1),
        // width: '30%',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: Colors.black,
        borderRadius: '8px',
        // margin: 'auto',
        margin: '10px'
    }
}   