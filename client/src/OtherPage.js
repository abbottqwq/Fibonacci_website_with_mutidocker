/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            in some page!
            <Link to="/">go back</Link>
        </div>
    )

}