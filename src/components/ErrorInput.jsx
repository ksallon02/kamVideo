import React from 'react';
import { ErrorMessage } from "@hookform/error-message";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ErrorInput = ({errors, name}) => {
    return (
        <ErrorMessage 
            errors={errors} 
            name={name} 
            render={({ message }) => (
                <span className="errorMessage"><FontAwesomeIcon icon={faExclamationTriangle}/> {message}</span>
                )
            } 
        />
    );
}

export default ErrorInput;