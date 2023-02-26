import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthCOntext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthCOntext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useTitle("login")

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        form.reset()
        signIn(email, password)
            .then(result => {
                const user = result.user;
                const currentuser = {
                    email: user.email
                }
                console.log(currentuser)
                form.reset()
                //get jwt token
                fetch('https://hafiz-consultancy-server-hafiz0073.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentuser)

                })
                    .then(res => res.json()
                        .then(data => {
                            console.log(data)
                            //localStorage
                            localStorage.setItem('genius-token', data.token)
                        }))

                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error('error', error)
            })

    }
    const handleGooglesignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error('error', error)
            })

    }

    return (
        <div className="hero ">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row ">
                <div className="text-center lg:text-center">
                    <img src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?b=1&s=170667a&w=0&k=20&c=wm6YUMs03Bup4_9XcQaX61L711qJxAUExEJp_PWO8gI=" alt="" />
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100 p-4">
                    <h1 className="text-2xl font-bold text-center">Login now!</h1>

                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/signup' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="login" />

                        </div>
                    </form>
                    <input onClick={handleGooglesignIn} className="btn btn-primary" value="Google login" />
                    <p className='text-center text-lg p-4' >New to H Consultancy Please <Link to='/signup' className='text-orange-500 text-xl'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;