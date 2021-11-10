import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;


function MatchCards(props){
    const {img, zSign, name, desc} = props;
    return(
        <div>
            <Card
            style={{ width: 300 }}
            cover={
            <img
            alt="ProfilePic"
            src={img}
            />
            }
            actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
            ]}
            >
            <Meta
            avatar={<Avatar src={zSign} />}
            title={name}
            description={desc}
            />
            </Card>
        </div>
    );
}

export default MatchCards;