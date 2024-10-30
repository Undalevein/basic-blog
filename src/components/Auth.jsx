import { login, logout, loggedInUserDisplayName } from "../services/authService"

export function SignIn() {
  return <button class="button" onClick={login}>Sign In</button>
}

export function SignOut() {
  return (
    <div>
      Hello, {loggedInUserDisplayName()}
      <button class="button" onClick={logout}>Sign Out</button>
    </div>
  )
}