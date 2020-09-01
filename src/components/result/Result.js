import React from 'react'
import { connect } from 'react-redux'
import { Container, Img, ImgContainer, Names, NamesContainer, Name1, Name2, Vs, Percentage, ResultTxt } from './ResultStyle';
import Heart from '../../heart.png'
function Result({ reduxState }) {
    const heartEffect = reduxState.progress === 1 ? 'effect' : 'simple';
    console.log(reduxState)
    return (
        <Container>
            {reduxState.progress === 2 ? (
                <NamesContainer>
                    <Names>
                        <Name1>{reduxState.name1}</Name1>
                        <Vs>&</Vs>
                        <Name2>{reduxState.name1}</Name2>
                    </Names>
                    <ResultTxt>{reduxState.resultText}</ResultTxt>
                </NamesContainer>
            ) : null}
            <ImgContainer>
                <Img className={reduxState.progress === 0 ? null : heartEffect} src={Heart} alt='' />
                <Percentage className={reduxState.progress === 0 ? null : heartEffect}>{reduxState.percentage || null}</Percentage>
                <Img className={reduxState.progress === 0 ? null : heartEffect} src={Heart} alt='' />
            </ImgContainer>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        reduxState: state
    }
}
export default connect(mapStateToProps)(Result)