"use client"

import styled from "styled-components";
import Link from "next/link";

export const Title = styled.h1`
    font-size: 2.5rem; 
    color: red; 
`
export const Button = styled.button`
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

export const RoundButton = styled.button`
  padding: 14px; 
  color: var(--secondary); 
  border-radius: 50%;
  background-color: linear-gradient(145deg, #1e2024, #23272b); 
  box-shadow: var(--shadow-1);
  transition: all .4s ;
  &:hover{
    scale: 1.06;
  }
`
export const SquareButton = styled(Link)`
  padding: 15px; 
  border-radius: 10px;
  background: var(--primary-dark);
  transition: all .4s ;

  &:hover {
    transform: translateY(-5px);
    background: linear-gradient(145deg, #282b2f, #121517);
  }
`