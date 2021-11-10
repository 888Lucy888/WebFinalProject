import React from 'react';
import CompatCard from './CompatibilityCard';
import { Card, Popover, Button } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const imgStyle = {
    width: '100%',
    textAlign: 'center',
};

function CompatGrid(props){
    const {zSign1, zSign2, img, desc} = props;

    return(  
    <Card title="Compatibility Chart">
        <Popover content={"Hi"} title="Title" trigger="hover">
            <Card.Grid style={gridStyle}>
                <img style={imgStyle} src={img} alt="signImg"/> 
            </Card.Grid>
        </Popover>
        <Popover content={"Hi"} title="Title" trigger="hover">
            <Card.Grid style={gridStyle}>
                <img style={imgStyle} src={img} alt="signImg"/> 
            </Card.Grid>
        </Popover>
    </Card>
    );
}



export default CompatGrid;