import React from 'react';

import './Counters.css';

function Counters({ todosArr }) {
    const done = todosArr.filter((todoItem) => todoItem.done).length;
    const active = todosArr.length - done;

    return (
        <div className="counters">
            {`All ${todosArr.length} | Active ${active} | Done ${done}`}
        </div>
    );
}

export default Counters;