import React from 'react';

const Alert = ({alert}) => {
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <h3>{alert.msg}</h3>
            </div>
        )

    )
}

export default Alert
