import { useState, useCallback } from 'react'
import Item from './Item'
import Filter from './Filter'

const ListItems = ({ title, items }) => {
  const [val, setVal] = useState('')

  const updateFilter = useCallback((e) => setVal(e.target.value), [])

  const getBody = () =>
    items
      .filter((item) =>
        item.value.toLowerCase().includes(val.toLocaleLowerCase())
      )
      .map((item) => <Item key={item.id} item={item} />)

  return (
    <section>
      <h3 className="mb-3">{title}</h3>
      <Filter filter={val} onChange={updateFilter} />
      <ul className="mb-3 p-0">{getBody()}</ul>
    </section>
  )
}

export default ListItems
