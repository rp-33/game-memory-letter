import React,{Component} from 'react';

class Header extends Component{
    render(){
        return(
            <header style={style.head}>
                <span>Juego memoria</span>
                <div>
                    <button style={style.btn}> Reiniciar </button>
                    <span> Cartas : </span>
                </div>
            </header>
        )
    }
}

const style= {
    head:{
        padding:'20px',
        backgroundColor:'#eee',
        display:'flex',
        justifyContent :'space-between'
    },
    btn:{
        marginRight:'10px'
    }
}

export default Header