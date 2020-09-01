import React from 'react'
import { connect } from 'react-redux'
import { Container, Button, Img, ImgContainer, Names, NamesContainer, Name, Vs, Percentage, ResultTxt } from './ResultStyle';
import Heart from '../../heart.png'
import { Reset } from '../../store/Actions'
function Result(props) {
    const { reduxState, reset } = props;
    console.log(props)
    const heartEffect = reduxState.progress === 1 ? 'effect' : 'simple';
    const ready = reduxState.progress === 2 ? true : false;
    return (
        <Container>
            {ready ? (
                <NamesContainer>
                    <Names>
                        <Name>{reduxState.name1}</Name>
                        <Vs>&</Vs>
                        <Name>{reduxState.name2}</Name>
                    </Names>
                    <ResultTxt>{reduxState.resultText}</ResultTxt>
                </NamesContainer>
            ) : null}
            <ImgContainer>
                <Img className={reduxState.progress === 0 ? null : heartEffect} src={Heart} alt='' />
                {ready ? (
                    <Percentage>{reduxState.percentage + "%"}</Percentage>
                ) : null}
                <Img className={reduxState.progress === 0 ? null : heartEffect} src={Heart} alt='' />
            </ImgContainer>
            {ready ? (
                <Button onClick={() => { reset() }}>Try Again</Button>
            ) : null}
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        reduxState: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => { dispatch(Reset()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Result)