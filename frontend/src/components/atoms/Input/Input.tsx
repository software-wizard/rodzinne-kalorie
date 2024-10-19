import React from 'react';
import MyCss from "./Input.styles";
import styles from "../../molecules/InputWidget/RadioInput.module.css";

export enum Type {
    text = "text",
    number = "number",
    radio = "radio",
}

interface MyProps {
    type: string
    defaultValue: string
    placeholder: string

    iconPath?: string
}

class Input extends React.PureComponent<MyProps> {
    public static defaultProps = {
        type: Type.text,
        defaultValue: "",
        placeholder: ""
    }

    render() {
        return <MyCss type={this.props.type} placeholder={this.props.placeholder}
                      defaultValue={this.props.defaultValue}></MyCss>
    }
}

export default Input;