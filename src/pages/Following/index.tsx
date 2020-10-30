import React from "react";
import { View, FlatList } from "react-native";

import { Header } from "../../components/Header";
import { Heading } from "../../components/Heading";
import { Title } from "../../components/Title";
import { CategoryList } from "../../components/CategoryList";
import StreamList from "../../components/StreamList";
import ChannelList from "../../components/ChannelList";

import { Wrapper, Container, Main } from "./styles";

interface Item {
    key: string;
    // formato de renderização
    render: () => JSX.Element;
    isTitle?: boolean;
}

export const Following: React.FC = () => {
    // assim que a pagina carregar vai disparar um calculo
    const { data, indexes } = React.useMemo(() => {
        // array de items
        const items: Item[] = [
            {
                key: "PAGE_HEADING",
                render: () => <Heading>Following</Heading>,
            },
            {
                key: "FOLLOWED_CATEGORIES",
                render: () => <Title>Followed Categories</Title>,
                isTitle: true,
            },
            {
                key: "CATEGORY_LIST",
                render: () => <CategoryList />,
            },
            {
                key: "LIVE_CHANNELS",
                render: () => <Title>Live Channels</Title>,
                isTitle: true,
            },
            {
                key: "STREAM_LIST",
                render: () => <StreamList />,
            },
            {
                key: "CONTINUE_WATCHING",
                // render: () => <View />,
                render: () => <Title>Continue Watching</Title>,
                isTitle: true,
            },
            {
                key: "CONTINUE_LIST",
                // render: () => <View />,
                render: () => <StreamList />,
            },
            {
                key: "OFFLINE_CHANNELS",
                render: () => <Title>Offline Channels</Title>,
                isTitle: true,
            },
            {
                key: "CHANNEL_LIST",
                render: () => <ChannelList />,
            },
        ];

        // array de números
        const indexes: number[] = [];

        items.forEach((item, index) => {
            // indexes um array que contem os indices com títulos
            return item.isTitle && indexes.push(index);
        });
        return {
            data: items,
            indexes,
        };
    }, []);

    return (
        <Wrapper>
            <Container>
                <Header />

                <Main>
                    {/* lista de dados em linha com tipagem da interface Item */}
                    <FlatList<Item>
                        data={data}
                        // receber o item e renderiza-lo na tela
                        renderItem={({ item }) => {
                            return item.render();
                        }}
                        // receber o item e extrair a key de dentro dele
                        keyExtractor={(item) => {
                            return item.key;
                        }}
                        stickyHeaderIndices={indexes}
                        // Refresh Effect
                        onRefresh={() => {}}
                        // refreshing={true}
                        refreshing={false}
                    />
                </Main>
            </Container>
        </Wrapper>
    );
};
