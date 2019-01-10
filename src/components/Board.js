import React,{Component} from 'react';
import Letter from './Letter';

class Board extends Component{


    render(){
        return(
            <div style={style.board}>
                {this.props.letter.map((item,i)=>
                    <Letter 
                        icon = {item.icon}
                    />
                )}

            </div>
        )
    }
}

const style = {
    board:{
        display:'flex',
        flexWrap:'wrap',
        margin:'30px auto',
        width:'700px',
        height:'600px',
        justifyContent :'space-around'
    }
}

export default Board;