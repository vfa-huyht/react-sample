import React from 'react'
import { City } from '../../models/city'

export interface SelectOptionProps {
  onClickItem: Function
  option: City
}

export default function SelectOption({
  option,
  onClickItem,
}: SelectOptionProps) {
  const handleClick = () => {
    if (onClickItem) {
      onClickItem(option)
    }
  }
  return (
    <div className="select-item" onClick={handleClick}>
      <div className="flex flex-start-center" style={{ gap: '4px' }}>
        <p className="place-name">{option?.name}</p>
        <div className="acronym">
          <p>{option?.code}</p>
        </div>
        <img
          className="symbol"
          src="https://i.ibb.co/7jVscvr/vector.png"
          alt="anhsa"
        />
      </div>
      <div className=" flex flex-start-center">
        <img className="symbol flag" src={option?.ensign} alt={option?.name} />
        <p className="address">{option?.address}</p>
      </div>
    </div>
  )
}
