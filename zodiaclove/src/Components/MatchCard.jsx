import React from 'react';
import { Card, Avatar } from 'antd';
import { HeartTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { deleteModel } from 'mongoose';

const { Meta } = Card;

function MatchCard(props){
    const {img, zSign, name, desc, match, remove} = props;
    return(
        <div>
            <Card
                style={{ width: 300, backgroundColor: "#f0f2ff", border:0, color: "white", margin:"auto", marginTop:"4%"}}
                bodyStyle={{backgroundColor: "#d2dbff",border:0, color: "aliceblue"}}
                cover={
                    <img alt="ProfilePic" src={img}/>
                }
                actions={[
                    <HeartTwoTone key="add" twoToneColor="#836fff" onClick={match} />,
                    <CloseCircleTwoTone key="del" twoToneColor="#394692" onClick={remove}/>,
                ]}
            >
            <Meta   
                style={{fontSize:14}}
                avatar={<Avatar src={"./zodiacImgs/"+String(zSign).toLowerCase()+".jpg"} />}
                title={name+" - "+zSign}
                description={desc}
            />
            </Card>
        </div>
    );
}

export default MatchCard;