import React,{Component} from 'react';
import FlipCard from 'react-flipcard-2';

class Letter extends Component{
    render(){
        return(
            <div style={style.letter}>
                <FlipCard >
                    
                    <div style={style.front}></div>
                    <div style={style.back}>
                        <i className={`fa ${this.props.icon} fa-5x`}></i>
                    </div>
                </FlipCard>
                
            </div>
        )
    }
}

const style = {
    letter:{
        width:'125px',
        height:'125px',
        cursor:'pointer'
    },
    front:{
        width:'125px',
        height:'125px',
        backgroundColor:'#ff9800',
    },
    back:{
        width:'125px',
        height:'125px',
        display:'flex',
        justifyContent:'center',
        alignItems :'center',
        backgroundColor:'#00bcd4'
    }
}

export default Letter;

