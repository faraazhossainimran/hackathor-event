import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const Prizes = () => {
    const {obj} = useContext(AuthContext)
    console.log(obj);
    return (
        <div>
            <div>
            <h1 className="text-4xl font-semibold text-center my-4">Prizes</h1>
            <p className="text-xl font-semibold text-center my-2">Below are the total prize amounts for each category</p>
            </div>
        </div>
    )
}

export default Prizes 