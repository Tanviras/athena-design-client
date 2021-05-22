import React from 'react';
import DedicatedCard from './DedicatedCard';



const teamServices = [
    {
        id: 1,
        for: 'For Basic',
        homepage: 'Home Page',
        inner: 'No Inner Page',
        asset: 'Asset file',
        Source: 'Source File',
        stock: 'Free Stock Photos',
        support: '10 days free Support',
        time: '24/7 Support',
        price: '$199'
    },
    {
        id: 2,
        for: 'For Preferred',
        homepage: 'Home Page',
        inner: '4 Inner Page',
        asset: 'Asset file',
        Source: 'Source File',
        stock: 'Free Stock Photos',
        support: '20 days free Support',
        time: '24/7 Support',
        price: '$399'
    },
    {
        id: 3,
        for: 'For Elite',
        homepage: 'Home Page',
        inner: '8 Inner Page',
        asset: 'Asset file',
        Source: 'Source File',
        stock: 'Free Stock Photos',
        support: '30 days free Support',
        time: '24/7 Support',
        price: '$599'
    }
]
const DedicatedSection = () => {

    return (
        <section className="container">
            <h1 className="text-center p-5">Choose Your Dedicated Team</h1>
            <div className="priceCard">
            <div className="row">
                {
                    teamServices.map(service => <DedicatedCard key={service.idType} service={service}></DedicatedCard>)
                }
            </div>
            </div>
        </section >
    );
};

export default DedicatedSection;