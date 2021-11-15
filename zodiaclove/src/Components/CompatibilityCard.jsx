import React from 'react';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

function CompatCard(props){
    const {caption, img, desc, match, current} = props;
    return(
        <div>
            <Card
                style={{ width: 300, backgroundColor: "#edeaff", border:0, color: "white"}}
                bodyStyle={{backgroundColor: "#edeaff",border:0, color: "aliceblue"}}
                cover={
                    <img alt="CompatPic" src={img}/>
                }
            >
            <Meta   
                style={{fontSize:14}}
                title={current + " and " + match}
                description={<div>
                <p style={{fontSize:16, color:"#94608b"}}>{caption}</p><p style={{color:"#4e4587"}}>{desc}</p>
                </div>
                }

            />
            </Card>
        </div>
    );
}

export default CompatCard;