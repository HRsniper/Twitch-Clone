import React from "react";

import {
    List,
    CategoryContainer,
    CategoryImage,
    CategoryName,
    CategoryStatus,
    RedCircle,
    Info,
} from "./styles";

import data from "./data";

interface ItemProps {
    // item recebe a tipagem de qualquer item junto com suas propriedades em data.ts
    item: typeof data[0];
}

export const CategoryList: React.FC = () => {
    const CategoryItem: React.FC<ItemProps> = ({ item }) => {
        return (
            <CategoryContainer>
                <CategoryImage source={item.source} />
                <CategoryName numberOfLines={1}>{item.name}</CategoryName>
                <CategoryStatus>
                    <RedCircle />
                    <Info>51.9K</Info>
                </CategoryStatus>
            </CategoryContainer>
        );
    };

    return (
        <List>
            {/* para cada item retornar um CategoryItem preenchido */}
            {data.map((item) => {
                return <CategoryItem key={item.name} item={item} />;
            })}
        </List>
    );
};
