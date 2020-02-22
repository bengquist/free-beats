// for non-JS asset imports
declare module "*.png" {
  const url: string
  export default url
}

declare module "*.jpg" {
  const url: string
  export default url
}

declare module "*.gif" {
  const url: string
  export default url
}

import {} from "styled-components/cssprop"

declare module "*.svg" {
  const url: string
  export default url
}

declare module "*.mp3" {
  const url: string
  export default url
}

declare module "*.mp4" {
  const url: string
  export default url
}

declare module "*.pdf" {
  const url: string
  export default url
}

declare module "*.zip" {
  const url: string
  export default url
}
