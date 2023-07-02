import MouseCursor from './components/MouseCursor'
import ConfigProvider from './context/ConfigProvider'
import HomePage from './Pages/HomePage'
import ProviderInit from './ProviderInit'

function App() {
  return (
    <ConfigProvider>
      <ProviderInit>
        <HomePage />
        <MouseCursor />
      </ProviderInit>
    </ConfigProvider>
  )
}

export default App
