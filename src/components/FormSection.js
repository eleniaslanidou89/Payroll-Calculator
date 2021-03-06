import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class FormSection extends Component {
  constructor(props) {
    super(props)
    this.state = { selectValueLocation: '' };
    this.state = { selectValueIncome: 0 };
    this.state = { selectRadio: '' };
    this.state = { salary: 0 };
    this.state = { output: 0 };
    this.state = {value: ''}

    this.handleYearsofExperience = this.handleYearsofExperience.bind(this)
    this.handleDropdownLocation = this.handleDropdownLocation.bind(this)
    this.handleDropdownIncome = this.handleDropdownIncome.bind(this)
    this.handleProfession = this.handleProfession.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /*  Years of experience  */
  handleYearsofExperience(e) {
    this.setState({ value: e.target.value })
    if (e.target.value >= 4 && e.target.value <= 7) {
      this.setState({
        yearsOfExperience: 20 / 100,
      })
    } else if (e.target.value >= 8 && e.target.value <= 10) {
      this.setState({
        yearsOfExperience: 40 / 100,
      })
    } else if (e.target.value > 10) {
      this.setState({
        yearsOfExperience: 60 / 100,
      })
    } else {
      this.setState({
        yearsOfExperience: 0,
      })
    }
  }

  /*  Drop-down for location  */
  handleDropdownLocation(e) {
    this.setState({ selectValueLocation: e.target.value })
  }

  /*  Drop-down for income  */
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

  /*  Radion buttons for profession */
  handleProfession(e) {
    this.setState({ selectRadio: e.target.value })
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

  /*  Submit the form */
  handleSubmit(e) {
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
    this.setState({ output: this.state.output })
    e.preventDefault()
  }

  render() {
    return (
      <div className="App__Section--Form row">
        <Form onSubmit={this.handleSubmit} className="col-12">
          <Form.Group>
            <Form.Label>Experience:</Form.Label>
            <Form.Control
              name="value"
              type="text"
              placeholder="Years of experience"
              value={this.state.value}
              onChange={this.handleYearsofExperience}
            />
          </Form.Group>
          <div className="Form__Dropdown--Profession">
            <Form.Group>
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
            </Form.Group>
          </div>
          <div className="Form__Dropdown--Location">
            <Form.Group>
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
            </Form.Group>
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
          <div className="Form__Button--Submit">
            <Button variant="primary" type="submit">
              Calculate Salary
            </Button>
            <div className="Form__Output">
              <p className="Form__Output--Result">{this.state.output}kr</p>
            </div>
          </div>
        </Form>
      </div>
    )
  }
}

export default FormSection
