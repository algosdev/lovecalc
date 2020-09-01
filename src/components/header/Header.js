import React from 'react'
import { Container, Headline, SubHeadline, Img, Link } from './HeaderStyle'
import figma from '../../figma.png'
export default function Header() {
    return (
        <Container>
            <Headline>LoveCalc</Headline>
            <SubHeadline>Find out your love percentage</SubHeadline>
            <Link href='https://www.figma.com/file/2hPDWC1f5SVGoEQLJ9UYXb/LoveCalc?node-id=0%3A1' target="_blank"><Img src={figma} alt="" /></Link>
        </Container>
    )
}
