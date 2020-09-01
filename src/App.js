import React from 'react';
import Header from './components/header/Header'
import Form from './components/form/Form'
import Result from './components/result/Result'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Result />
      </div>
    );
  }
}

export default App;
