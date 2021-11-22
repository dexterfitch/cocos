import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import NavSection from './NavSection';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import EditProfile from './EditProfile';
import UserProfile from './UserProfile';

function App() {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [nickname, setNickname] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const [url, setUrl] = useState("");
  const [slack, setSlack] = useState("");

  return (
    <div className="App">
        <NavSection setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="me" element={<UserProfile />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="signup" element={
            <Signup 
              username={username} 
              password={password}
              password_confirmation={password_confirmation}
              nickname={nickname}
              first_name={first_name}
              last_name={last_name}
              email={email}
              linkedin={linkedin}
              url={url}
              slack={slack}
              setUsername={setUsername}
              setPassword={setPassword}
              setPasswordConfirmation={setPasswordConfirmation}
              setNickname={setNickname}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              setLinkedIn={setLinkedIn}
              setUrl={setUrl}
              setSlack={setSlack}
              setUser={setUser}
            />
          } />
          <Route path="edit" element={
            <EditProfile
              user={user} 
              username={username} 
              password={password}
              password_confirmation={password_confirmation}
              nickname={nickname}
              first_name={first_name}
              last_name={last_name}
              email={email}
              linkedin={linkedin}
              url={url}
              slack={slack}
              setUsername={setUsername}
              setPassword={setPassword}
              setPasswordConfirmation={setPasswordConfirmation}
              setNickname={setNickname}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              setLinkedIn={setLinkedIn}
              setUrl={setUrl}
              setSlack={setSlack}
              setUser={setUser}
            />
          } />
        </Routes>
    </div>
  );
}

export default App;
