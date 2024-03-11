"use client"

import React from 'react'
import styled from 'styled-components'

const ArrowIcon = ( {children} ) => {
  return (
    <ArrowContainer>
        {children}
    </ArrowContainer>
  )
}

export default ArrowIcon


const ArrowContainer = styled.div`
    padding: 10px;
    margin-top: 20px;
    opacity: 0;

    &:hover{
        opacity: 1;
    }
`