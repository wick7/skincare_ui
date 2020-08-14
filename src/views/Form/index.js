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

const Form = () => {


    return (
        <Container>
            <h3>Add Product</h3>
        </Container>
    )
}

export default Form