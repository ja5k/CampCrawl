import { useState } from 'react';
import axios from 'axios';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post('/api/users/signup', {
            email, password
        });
        console.log(response.data);
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Sign up</h1>
            <div className="form-group">
                <label htmlFor="Email">Email Address</label>
                <input
                    className="form-control" 
                    type="text" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input 
                    className="form-control" 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button className="btn btn-primary">Sign Up</button>
        </form>
    )
}