import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/button';
import { ServiceCard } from '../../components/serviceCard';

const ServicesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    font-weight: 900;
    color: #000;
    text-align: start;
`;

const ServivesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const WarningText = styled.h3`
    color: rgb(100, 100, 100);
    font-weight: 500;
`;

const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const wait = (num) => new Promise((rs) => setTimeout(rs, num))

export function Services(props) {

    const [offerendServices, setServices] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const isServicesEmpty = !offerendServices || (offerendServices && offerendServices.length === 0);

    const fetchServices = async () => {
        setLoading(true);
        const response = await axios.get("http://localhost:9000/services").catch((err) => {
            console.log("Error : ", err);
        });

        await wait(500);

        if (response) {
            setServices(response.data);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <ServicesContainer>
            <Title>
                Our Service
            </Title>
            <ServivesWrapper>
                {isServicesEmpty && !isLoading && <WarningText>No services are published yet!</WarningText>}
                {isLoading && <WarningText>Loading...</WarningText>}
                {!isServicesEmpty && !isLoading && offerendServices.map((service, idx) => (
                    <ServiceCard key={idx} {...service} />

                ))}
            </ServivesWrapper>
            <BottomContainer>
                {!isServicesEmpty && !isLoading && (
                    <Button size={13}>View More</Button>
                )}
            </BottomContainer>
        </ServicesContainer>
    );
}