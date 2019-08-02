import React from 'react';

import './Header.css';

function Header() {
    const setDate = () => {
        const date = new Date();
        const dayOfWeek = getDayOfWeek(date.getDay());
        const month = getMonth(date.getMonth());

        function getDayOfWeek(dateIndex) {
            switch (dateIndex) {
                case 0:
                    return 'Sunday';
                case 1:
                    return 'Monday';
                case 2:
                    return 'Tuesday';
                case 3:
                    return 'Wednesday';
                case 4:
                    return 'Thursday';
                case 5:
                    return 'Friday';
                case 6:
                    return 'Saturday';
                default:
                    return null;
            }
        }

        function getMonth(monthIndex) {
            switch (monthIndex) {
                case 0:
                    return 'Jan';
                case 1:
                    return 'Feb';
                case 2:
                    return 'March';
                case 3:
                    return 'Apr';
                case 4:
                    return 'May';
                case 5:
                    return 'June';
                case 6:
                    return 'July';
                case 7:
                    return 'Aug';
                case 8:
                    return 'Sep';
                case 9:
                    return 'Oct';
                case 10:
                    return 'Nov';
                case 11:
                    return 'Dec';
                default:
                    return null;
            }
        }

        return `${dayOfWeek}, ${date.getDate()} ${month} ${date.getFullYear()}`;
    };

    return (
        <header className="header">
            <p className="header-date">{setDate()}</p>
            <h1 className="header-title">To do List</h1>
        </header>
    );
}

export default Header;