import React from "react";
import Input, {Type} from './Input';

export const TEXT = () => (
    <React.Fragment>
        <Input></Input>
        <Input placeholder={"Tak wygląda placeholder"}></Input>
        <Input defaultValue={"Tak wygląda wpisany tekst"}></Input>
    </React.Fragment>
)

export const NUMBER = () => (
    <React.Fragment>
        <Input type={Type.number}></Input>
        <Input type={Type.number}
               placeholder={"Tak wygląda placeholder"}></Input>
        <Input type={Type.number} defaultValue={"69"}></Input>
    </React.Fragment>
)

export default {
    title: "components/atoms/Input"
};