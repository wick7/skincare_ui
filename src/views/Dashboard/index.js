import React, { useEffect, useState } from 'react'
import Table from '../../components/Table'
import Search from '../../components/Search'
import styled from 'styled-components'
import axios from 'axios'
import Flex from '../../components/Flex'

const Container = styled.div`
    margin: 0 0 10px 20%;
    padding: 0px 10px;
`

const Dashboard = () => {
    const [data, setData] = useState();
    const [page, setPageNumber] = useState(1);
    const [count, setCount] = useState();
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
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