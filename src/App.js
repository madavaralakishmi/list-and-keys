import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Rahul',
    role: 'Software Developer',
  },
  {
    url: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'floyd',
    role: 'Software Developer',
  },
  {
    url: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">User List</h1>
    <ul>
      <UserProfile userDetails={userDetailsList[0]} />
      <UserProfile userDetails={userDetailsList[1]} />
      <UserProfile userDetails={userDetailsList[2]} />
    </ul>
  </div>
)

export default App
