import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.state = { selectValueLocation: '' }
    this.state = { selectValueIncome: '' }
    this.state = { selectRadio: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDropdownLocation = this.handleDropdownLocation.bind(this)
    this.handleDropdownIncome = this.handleDropdownIncome.bind(this)

    this.onChangeValue = this.onChangeValue.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  handleDropdownLocation(e) {
    this.setState({ selectValueLocation: e.target.value })
  }

  handleDropdownIncome(e) {
    this.setState({ selectValueIncome: e.target.value })
  }

  onChangeValue(e) {
    this.setState({ selectRadio: e.target.value })
    console.log('radio', e.target.value)
  }

  handleSubmit(e) {
    console.log(
      'experience: ' + this.state.value,
      +this.state.selectValueLocation,
      +this.state.selectValueIncome,
      +this.state.selectRadio,
    )
    // console.log('dropdown', + this.state.selectValueLocation)
    // console.log('income', + this.state.selectValueIncome)
    // console.log('income', + this.state.selectproffession)
    e.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <div className="App__section">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Experience:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Years of experience"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Label>Profession:</Form.Label>
            {['radio'].map((type) => (
              <div
                key={`inline-${type}`}
                className="mb-3"
                value={this.state.selectRadio}
                onChange={this.onChangeValue}
              >
                <Form.Check
                  inline
                  label="Developer"
                  value="Developer"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Teacher"
                  value="Teacher"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Cashier"
                  value="Cashier"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
            <Form.Label>Location:</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={this.state.selectValueLocation}
              onChange={this.handleDropdownLocation}
            >
              <option value="0">Stockholm</option>
              <option value="1">Gothenburg</option>
            </Form.Select>
            <Form.Label>Income Year:</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={this.state.selectValueIncome}
              onChange={this.handleDropdownIncome}
            >
              <option value="1">2020</option>
              <option value="2">2019</option>
            </Form.Select>
            <Button variant="primary" type="submit">
              Calculate Salary
            </Button>
          </Form>
          {/* <Form>
          <Form.Group className="mb-3">
            <Form.Label>Salary after tax</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Form> */}
        </div>
      </div>
    )
  }
}
export default App
