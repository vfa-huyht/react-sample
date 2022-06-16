import '../css/page/test.scss'
import { useTranslation } from 'react-i18next'
import { SearchOutlined } from '@ant-design/icons'
import { Badge, Button, Divider, Form, Tooltip } from 'antd'
import DestinationSelector from '../components/SelectCustom/DestinationSelector'
import OriginSelector from '../components/SelectCustom/OriginSelector'
import { useEffect, useState } from 'react'
import { values } from 'lodash'
type Props = {}

export const Test = ({}: Props) => {
  const [activeOrigin, setActiveOrigin] = useState<boolean>(false)
  useEffect(() => {
    if (origin) {
      console.log(origin)
    }
  }, [origin])
  const handleOrigin = (values: string) => {
    if (values) {
      setActiveOrigin(false)
    } else {
      setActiveOrigin(true)
    }
  }
  return (
    <div
      className="h-screen w-screen flex flex-center"
      style={{ padding: '0 50px' }}
    >
      <Form style={{ width: '100%' }} className="flex flex-center">
        {' '}
        <div className="search-area">
          <OriginSelector onOrigin={handleOrigin} />
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0392 0.0857544L9.96 1.165L15.0472 6.25H0V7.75H15.0472L9.96075 12.8358L11.0392 13.9143L17.4142 7.53925L17.9295 7L17.4142 6.46075L11.0392 0.0857544Z"
              fill="#666666"
            />
          </svg>

          <DestinationSelector disabled={activeOrigin} />
          <Divider type="vertical" style={{ margin: 0, height: '53px' }} />
          <DestinationSelector disabled={activeOrigin} />
          <Tooltip title="search">
            <Button
              disabled={activeOrigin}
              size="large"
              style={{
                height: '51px',
                width: '51px',
                margin: 0,
                boxSizing: 'border-box',
                borderRadius: '5px',
              }}
              icon={<SearchOutlined style={{ fontSize: 20 }} />}
            />
          </Tooltip>

          <div
            style={{
              height: '51px',
              width: '51px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Badge
              size="small"
              count={1}
              style={{ top: '110%', right: '50%', backgroundColor: '#666666' }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.625 0.75L14.8597 1.0545L17.25 4.242V17.25H0.75V4.242L3.141 1.0545L3.375 0.75H14.625ZM13.875 2.25H9.75V3.75H15L13.875 2.25ZM8.25 2.25H4.125L3 3.75H8.25V2.25ZM15.75 5.25H2.25V15.75H15.75V5.25ZM11.3903 6.75C11.8035 6.7875 12.1087 7.15725 12.0705 7.5705C12.0322 7.983 11.6632 8.28825 11.25 8.25H6.75C6.48 8.253 6.22875 8.112 6.09075 7.878C6.02454 7.76302 5.9897 7.63268 5.9897 7.5C5.9897 7.36732 6.02454 7.23698 6.09075 7.122C6.22875 6.888 6.48075 6.747 6.75 6.75H11.391H11.3903Z"
                  fill="black"
                />
              </svg>
            </Badge>
          </div>
        </div>
      </Form>
    </div>
  )
}
