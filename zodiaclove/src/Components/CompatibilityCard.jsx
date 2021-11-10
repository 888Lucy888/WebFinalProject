import React from 'react';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

function CompatCard(props){
    const {zSign1, zSign2, img, desc} = props;
    return(
        <div>
            <Card
                style={{ width: 300, backgroundColor: "#f1e4ff", border:0, color: "white"}}
                bodyStyle={{backgroundColor: "#f1e4ff",border:0, color: "aliceblue"}}
                cover={
                    <img alt="CompatPic" src={img}/>
                }
            >
            <Meta   
                style={{fontSize:14}}
                title={zSign1 + " and " + zSign2}
                description={desc}
            />
            </Card>
        </div>
    );
}

export default CompatCard;