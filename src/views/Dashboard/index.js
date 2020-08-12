import React, { useEffect, useState } from 'react'
import Table from '../../components/Table'
import axios from 'axios'


const Dashboard = () => {
    const [data, setData] = useState();
    const [page, setPageNumber] = useState(1);
    const [count, setCount] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://localhost:3001/api?search=&page=${parseInt(page)}`);

            setData(result.data.results);
            setCount(result.data.count)
        };

        fetchData();
    }, [page]);

    return (<Table data={data} count={count} page={page} setPageNumber={setPageNumber} ></Table>)
}

export default Dashboard