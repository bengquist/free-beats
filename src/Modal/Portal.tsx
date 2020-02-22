import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"

type PortalProps = { children?: React.ReactNode }

export default function Portal(props: PortalProps) {
  const [container, setContainer] = useState<HTMLElement>()

  useEffect(() => {
    const div = document.createElement("div")
    document.body.append(div)
    setContainer(div)
    return () => div.remove()
  }, [])

  if (!container) return null

  return ReactDOM.createPortal(props.children, container)
}
