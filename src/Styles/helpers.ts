import { css } from "styled-components";

type FluidGridOptions = {
  minWidth?: number;
  fullWidthBreakpoint?: number;
  gap?: string;
  method?: "auto-fill" | "auto-fit";
};

export const fluidGrid = ({
  minWidth = 250,
  fullWidthBreakpoint = minWidth + 100,
  gap = "15px",
  method = "auto-fill"
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
`;
