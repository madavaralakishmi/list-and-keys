import UserProfile from './components/UserProfile/index'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Rahul',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    url: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'floyd',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    url: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">User List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
