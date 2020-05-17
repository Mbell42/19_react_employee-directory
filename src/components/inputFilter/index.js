//DEPENDENCIES
import React from "react";
import "./style.css";

function InputFilter(props) {
    return (
        <form>
            <div className = "form-group">
                <label htmlFor = "search"></label>
                <input
                    className = "form-control"
                    onChange = {props.handleInputChange}
                    name = "search"
                    type = "text"
                    value = {props.vale}
                    placeholder = "Search by Employee Name"
                    id = "search"
                />
                <button className = "btn btn-primary" onClick = {props.handleFormSubmission}>Search</button>
                <button className = "btn btn-primary" onClick = {props.refreshPage}>Reset</button>
                <br />
            </div>
        </form>
    );
};

export default InputFilter;