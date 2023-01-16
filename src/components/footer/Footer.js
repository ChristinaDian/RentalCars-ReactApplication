import React from 'react';
import { CDBFooter, CDBBox } from 'cdbreact';

export function Footer() {
    return (
        <CDBFooter className="footer shadow" style={{ bottom: 0, width: '100%' }}>

            <CDBBox display="flex"
                justifyContent="between"
                alignItems="center"
                className="mx-auto py-3 flex-wrap"
                style={{ width: '100%' }}>
                <small className="ml-2">&copy; Rent-a-Car project, 2022. All rights reserved.</small>
            </CDBBox>

        </CDBFooter>
    );
}