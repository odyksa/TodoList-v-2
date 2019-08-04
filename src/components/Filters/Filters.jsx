import React from 'react';

import './Filters.css';

const Filters = (props) => {
    const { filter, onChangeFilterVal } = props;
    console.log(filter);

    const buttonsArr = [
        {
            name: 'all',
            value: 'All'
        },
        {
            name: 'active',
            value: 'Active'
        },
        {
            name: 'done',
            value: 'Done'
        }
    ];

    const buttons = buttonsArr.map(({ name, value }) => {
        const clazz = name === filter ? 'filter-button-active' : '';

        return (
            <button
                name={name}
                title={`Show ${name} items`}
                className={`filter-button ${clazz}`}
                key={name}
                onClick={() => onChangeFilterVal(name)}
            >
                {value}
            </button>
        );
    });

    return (
        <div className="filters">
            { buttons }
        </div>
    );
}

export default Filters;