import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import Loader from "../Register/Loading"

export default function LoaderPage() {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      setTimeout(history.push('/'))
    }, 1300)
  })

  return <Loader styles={'complete'}/>
}