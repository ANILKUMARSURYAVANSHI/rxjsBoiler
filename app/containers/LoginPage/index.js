/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './app.css';

import { Button, Container, Row, Col, Jumbotron, Form, FormGroup, Label, Input, autoFocus } from 'reactstrap';

//this.props.history.push('/about')
const divStyle = {
  color: 'blue',
  marginTop: 100,
};



export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  constructor(props) {
    // Pass props back to parent
    super(props);
  }

  handleClick() {
    alert('call');
  }
  submitHanle(e) {
    alert('Logged in' + e);
    
  }

 // onClick={this.submitHanle(event)} 
  render() {
    return (
      <Container >

      <Form className="form-signin"  onSubmit={ (e) => {
          e.preventDefault();
         console.log('username :'+e.target.elements.inputEmail.value, 'password:'+e.target.elements.inputPassword.value);
         window.location.assign("/dashboard");
        }}>
        <h2 className="form-signin-heading">Please sign in</h2>
        <FormGroup>
        <Label for="inputEmail" className="sr-only">Email address</Label>
        <Input type="email" id="inputEmail" name="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
        </FormGroup>
        <FormGroup>
        <Label for="inputPassword" className="sr-only">Password</Label>
        <Input type="password" id="inputPassword"  name="inputPassword" className="form-control" placeholder="Password" required="" />
        </FormGroup>
        <div className="checkbox">
        <FormGroup>
          <Label>
            <Input type="checkbox" value="remember-me" / > Remember me
          </Label>
          </FormGroup>
        </div>
        <Button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</Button>
      </Form>

    
      </Container>
    );
  }
}

export default LoginPage;



/* <Jumbotron>
         <h3>Login</h3>
       <Form >
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        {' '}
        <Button type='button'onClick={this.handleClick}>Submit</Button>
      </Form>
      </Jumbotron> */
