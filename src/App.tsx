import { useCallback } from "react"
import { ExampleAlgorithm } from "./shared/algorithms/example_algorithm"

function App() {
  const func = useCallback(ExampleAlgorithm, [])
  return (
    <>
      {func(10)}
    </>
  )
}

export default App
