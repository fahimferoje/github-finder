import React from 'react';

const Alert = ({Alert}) => {
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i>{alert.msg}</i>
            </div>
        )

    )
}

export default Alert
