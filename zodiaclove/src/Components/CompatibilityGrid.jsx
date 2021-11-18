import React from 'react';
import CompatCard from './CompatibilityCard';
import { Card, Popover, Button } from 'antd';
import data from "../ZodiacInfo/Compatibility.json"


const gridStyle = {
  width: '25%',
  textAlign: 'center',
  background: "#0c0c21"
};

const chartStyle = {
    background: "#4e4587",
    color: "white",
};

const imgStyle = {
    width: '100%',
    textAlign: 'center',
};

function CompatGrid(props){
    const {zSign} = props;
    return(  
    <Card title={<p style={{color: "white"}}>Compatibility Chart</p>} style={chartStyle}>
        {data[zSign].map((sign) => (
        <Popover content={
            <CompatCard caption={sign.caption} current={sign.current} match={sign.match} desc={sign.desc} img={"./zodiacImgs/"+sign.match+".jpg"}/>
        } trigger="hover">
            <Card.Grid style={gridStyle}>
                <img style={imgStyle} src={"./zodiacImgs/"+sign.match+".jpg"} alt="signImg"/> 
                <p style={{fontSizeAdjust:"inherit"}}>{sign.match}</p>
            </Card.Grid>
        </Popover>
        ))}
    </Card>
    );
}



export default CompatGrid;