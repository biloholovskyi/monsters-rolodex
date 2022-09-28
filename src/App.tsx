import { useState, useEffect, ChangeEvent } from 'react';
import './App.css'
import SearchBoxComponent from './components/searchBox/searchBox.component'
import ListBoxComponent from './components/listBox/listBox.component'
import { getData } from './utils/data.utils';

export interface IMonster {
  id: string
  name: string
  email: string
}

const App = () => {
  const [monsters, setMonsters] = useState<IMonster[]>([])
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    fetchMonsters().then()
  }, [])

  const fetchMonsters = async () => {
    const fetchUsers = async () => {
      const users = await getData<IMonster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users)
    }

    fetchUsers()
  }

  const searchHandle = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchString(e.target.value.toLowerCase())
  }

  const filteringMonsters = () => {
    return monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString)
    )
  }

  return (
    <div className="App">
      <div className="app-title">Monsters Rolodex</div>
      <SearchBoxComponent
        placeholder={'searching monsters'}
        className={'monster-search-box'}
        onChangeHandler={searchHandle}
      />
      <ListBoxComponent array={filteringMonsters()} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super()
//
//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//   }
//
//   componentDidMount() {
//     this.fetchMonsters().catch((e) => console.error(e))
//   }
//
//   async fetchMonsters() {
//     await fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((json) => this.setState({ monsters: json }))
//   }
//
//   searchHandle = (e) => {
//     this.setState({ searchField: e.target.value.toLowerCase() })
//   }
//
//   filteringMonsters() {
//     return this.state.monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(this.state.searchField)
//     )
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <div className="app-title">Monsters Rolodex</div>
//         <SearchBoxComponent
//           placeholder={'searching monsters'}
//           className={'monster-search-box'}
//           onChangeHandler={this.searchHandle}
//         />
//         <ListBoxComponent array={this.filteringMonsters()} />
//       </div>
//     )
//   }
// }

export default App
