import React from 'react';
import './NoTask.css';
import pacmanIcon from '../../images/pacman.svg';

function NoTask() {
   return (
      <div className="no-task">
         <p className="no-task__text">No tasks<br />Add task you want to do</p>
         <div className="no-task__pacman">
            <img src={pacmanIcon} alt="pacman" />
         </div>
      </div>
   );
}

export default NoTask;