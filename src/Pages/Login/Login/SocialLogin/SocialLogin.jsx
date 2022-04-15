import React from 'react';
import google from "../../../../images/social/google-icon.png";
const SocialLogin = () => {
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{height:"1px"}} className="bg-primary w-50"></div>
                <p className="fs-5 mx-2 mt-2">or</p>
                <div style={{height:"1px"}} className="bg-primary w-50"></div>
            </div>
            <div>
                <button className="btn btn-primary w-50">
                    <img style={{width:'30px'}} src={google} alt=""/>
                    Google Sign In
                    </button>
                <button className="btn btn-primary">Google Sign In</button>
                <button className="btn btn-primary">Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;