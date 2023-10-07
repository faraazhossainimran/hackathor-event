import { useEffect, useState } from "react";
import ServiceDetailPage from "../ServiceDetailPage/ServiceDetailPage";
import { useParams } from "react-router-dom";

const ServiceDetail = ({serviceDetails}) => {
    // const [findServiceDetail, setFindServiceDetail] = useState()
    // const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const find = serviceDetails?.find((ser) => ser?.id == id)
    // useEffect(()=> {
        
    //     setFindServiceDetail(find)
    //     setLoading(false)
    // },[id, findServiceDetail])
    console.log('findServiceDetail:', find);
    // console.log(serviceDetails?.[0].id);
    return (
        <div>
            <ServiceDetailPage find={find}></ServiceDetailPage>
        </div>
    )
}

export default ServiceDetail