import React from "react";
import InputWidget from './InputWidget';
import {Type} from "../../atoms/Input/Input";

export const TEXT = () => (
    <div style={{width: "30vw"}}>
        DEFAULT
        <InputWidget label={"name"}></InputWidget>
        with placeholder
        <InputWidget label={"name"} placeholder={"Jakiś tam placeholder"}></InputWidget>
        with text
        <InputWidget label={"name"} defaultValue={"Jakaś tam wartość"}></InputWidget>
    </div>
);

export const NUMBER = () => (
    <div style={{width: "200px"}}>
        DEFAULT
        <InputWidget type={Type.number} label={"name"}></InputWidget>
        with placeholder
        <InputWidget type={Type.number} label={"name"} placeholder={"Jakiś tam placeholder"}></InputWidget>
        with text
        <InputWidget type={Type.number} label={"name"} defaultValue={"Jakaś tam wartość"}></InputWidget>
    </div>
);

export const RADIO = () => (
    <div style={{width: "100px"}}>
        DEFAULT
        <InputWidget type={Type.radio} iconPath={"/icons/supper.png"} label={"Kolacja"}></InputWidget>
        selected
        <InputWidget type={Type.radio} iconPath={"/icons/supper.png"} label={"Kolacja"}></InputWidget>
    </div>
)
export default {
    title: "components/molecules/InputWidget"
};