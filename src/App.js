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
    this.state = { salary: 0 }
    this.state = { output: 0 }

    this.handleYearsofExperience = this.handleYearsofExperience.bind(this)
    this.handleDropdownLocation = this.handleDropdownLocation.bind(this)
    this.handleDropdownIncome = this.handleDropdownIncome.bind(this)
    this.handleProfession = this.handleProfession.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /*  YEARS OF EXPERIENCE  */
  handleYearsofExperience(e) {
    this.setState({ value: e.target.value })
    if (e.target.value >= 4 && e.target.value <= 7) {
      this.setState({
        yearsOfExperience: 20 / 100,
      })
    }
    if (e.target.value >= 8 && e.target.value <= 10) {
      this.setState({
        yearsOfExperience: 50 / 100,
      })
    }
  }

  /*  DROP-DOWN FOR LOCATION  */
  handleDropdownLocation(e) {
    this.setState({ selectValueLocation: e.target.value })
  }

  /*  DROP-DOWN FOR INCOME  */
  handleDropdownIncome(e) {
    this.setState({ selectValueIncome: e.target.value })
    if (e.target.value === '1' && this.state.selectValueLocation === '0') {
      this.setState({
        income: 30 / 100,
      })
    }
    if (e.target.value === '1' && this.state.selectValueLocation === '1') {
      this.setState({
        income: 29 / 100,
      })
    }
    if (e.target.value === '2' && this.state.selectValueLocation === '0') {
      this.setState({
        income: 25 / 100,
      })
    }
    if (e.target.value === '2' && this.state.selectValueLocation === '1') {
      this.setState({
        income: 22 / 100,
      })
    }
  }

  /*  RADIO BUTTONS FOR PROFESSION */
  handleProfession(e) {
    this.setState({ selectRadio: e.target.value })
    console.log('radio', e.target.value)
    if (e.target.value === 'Developer') {
      this.setState({
        basicSalary: 30000,
      })
    } else if (e.target.value === 'Teacher') {
      this.setState({
        basicSalary: 27000,
      })
    } else {
      this.setState({
        basicSalary: 25000,
      })
    }
  }

  /*  SUBMIT THE FORM  */
  handleSubmit(e) {
    console.log('state.income', this.state.income)
    this.state.output =
      this.state.basicSalary +
      this.state.yearsOfExperience * this.state.basicSalary
    if (this.state.output >= 36000 && this.state.output <= 45000) {
      this.state.output =
        this.state.output -
        (36000 * this.state.income + (this.state.output - 36000) * (50 / 100))
    } else if (this.state.output > 45000) {
      this.state.output =
        this.state.output -
        (36000 * this.state.income +
          (this.state.output - 45000) * (70 / 100) +
          (this.state.output - (this.state.output - 45000) - 36000) *
            (50 / 100))
    } else if (this.state.output <= 36000) {
      this.state.output =
        this.state.output - this.state.output * this.state.income
    }
    console.log('output', this.state.output)
    this.setState({ output: this.state.output })
    console.log(
      'experience: ' + this.state.value,
      +this.state.selectValueLocation,
      +this.state.selectValueIncome,
      +this.state.selectRadio,
      +this.state.output,
    )
    e.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <div className="App__section">
          <div className="App__section--form row">
            <Form onSubmit={this.handleSubmit} className="col-12">
              <Form.Group className="mb-3">
                <Form.Label>Experience:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Years of experience"
                  value={this.state.value}
                  onChange={this.handleYearsofExperience}
                />
              </Form.Group>
              <Form.Label>Profession:</Form.Label>
              {['radio'].map((type) => (
                <div
                  key={`inline-${type}`}
                  className="mb-3"
                  value={this.state.selectRadio}
                  onChange={this.handleProfession}
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
              <div className="Form__Dropdown--Location">
                <Form.Label>Location:</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={this.state.selectValueLocation}
                  onChange={this.handleDropdownLocation}
                >
                  <option>Select location</option>
                  <option value="0">Stockholm</option>
                  <option value="1">Gothenburg</option>
                </Form.Select>
              </div>
              <div className="Form__Dropdown--Income">
                <Form.Label>Income Year:</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  value={this.state.selectValueIncome}
                  onChange={this.handleDropdownIncome}
                >
                  <option>Select income</option>
                  <option value="1">2020</option>
                  <option value="2">2019</option>
                </Form.Select>
              </div>
              <div className="Form__Button--submit">
                <Button variant="primary" type="submit">
                  Calculate Salary
                </Button>
                <p>kr {this.state.output}</p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
export default App
