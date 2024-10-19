import React, {PureComponent} from "react";
import {IngredientDto} from "../../diet/dto/WeekScheduleDto";
import {Legend, Pie, PieChart, ResponsiveContainer} from "recharts";

type OwnProps = {
    ingredients: Array<IngredientDto>
    servingAmount: number
};
type MyState = {};

type MyProps = OwnProps

export class MacroPieChart extends PureComponent<MyProps, MyState> {

    render() {
        let renderLabel = function (entry: any) {
            return entry.name + ": " + entry.value + "g";
        }
        const data01 = [
            {
                "name": "Białko",
                "value": this.getMacros().protein,
                "fill": "#9ECDC1"
            },
            {
                "name": "Węgle",
                "value": this.getMacros().carbo,
                "fill": "#F3BF95"
            },
            {
                "name": "Tłuszcz",
                "value": this.getMacros().fat,
                "fill": "#FFC154"
            }]

        return (
            <React.Fragment>
                <p>Makro na jedną porcję:</p>
            <ResponsiveContainer width="95%" height={400}>
                <PieChart>
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                        {"KCalc: " + this.getMacros().calories}
                    </text>
                    <Pie
                        dataKey={"value"}
                        label={renderLabel}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        innerRadius="35%"
                        outerRadius="70%"
                        isAnimationActive={false}
                    >
                        <Legend layout="horizontal" verticalAlign="top" align="center"/>
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            </React.Fragment>
        );
    }

    private getMacros() {
        if (this.props.ingredients.length == 0) {
            return {
                amount: 0,
                calories: 0,
                protein: 0,
                carbo: 0,
                fat: 0
            }
        }
        return {
            amount: this.round(this.props.ingredients.map(p => p.amount).reduce((buffer, item) => buffer + item) / this.props.servingAmount),
            calories: this.round(this.props.ingredients.map(p => this.calculateByAmount(p.product.calorific, p.amount)).reduce((buffer, item) => buffer + item) / this.props.servingAmount),
            protein: this.round(this.props.ingredients.map(p => this.calculateByAmount(p.product.protein, p.amount)).reduce((buffer, item) => buffer + item) / this.props.servingAmount),
            carbo: this.round(this.props.ingredients.map(p => this.calculateByAmount(p.product.carbohydrates, p.amount)).reduce((buffer, item) => buffer + item) / this.props.servingAmount),
            fat: this.round(this.props.ingredients.map(p => this.calculateByAmount(p.product.fat, p.amount)).reduce((buffer, item) => buffer + item)/ this.props.servingAmount)
        };
    }

    private calculateByAmount(aElement: number, aAmount: number) {
        let result = aElement * aAmount / 100;
        return this.round(result)
    }

    private round(number: number) {
        return Math.round((number * 10 + Number.EPSILON)  ) / 10;
        // return number;
    }
}