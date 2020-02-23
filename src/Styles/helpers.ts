import { css } from "styled-components"

type FluidGridOptions = {
  minWidth?: number
  fullWidthBreakpoint?: number
  gap?: string
  method?: "auto-fill" | "auto-fit"
}

export const fluidGrid = ({
  minWidth = 250,
  fullWidthBreakpoint = minWidth + 100,
  gap = "15px",
  method = "auto-fill",
}: FluidGridOptions = {}) => css`
  display: grid;
  align-items: start;
  justify-items: center;
  grid-template-columns: repeat(${method}, minmax(${minWidth}px, 1fr));
  grid-gap: ${gap};
  /* without this, the grid columns won't ever go below the minimum defined by minmax() above */
  @media (max-width: ${fullWidthBreakpoint}px) {
    grid-template-columns: 1fr;
  }
`

export const spacedChildren = (right = 0, bottom = 0) => css`
  > * {
    margin-right: ${right}rem;
    margin-bottom: ${bottom}rem;

    :last-child {
      margin: 0;
    }
  }
`

export const flexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
`

export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const round = (radius = 0.25) => css`
  border-radius: ${radius}rem;
`

export const primaryColorAccentBackground = css`
  color: ${(props) => props.theme.primary};
  background: ${(props) => props.theme.accent};
`

export const accentColorPrimaryBackground = css`
  color: ${(props) => props.theme.accent};
  background: ${(props) => props.theme.primary};
`

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
