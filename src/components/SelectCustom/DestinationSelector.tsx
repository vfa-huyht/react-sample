import {
  CloseOutlined,
  LoadingOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Button, Form, Input, Spin } from 'antd'
import { useCallback, useRef, useState } from 'react'
import { debounce } from 'lodash'
import { cityApi } from '../../api/city'
import { City } from '../../models/city'
import { helper } from '../../utils/helper'
import SelectOption from './SelectOption'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
type DestinationSelectorProps = {
  disabled: boolean
}

export default function DestinationSelector({
  disabled = false,
}: DestinationSelectorProps) {
  const [value, setValue] = useState<string>('')
  const [isHistory, setIsHistory] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [selected, setSelected] = useState<City | undefined>(undefined)
  const [optionList, setOptionList] = useState<any>([])
  const [showDropDown, setShowDropDown] = useState<boolean>(false)
  const { t } = useTranslation()
  const ref = useRef<any>()
  // focus input when click selected
  const handleInput = (e: any) => {
    ref.current.focus()
  }
  // fetch data when input change
  const fetchDropdownOptions = async (key: string) => {
    try {
      setLoading(true)
      setShowDropDown(true)
      const result = await cityApi.searchName(key)
      setOptionList(result)
    } catch (error) {
      setOptionList([])
    }
    setLoading(false)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceDropDown = useCallback(
    debounce((nextValue: any) => fetchDropdownOptions(nextValue), 500),
    []
  )
  // input change event
  const handleChangeInput = (e: any) => {
    setValue(e.target.value)
    if (!e.target.value) {
      setIsHistory(true)
    }
    if (
      e.target.value.length > 1 ||
      (e.target.value.length > 2 && /^[ -~]+$/.test(e.target.value)) ||
      !/^[ -~]+$/.test(e.target.value)
    ) {
      debounceDropDown(e.target.value)
      setIsHistory(false)
    } else {
      setIsHistory(true)
    }

    ref.current.focus()
  }
  const handleFocusInput = (e: any) => {
    setShowDropDown(true)
  }
  const handleBlurInput = (e: any) => {
    setShowDropDown(false)
    if (optionList.length) {
      setSelected(optionList[0])
    }
  }
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' || e.key === 'Tag') {
      setShowDropDown(false)
      if (optionList.length) {
        setSelected(optionList[0])
      }
    }
  }
  // remove selected item
  const handleRemove = (e: any) => {
    setValue('')
    setSelected(undefined)
    setShowDropDown(false)
  }

  const handleClose = (e: any) => {}
  // selected item
  const handleClickItem = (option: City) => {
    console.log('click')
    setShowDropDown(false)
    setSelected(option)
  }
  return (
    <div
      className={classNames('select', { disabled: disabled })}
      onFocus={handleInput}
      onBlur={handleClose}
    >
      <div className="select-custom">
        <h3>{t('destinationAddress')}</h3>
        <div className="flex flex-start-center" style={{ gap: '2px' }}>
          <Input type="hidden" name="origin" value={selected?.id} />
          {helper.isEmptyObj(selected) ? (
            <>
              <div className="ensign">{/* <img alt="test" /> */}</div>
              <Input
                disabled={disabled}
                placeholder={t('placePort')}
                value={value}
                onChange={handleChangeInput}
                onFocus={handleFocusInput}
                onBlur={handleBlurInput}
                onKeyDown={handleKeyDown}
                ref={ref}
                style={{ flex: 1 }}
              />
            </>
          ) : (
            <>
              <div className="ensign border">
                <img src={selected?.ensign} alt="test" />
              </div>
              <p ref={ref} style={{ flex: 1 }}>
                {selected?.name}
              </p>
            </>
          )}

          {selected ? (
            <Button
              onClick={handleRemove}
              size="small"
              className="btn-close"
              icon={<CloseOutlined />}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      {showDropDown ? (
        <div className="select-dropdown">
          {isHistory ? (
            <div className="flex flex-start-center title">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 0.250006C3.38176 0.248923 2.77287 0.400849 2.2276 0.692237C1.68234 0.983625 1.21766 1.40542 0.875 1.92001V0.875006H0.25V3.06251H2.4375V2.43751H1.30469C1.84438 1.50626 2.84281 0.875006 4 0.875006C5.72969 0.875006 7.125 2.27032 7.125 4.00001C7.125 5.72969 5.72969 7.12501 4 7.12501C2.27031 7.12501 0.875 5.72969 0.875 4.00001H0.25C0.25 6.06782 1.93219 7.75001 4 7.75001C6.06781 7.75001 7.75 6.06782 7.75 4.00001C7.75 1.93219 6.06781 0.250006 4 0.250006ZM3.6875 1.50001V4.31251H5.875V3.68751H4.3125V1.50001H3.6875Z"
                  fill="black"
                />
              </svg>
              <p>{t('history')}</p>
            </div>
          ) : (
            ''
          )}

          {loading ? (
            <>
              <div className="search-empty w-full h-full flex flex-center">
                <Spin indicator={antIcon} />
              </div>
            </>
          ) : optionList.length ? (
            <div className="select-options">
              {optionList.slice(0, 15).map((option: City) => {
                return (
                  <SelectOption
                    option={option}
                    onClickItem={handleClickItem}
                    key={option.id}
                  />
                )
              })}
            </div>
          ) : (
            <div className="search-empty w-full h-full flex flex-center flex-col">
              <SearchOutlined style={{ fontSize: '24px' }} />
              <p style={{ fontSize: '8px' }}>{t('resultEmpty')}</p>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
