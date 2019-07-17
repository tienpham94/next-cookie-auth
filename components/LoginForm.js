import { loginUser } from "../lib/auth";

class LoginForm extends React.Component {
  state = {
    email: "Sincere@april.biz",
    password: "hildegard.org"
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { email, password } = this.state;

    e.preventDefault();
    loginUser(email, password);
  };

  render() {
    const {email, password} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default LoginForm;
