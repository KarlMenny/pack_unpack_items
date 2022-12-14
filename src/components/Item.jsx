import { memo } from 'react'
import './Item.css'
import { useToggleChecked, useDeleteItem } from '../contexts/AppContext'

const Item = ({ item }) => {
  const toggleItem = useToggleChecked()
  const removeItem = useDeleteItem()

  return (
    <li className="item-box">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={item.packed}
          onChange={() => toggleItem(item)}
          id={item.id}
        />
        <label className="form-check-label" htmlFor={item.id}>
          {' '}
          {item.value}
        </label>
      </div>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => removeItem(item.id)}
      >
        Remove
      </button>
    </li>
  )
}

export default memo(Item)
