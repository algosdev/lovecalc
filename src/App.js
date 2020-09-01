import React from 'react';
import axios from 'axios'
import Header from './components/header/Header'
import Form from './components/form/Form'
import Result from './components/result/Result'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name1: null,
      name2: null,
      percentage: null,
      resultText: null,
      progress: 0
    }
  }
  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      progress: 1
    })
    axios({
      'url': `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.name1}&sname=${this.state.name2}`,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "a8e2a8492fmsh8bcac5361f1b3eap1872a6jsn2b795f6b2274"
      }
    }).then(response => {
      this.setState({
        percentage: response.data.percentage,
        resultText: response.data.result,
        progress: 2
      })
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  componentDidUpdate(props, state) {
    if (this.state.progress !== state.progress) {
      console.log(this.state)
    }
  }
  render() {
    // let result;
    // if (this.state.progress === 2) {
    //   result = (
    //     <div>
    //       <p>{this.state.name1 + "    " + this.state.name2}</p>
    //       <p>{this.state.percentage}</p>
    //       <p>{this.state.resultText}</p>
    //     </div>)
    // }
    // else if (this.state.progress === 1) {
    //   result = '...Loading';
    // }
    // else {
    //   result = ''
    // }
    return (
      <div className="App">
        <Header />
        <Form />
        <Result />
        {/* <form onSubmit={this.submitHandler}>
          <input onChange={this.changeHandler} type='text' id='name1' placeholder='name1' />
          <input onChange={this.changeHandler} type='text' id='name2' placeholder='name2' />
          <button type='submit'>Submit</button>
        </form>
        {result} */}
      </div>
    );
  }
}

export default App;
