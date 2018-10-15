import Search from '../components/searchbox'
import Card from '../components/card'
import Frame from '../components/frame'

let arr = [1,2,3,4,5,6,7,8,9,10]
export default () => (
  <Frame>
    <h1>Search</h1>
    <Search />
    {arr.map(() => <Card />)}
  </Frame>
)