import { flexCenterCol, fullScreen } from "./tailwinds/templates"

function App() {
  return (
    <div className={fullScreen() + flexCenterCol()}>
      <h1>App</h1>
    </div>
  )
}

export default App
