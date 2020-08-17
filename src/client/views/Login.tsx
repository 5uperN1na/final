import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import apiService from '../utils/api-service';


const Login: React.FC<LoginProps> = (props) => {

    const history = useHistory();

    const location = useLocation<{ msg: string }>();


    const [email, setEmail] = useState<string>('dog@test.com');
    const [password, setPassword] = useState<string>('abc');

    const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const token = await apiService('/auth/login', 'POST', { email, password });

        localStorage.setItem('token', token);
        history.push('/booklist');
    }


    return (
        <main>
            <Navbar />
        
                <form className="col-md-3">
                    <div>
                        <h3 className="text-center"> Login </h3>
                        <label>Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)}  />
                        <label>Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)}  />

                        <button onClick={login} className="btn">Submit</button>

                        <Link to='/register'> Register </Link>
                        <button onClick={() => history.push('/booklist')} className="btn">Go Back</button>

                    </div>

                </form>

        </main>

    );
}


interface LoginProps { }

export default Login;