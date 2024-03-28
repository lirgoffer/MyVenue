import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f8f9fa' }}>
            <div className='text-center p-3 text-black' style={{ backgroundColor: '#f8f9fa' }}>
                © 2024 MyVenue
            </div>
        </MDBFooter>
    );
}
