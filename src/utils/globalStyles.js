import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .header-title {
    color: ${({ theme }) => theme.text};
  }
  .post-body .post-article blockquote {
    color: ${({ theme }) => theme.body};
    background: ${({ theme }) => theme.text};
  }
  .post-body > .post-article > .gatsby-highlight {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
`