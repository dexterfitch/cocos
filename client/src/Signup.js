import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'; 

function Signup(props) {
  const navigate = useNavigate();
  const {
    username, 
    password,
    password_confirmation,
    nickname,
    first_name,
    last_name,
    email,
    linkedin,
    url,
    slack,
    setUsername,
    setPassword,
    setPasswordConfirmation,
    setNickname,
    setFirstName,
    setLastName,
    setEmail,
    setLinkedIn,
    setUrl,
    setSlack,
    setUser
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username, 
        password,
        password_confirmation,
        nickname,
        first_name,
        last_name,
        email,
        linkedin,
        url,
        slack
      }),
    }).then((response) => {
      if (response.created) {
        response.json().then((userData) => setUser(userData));
      }
    });
    navigate('/');
  }

  return (
    <>
    <h1>Signup</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        autoComplete="off"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <label htmlFor="password-confirmation">Password Confirmation</label>
      <input
        type="password"
        id="password-confirmation"
        autoComplete="off"
        value={password_confirmation}
        onChange={(event) => setPasswordConfirmation(event.target.value)}
      />
      <label htmlFor="nickname">Nickname</label>
      <input
        type="text"
        id="nickname"
        autoComplete="off"
        value={nickname}
        onChange={(event) => setNickname(event.target.value)}
      />
      <label htmlFor="first_name">First Name</label>
      <input
        type="text"
        id="first_name"
        autoComplete="off"
        value={first_name}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <label htmlFor="last_name">Last Name</label>
      <input
        type="text"
        id="last_name"
        autoComplete="off"
        value={last_name}
        onChange={(event) => setLastName(event.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        autoComplete="off"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="linkedin">LinkedIn</label>
      <input
        type="text"
        id="linkedin"
        autoComplete="off"
        value={linkedin}
        onChange={(event) => setLinkedIn(event.target.value)}
      />
      <label htmlFor="url">Portfolio</label>
      <input
        type="text"
        id="url"
        autoComplete="off"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />
      <label htmlFor="slack">Slack</label>
      <input
        type="text"
        id="slack"
        autoComplete="off"
        value={slack}
        onChange={(event) => setSlack(event.target.value)}
      />
      <Button type="submit">Signup</Button>
    </form>
    </>
  );
}

export default Signup;