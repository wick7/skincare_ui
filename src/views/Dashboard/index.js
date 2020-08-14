import React, { useEffect, useState } from 'react'
import Table from '../../components/Table'
import Search from '../../components/Search'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    padding-top: 5px;
    heigth: 100vh;
`

const Dashboard = () => {
    const [data, setData] = useState();
    const [page, setPageNumber] = useState(1);
    const [count, setCount] = useState();
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            console.log(`http://localhost:3001/api?search=${search}&page=${parseInt(page)}`)
            const result = await axios(`http://localhost:3001/api?search=${search}&page=${parseInt(page)}`);

            setData(result.data.results);
            setCount(result.data.count)
        };

        fetchData();
    }, [page, search]);

    return (
        <Container>
            <Search data={data} search={search} setSearch={setSearch} setPageNumber={setPageNumber} />
            <Table data={data} count={count} page={page} setPageNumber={setPageNumber}></Table>
        </Container>
    )
}

export default Dashboard