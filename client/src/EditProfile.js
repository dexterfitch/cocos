function EditProfile(props) {
  const {
    user,
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
  } = props;
  
  function handleSubmit(event) {
    event.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "PATCH",
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
    })
  }

  return (
    <>
    <h1>Edit Profile</h1>
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
      <button type="submit">Signup</button>
    </form>
    </>
  );
}
  
  export default EditProfile;