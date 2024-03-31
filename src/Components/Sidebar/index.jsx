import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            Sidebar
            <Link to={"/assets"} >Assets</Link>
        </div>
    );
};

export default Sidebar;
