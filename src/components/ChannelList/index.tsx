import React from "react";

import {
    List,
    ChannelContainer,
    LeftSide,
    Avatar,
    Column,
    Username,
    Info,
    RightSide,
    WhiteCircle,
} from "./styles";

interface ItemProps {
    title: string;
}

const ChannelList: React.FC = () => {
    const ChannelItem: React.FC<ItemProps> = ({ title }) => {
        return (
            <ChannelContainer>
                <LeftSide>
                    <Avatar />
                    <Column>
                        <Username>{title}</Username>
                        <Info>36 new videos</Info>
                    </Column>
                </LeftSide>

                <RightSide>
                    <WhiteCircle />
                </RightSide>
            </ChannelContainer>
        );
    };

    return (
        <List>
            <ChannelItem title="Hercules" />
            <ChannelItem title="rocketseat_oficial" />
            <ChannelItem title="Hercules" />
            <ChannelItem title="rocketseat_oficial" />
            <ChannelItem title="Hercules" />
            <ChannelItem title="rocketseat_oficial" />
            <ChannelItem title="Hercules" />
            <ChannelItem title="rocketseat_oficial" />
            <ChannelItem title="Hercules" />
            <ChannelItem title="rocketseat_oficial" />
        </List>
    );
};

export default ChannelList;
