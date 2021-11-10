import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;


function MatchCards(props){
    const {img} = props;
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
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
            />
            </Card>,
            mountNode,
            );
        </div>
    );
}

export default MatchCards;