import React from 'react';
import { Card, Avatar } from 'antd';
import { HeartTwoTone, CloseCircleTwoTone } from '@ant-design/icons';

const { Meta } = Card;

function CompatCard(props){
    const {zSign1, zSign2, img1, img2, zSign1Img, zSign2Img, value} = props;
    return(
        <div>
            <Card
                style={{ width: 300, backgroundColor: "#f1e4ff", border:0, color: "white"}}
                bodyStyle={{backgroundColor: "#f1e4ff",border:0, color: "aliceblue"}}
                cover={
                        <img alt="ProfilePic" src={img1}/>
                }
            >
            <Meta   
                style={{fontSize:14}}
                avatar={<Avatar src={zSign1Img} />}
                title={zSign1}
            />
            </Card>
        </div>
    );
}

export default CompatCard;