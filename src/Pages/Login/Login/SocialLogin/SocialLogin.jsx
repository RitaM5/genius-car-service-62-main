import React from 'react';
import google from "../../../../images/social/google-icon.png";
import facebook from "../../../../images/social/facebook.png"
import github from "../../../../images/social/github.png"
import auth from '../../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;

    if (error || error1) {
        errorElement = <div>
            <p className="text-danger">Error: {error?.message} {error1?.message}</p>
        </div>
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className="fs-5 mx-2 mt-2">or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-info d-block mx-auto w-50 my-2">
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className="px-2">Google SignIn</span>
                </button>
                {errorElement}

                <button className="btn btn-info d-block mx-auto w-50 my-2">
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className="px-2">Facebook</span>
                </button>
                <button
                onClick={() => signInWithGithub()}
                 className="btn btn-info d-block mx-auto w-50">
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className="px-2">Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;