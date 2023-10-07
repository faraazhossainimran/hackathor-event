import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"
import ServiceCard from "../../components/ServiceCard/ServiceCard"
import ServiceDetail from "../ServiceDetail/ServiceDetail"


const ServiceDetails = () => {
    // const [servicePageDetail, setServicePageDetail] = useState([]) 
    const serviceDetails = useLoaderData()
    // const {id} = useParams()
    console.log(serviceDetails.id);
    return (
        <div>
           <ServiceDetail serviceDetails={serviceDetails}></ServiceDetail>
        </div>
    )
}

export default ServiceDetails