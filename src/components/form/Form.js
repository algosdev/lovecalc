import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button } from './FormStyle'
import { fetchData } from '../../store/Actions'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import moment from 'moment'
const Header = (props) => {
    const firestore = useFirestore();
    useFirestoreConnect([{
        collection: 'tries',
    }]);
    const tries = useSelector((state) => {
        const snapshot = state.firestore.data.tries
        return snapshot
    })
    const [name1, setname1] = useState(null);
    const [name2, setname2] = useState(null);
    const data = isLoaded(tries) ? (tries) : null;
    let mydata = []
    for (let key in data) {
        let value = data[key];
        mydata.push(value)
    }
    const sendData = (e) => {
        e.preventDefault();
        const names = {
            name1,
            name2,
            createdAt: moment().format('lll')
        }
        if (name1 !== null && name2 !== null) {
            props.upload(name1, name2);
            return firestore.collection('tries').add(names)
        }
        else {
            alert('Please, fill in inputs!')
        }
    }
    let btnText;
    if (props.reduxState.progress === 0) {
        btnText = 'Calculate'
    }
    else if (props.reduxState.progress === 1) {
        btnText = 'Calculating'
    }
    else {
        btnText = 'Done'
    }

    return (props.reduxState.progress !== 2 ? (
        <Form onSubmit={sendData}>
            <Input onChange={(e) => { setname1(e.target.value) }} type='text' placeholder='Your own name' />
            <Input onChange={(e) => { setname2(e.target.value) }} type='text' placeholder="Your lover's name" />
            <Button>{btnText}</Button>
        </Form>
    ) : null);
}
const mapStateToProps = (state) => {
    return {
        reduxState: state.localReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        upload: (name1, name2) => { dispatch(fetchData(name1, name2)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
