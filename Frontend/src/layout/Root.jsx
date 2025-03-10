import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <main>
            {/* navbar */}
            {/* outlet */}
            <Outlet/>
            {/* Footer */}
        </main>
    );
};

export default Root;