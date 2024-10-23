import React from 'react';
import ShoppingListCategory from "../../components/molecules/ShoppingListCategory/ShoppingListCategory";
import GridTemplate from "../../components/Templates/GridTemplate/GridTemplate";

export type ShoppingListPageProps = {
    list: Array<{
        name: string;
        products: string[]
    }>
};

const ShoppingListPage: React.FC<ShoppingListPageProps> = ({list}) => {

    return (
        <div style={{overflowY: 'scroll'}}>
            <GridTemplate gridTemplateColumns={'repeat(5,1fr)'}>
                {list.map(l => <ShoppingListCategory key={l.name} name={l.name} products={l.products}/>)}
            </GridTemplate>
        </div>
    );
};

export default ShoppingListPage;
