import React from 'react';

const UserProfile = (props) => {
    return (
        <div style={{display:'table',margin:'auto'}}> 
            <div id="container">
                <div id="header">
                </div>
                <div>
                    <img src={props.img} alt="Profile" id="img" />
                    <center style={{ marginTop: '30px', padding: '10px' }}>
                        <h1 style={{ marginBottom: '10px' }}><strong>{props.name}</strong></h1>
                        <h3 style={{ marginBottom: '10px' }}><strong>{props.desition}</strong></h3>
                        <hr style={{ width: '90%' }} />
                        <p>{props.about}</p>

                        <div className="icon" style={{ marginTop: '20px' }}>
                            <a href="#" style={{ fontSize: 'xx-large', marginRight: '5px' }}><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#" style={{ fontSize: 'xx-large', marginRight: '5px' }}><i className="fa-brands fa-github"></i></a>
                            <a href="#" style={{ fontSize: 'xx-large' }}><i className="fa-solid fa-globe"></i></a>
                        </div>
                    </center>
                </div>
            </div>
            </div>
    );
};

export default UserProfile;
