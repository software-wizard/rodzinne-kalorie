import React from 'react';
import MyCss from "./InputWidget.styles";
import Input, {Type} from "../../atoms/Input/Input";
import MyElement from "./RadioInput.styles";

interface MyProps {
    label: string,
    type: string,
    defaultValue?: string,
    placeholder?: string,
    iconPath?: string,
}

class InputWidget extends React.PureComponent<MyProps> {
    public static defaultProps = {
        type: Type.text
    }

    render() {
        if (this.props.type === Type.number || this.props.type === Type.text) {
            return (
                <MyCss>
                    <span>{this.props.label}</span>
                    <Input type={this.props.type} defaultValue={this.props.defaultValue}
                           placeholder={this.props.placeholder}></Input>
                </MyCss>)
        } else if (this.props.type === Type.radio) {
            return <MyElement>
                <label>
                    <input type="checkbox"/>
                    <div>
                        <div>
                            <img src={this.props.iconPath} alt={this.props.label}/>
                            <div>{this.props.label}</div>
                        </div>
                    </div>
                </label>
            </MyElement>
        }
    }
}

export default InputWidget;