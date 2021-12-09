import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormsTitleSection from './components/FormsTitleSection'
import FormSection from './components/FormSection'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App__Section">
          <FormsTitleSection />
          <FormSection />
        </div>
      </div>
    )
  }
}

export default App
