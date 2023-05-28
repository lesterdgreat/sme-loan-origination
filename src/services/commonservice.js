import { useEffect, useState } from "react";
import axios from "axios";

export default function get(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        return axios.get(url).then((resp) => {
            setData(resp.data);
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        });
    }, [url]);
    return {data, loading, error};
}

export function post(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        return axios.post(url).then((resp) => {
            setData(resp.data);
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        });
    }, [url]);

    return {data, loading, error};
}
