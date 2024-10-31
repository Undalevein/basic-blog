import { login, logout, loggedInUserDisplayName } from "../services/authService"

export function SignIn() {
  return <button className="button is-ghost" onClick={login}>Sign In</button>
}

export function SignOut() {
  return (
    <div id="signin">
      Hello, {loggedInUserDisplayName()}
      <button className="button is-ghost" onClick={logout}>Sign Out</button>
    </div>
  )
}