import React from 'react';
import Label from "../../atoms/Label/Label";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import {Size} from "../../../GlobalStyle";
import GridTemplate from "../../Templates/GridTemplate/GridTemplate";

export type ShoppingListCategoryProps = {
    name: string;
    products: string[];
};

const ShoppingListCategory: React.FC<ShoppingListCategoryProps> = ({name, products}) => {

    return (
        <GridTemplate headerHeight={'2rem'}>
            <Label text={name} size={Size.L}></Label>
            <div>
                {products.map(p => <Checkbox label={p}></Checkbox>)}
            </div>
        </GridTemplate>
    );
};

export default ShoppingListCategory;
