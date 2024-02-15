const nav = document.querySelector("navbar");

switch (window.location.pathname) {
  case "/":
    nav.innerHTML = `<nav
    class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body"
    data-bs-theme="dark"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Golden-Ratio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/studio">Studio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contacts">Contacts</a>
          </li>
          <li class="nav-item"></li>
        </ul>
      </div>
    </div>
  </nav>`;
    break;

  case "/projects":
    nav.innerHTML = `<nav
        class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Golden-Ratio</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/studio">Studio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contacts">Contacts</a>
              </li>
              <li class="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>`;
    break;

  case "/studio":
    nav.innerHTML = `<nav
    class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body"
    data-bs-theme="dark"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Golden-Ratio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/studio">Studio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contacts">Contacts</a>
          </li>
          <li class="nav-item"></li>
        </ul>
      </div>
    </div>
  </nav>`;
    break;

  case "/contacts":
    nav.innerHTML = `<nav
      class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Golden-Ratio</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/studio">Studio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/contacts">Contacts</a>
            </li>
            <li class="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>`;
    break;

  default:
    break;
}
