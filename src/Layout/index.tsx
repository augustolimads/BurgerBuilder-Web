import React, {FunctionComponent} from 'react';

const Layout: FunctionComponent = ({children}) => (
    <div>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main>
            {children}
        </main>
    </div>
)

export default Layout;