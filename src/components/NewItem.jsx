import { useState } from 'react'
import { generate as id } from 'shortid'
import { useAddItem } from '../contexts/AppContext'

const NewItem = () => {
  const [val, setVal] = useState('')
  const addItem = useAddItem()

  const handleChange = ({ target }) => setVal(target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem({ id: id(), value: val, packed: false })
    setVal('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-10">
          <input
            className="form-control mb-3"
            type="text"
            value={val}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <input className="btn btn-success" type="submit" value="Add item" />
        </div>
      </div>
    </form>
  )
}

export default NewItem
