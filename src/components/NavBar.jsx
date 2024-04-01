import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/movie/top-rated'}>Top Rated</NavLink>
      </nav>
    </header>
  )
}
