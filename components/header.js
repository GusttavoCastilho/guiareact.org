export default function AppHeader(props){

    return(
        <header>
            <h1>{props.title}</h1>
            <nav>
              <ul>
                <li>
                  <a href="Hooks">Guia de Hooks</a>
                </li>
                <li>
                  <a href="Hooks">Links</a>
                </li>
                <li>
                  <a href="Hooks">Contribua</a>
                </li>
                <li>
                  <a
                    className="github-button"
                    href="https://github.com/rubenmarcus/padroesreact.org"
                    data-color-scheme="no-preference: light; light: light; dark: dark;"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star rubenmarcus/padroesreact.org on GitHub"
                  >
                    Star
                  </a>
                </li>
              </ul>
            </nav>
          </header>
    )
}