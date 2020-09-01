import styled from 'styled-components';

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items:  center;
    font-family: 'Mirza', sans-serif;
`
export const Input = styled.input`
    width: 100%;
    min-width: 200px;
    max-width: 300px;
    height: 40px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 30px;
    outline: 0;
    border: 0;
    font-size: 1.1em;
    margin-bottom: 10px;
    padding: 1em;
    color: rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
    &::placeholder {
        font-family: sans-serif;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.37);
    }
`
export const Button = styled.button`
    width: 100%;
    min-width: 200px;
    max-width: 300px;
    height: 40px;
    background: #FE363A;
    border-radius: 30px;
    outline: 0;
    border: 0;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 1.4em;
    letter-spacing: 1px;
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
`