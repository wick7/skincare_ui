import React, { useEffect, useState } from 'react'
import Table from '../../components/Table'
import axios from 'axios'


const Dashboard = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:3001/api?search=&page=1'
            );

            setData(result.data);
        };

        fetchData();
    }, []);

    return (<Table data={data}></Table>)
}

export default Dashboard