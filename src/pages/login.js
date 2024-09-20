import React from 'react';

import { Button, TextInput } from 'flowbite-react';

import Layout from "../components/Layout";
import Loading from "../components/Loading";

import useData from "../hooks/useData";

const Login = () => {
    const { data } = useData();

    if (!data) {
        return <Loading/>;
    }

    return (
        <Layout data={ data }>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
                <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg border-2 border-gray-200">
                    <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6" style={ { color: data.color } }>Log In</h2>

                    <form>
                        <div className="mb-4">
                            <TextInput id="email" type="email" placeholder="john@email.com" required/>
                        </div>

                        <div className="mb-4">
                            <TextInput id="password" type="password" placeholder="********" required/>
                        </div>

                        <Button type="submit" className="w-full" color="success">Log In</Button>
                    </form>

                    <div className="flex justify-center mt-4">
                        <Button color="info" className="w-full">Register</Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Login;
