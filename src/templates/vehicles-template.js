import React from 'react';

import { Button } from "flowbite-react";

import Layout from "../components/Layout";
import Loading from "../components/Loading";

import useData from "../hooks/useData";

const VehiclesTemplate = ({ params }) => {
    const { data } = useData();

    const vehicle = data?.vehicles.find(car => car.car_id === params['*']);

    if (!data) {
        return <Loading/>;
    }

    return (
        <Layout data={ data } user={ data?.user }>
            <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
                <div className="w-full max-w-4xl">
                    <img className="w-full h-auto object-cover object-center mb-4 rounded-lg shadow-md" src={ vehicle.image_url } alt={ vehicle.model }/>

                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h1 className="text-4xl font-bold mb-4 text-center">{ vehicle.model }</h1>
                        <h2 className="text-2xl text-gray-800 mb-4 text-center">${ vehicle.price }</h2>

                        <div className="flex justify-center">
                            <Button color="success" className="w-full md:w-auto">
                                Purchase
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default VehiclesTemplate;