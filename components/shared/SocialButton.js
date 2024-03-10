import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const SocialButton = ({ children, }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default SocialButton

const Container = styled(Link)`
  background-color: red;
  height: 153px;
  width: 153px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 2px;
  border-radius: 6px;
  transition: all .4s;
`