import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#212529' }}>
            <div className='text-center p-3' style={{ backgroundColor: '#212529' }}>
                © 2024 MyVenue
            </div>
        </MDBFooter>
    );
}
