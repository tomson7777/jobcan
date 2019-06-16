import React, { Component } from 'react';
import { AuthService } from '../../../services/auth.service';

interface LoginState {
  login: string;
  password: string;
}

export class Login extends Component<any, LoginState> {
  state = {
    login: '',
    password: '',
  };

  constructor(props) {
    super(props);
  }

  handleControlChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login: React.FormEventHandler = async (e) => {
    e.preventDefault();
    AuthService.logIn(this.state.login, this.state.password)
      .then(() => this.props.history.push('/dashboard'))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          Login
          <input placeholder="login" name="login" value={this.state.login} onChange={this.handleControlChange} />
          Password
          <input placeholder="password" name="password" value={this.state.password} onChange={this.handleControlChange} />
          <button
            type="submit">
            Log in
          </button>
        </form>
      </div>
    );
  }
}
