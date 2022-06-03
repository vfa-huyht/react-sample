import { act } from 'react-dom/test-utils'
import * as ReactDOM from 'react-dom'
import { App } from './App'

describe('App', function () {
  it('App testing', function () {
    let container = document.createElement('div')
    document.body.appendChild(container)
    act(() => {
      ReactDOM.render(<App />, container)
    })
    const header = container.querySelector('h1')
    expect(header?.textContent).toBe('Hello')
  })
})
