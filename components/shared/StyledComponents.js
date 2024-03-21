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
  height: 60px; 
  width: 60px; 
  line-height: 60px; 
  font-size: 14px; 
  padding: 15px; 
  border-radius: 6px;
  background: linear-gradient(145deg, #1e2024, #23272b); 
  transition: all .4s ;
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e; 
  display: grid; 
  place-items: center;

  &:hover {
    transform: translateY(-5px);
  }
`