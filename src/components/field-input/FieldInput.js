import React from 'react';
import PropTypes from 'prop-types'

const FieldInput = (props) => (
    <div className="form-group">
        <label>{props.label}</label>
        <input
            className="form-control"
            name={props.name}
            type={props.inputType}
            value={props.content}
            onChange={props.controlFunc}
            placeholder={props.placeholder}
        />
        <small id="emailHelp" className="form-text text-muted">Text error</small>
    </div>
);

FieldInput.propTypes = {
    inputType: PropTypes.oneOf(['text', 'number']).isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
    content: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    placeholder: PropTypes.string,
};

export default FieldInput;