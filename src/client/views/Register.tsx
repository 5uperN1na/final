import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import apiService from '../utils/api-service';


const Register: React.FC<RegisterProps> = (props) => {
    const history = useHistory();

    const location = useLocation<{ msg: string }>();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const token = await apiService('/auth/register', 'POST', {email, password, name});
 
        console.log(token);
        localStorage.setItem('token', token);
        history.push('/login');
    }

    return (
        <main>
            <Navbar />
        
                <form className="col-md-3">

                    <div>
                        <h3> Register </h3>

                        <label>Name</label>
                        <input value={name} onChange={e => setName(e.target.value)}  />
                    

                        <label>Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)}  />

                        <label>Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)}  />

                        <button onClick={register} className="btn">Submit</button>
                        <button onClick={() => history.push('/booklist')} className="btn">Go Back</button>

                    </div>

                </form>

        </main>

    );
}

interface RegisterProps {

}


export default Register;