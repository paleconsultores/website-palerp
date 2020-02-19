import React from "react";
const counterpart = require("counterpart");

 export default class LocaleSwitcher extends React.Component{

    handleChange(e){
        counterpart.setLocale(e.target.value);
    }
    render(){
        return (
            <select defaultValue={counterpart.getLocale()} onChange={this.handleChange}>
                <option>es</option>
                <option>en</option>
            </select>
        );
    }

}