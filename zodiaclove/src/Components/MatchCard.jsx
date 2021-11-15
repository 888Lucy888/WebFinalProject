import React from 'react';
import { Card, Avatar } from 'antd';
import { HeartTwoTone, CloseCircleTwoTone } from '@ant-design/icons';

const { Meta } = Card;

function MatchCard(props){
    const {img, zSign, name, desc} = props;
    return(
        <div>
            <Card
                style={{ width: 300, backgroundColor: "#edeaff", border:0, color: "white"}}
                bodyStyle={{backgroundColor: "#edeaff",border:0, color: "aliceblue"}}
                cover={
                    <img alt="ProfilePic" src={img}/>
                }
                actions={[
                    <HeartTwoTone key="add" twoToneColor="#954ce9" />,
                    <CloseCircleTwoTone key="del" twoToneColor="#56b9ca" />,
                ]}
            >
            <Meta   
                style={{fontSize:14}}
                avatar={<Avatar src={zSign} />}
                title={name}
                description={desc}
            />
            </Card>
        </div>
    );
}

export default MatchCard;