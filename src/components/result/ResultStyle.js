import styled, { keyframes } from 'styled-components';

export const Container = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items:  center;
    font-family: 'Mirza', sans-serif;
`
const scale = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(0.7);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
`;
const scaleOne = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const ImgContainer = styled.div`
    width: 300px;
    position: relative;
    height: 250px;
    margin: 0 auto;
    & :first-child.effect{
        animation-delay: 0.4s !important;
    }
`;

export const Img = styled.img`
    position: absolute;
    width: 250px;
    left: 25px;
    transform-origin: center;
    margin: 0 auto;
    &.effect {
    animation: ${scale} 1s linear infinite;
    }
    &.simple {
    animation: ${scaleOne} 1s linear forwards;
    }
`
export const Names = styled.div`
    display: flex;
    justify-content: space-around; 
    align-items: center; 
    animation: ${scaleOne} 1s linear forwards;  
`

export const Percentage = styled.p`
    font-size: 3em; 
    position: absolute;
    width: 100%;
    text-align: center;
    top: 20px;
    color: #fff;   
    z-index: 10;
    animation: ${scaleOne} 1s linear forwards;
`
export const Name1 = styled.div`
    font-size: 2em; 
    color: #fff;   
`
export const Name2 = styled.div`
    font-size: 2em;
    color: #fff;
`
export const Vs = styled.div`
    font-size: 3em;
    color: #FF8E75;
    margin: 0 10px;
`
export const ResultTxt = styled.div`
    font-size: 1.3em;
    color: #fff;
    margin: 10 auto;
`
export const NamesContainer = styled.p`
    text-align: center
`