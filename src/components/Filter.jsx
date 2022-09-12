import { memo } from 'react'

const Filter = ({ filter, onChange }) => {
  return (
    <div className="mb-3">
      <input
        value={filter}
        onChange={onChange}
        type="text"
        className="form-control"
      />
    </div>
  )
}

export default memo(Filter)
