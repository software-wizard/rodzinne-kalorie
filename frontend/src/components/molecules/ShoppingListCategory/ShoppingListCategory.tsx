import React from 'react';
import SingleColumnGridTemplate from "../../Templates/SingleColumnGridTemplate/SingleColumnGridTemplate";
import Label from "../../atoms/Label/Label";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import {Size} from "../../../GlobalStyle";

export type ShoppingListCategoryProps = {
    name: string;
    products: string[];
};

const ShoppingListCategory: React.FC<ShoppingListCategoryProps> = ({name, products}) => {

    return (
        <SingleColumnGridTemplate headerSize={'2rem'}>
            <Label text={name} size={Size.L}></Label>
            {products.map(p => <Checkbox label={p}></Checkbox>)}
        </SingleColumnGridTemplate>
    );
};

export default ShoppingListCategory;
