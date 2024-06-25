import {useState, useEffect} from "react";
import axios from "axios";

function useFetchData(apiEndpoint) {
    const [alldata, setAlldata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        if (initialLoad) {
            setInitialLoad(false);
            setLoading(false);
            return;
        }
        setLoading(true);

        const fetchAllData = async() => {
            try {
                const res = await axios.get(apiEndpoint);
                const alldata = res.data;
                setAlldata(alldata);
                setLoading(false); // set loading state to false after data is fetched
            } catch (error){
                console.error("error fetching movie data:", error);
                setLoading(false); // set loading state to false even if there's an error
            }
        };

        // fetch movie data only if category exists

        if (apiEndpoint) {
            fetchAllData(); //call this function if api exists

        }

    }, [initialLoad, apiEndpoint]); // depend on ini and apiendpoint to trigger api call
    return {alldata, loading};
}
export default useFetchData;