"use client"

import styled from "styled-components";
import Link from "next/link";

export const Title = styled.h1`
    font-size: 2.5rem; 
    color: red; 
`
export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;
