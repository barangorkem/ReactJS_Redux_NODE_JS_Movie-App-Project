import React from 'react';
import PropTypes from 'prop-types';

const InlineError = props => {
    return (
        <div>
            <h4>{props.message}</h4>
        </div>
    );
};

InlineError.propTypes = {
    message:PropTypes.string.isRequired
};

export default InlineError;