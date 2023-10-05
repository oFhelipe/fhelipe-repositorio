import MouseCursor from './components/MouseCursor'
import ConfigProvider from './providers/ConfigProvider'
import HomePage from './Pages/HomePage'
import ProviderInit from './providers/ProviderInit'

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
