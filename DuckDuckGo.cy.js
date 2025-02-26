describe('DuckDuckGO search engine', () => { // TEST SUITE PAVADINIMAS
  it('Speedtest by Ookla', () => {   // - TEST CASE PAVADINIMAS
    cy.visit('https://duckduckgo.com')
    cy.contains('Switch to DuckDuckGo. It’s private and free!') // PATIKRINU, AR PUSLAPYJE MATOMA
    .should('be.visible') // PASITIKRINU, AR MATOMAS SVETAINĖS ŠŪKIS
    cy.get('#searchbox_input').type('test')
    cy.get('.searchbox_searchButton__F5Bwq').click()
    cy.contains('Speedtest by Ookla').should('be.visible')
  

  })
})

describe('DuckDuckGO search engine', () => { // TEST SUITE PAVADINIMAS
  it('Microsoft word cheat sheet', () => {   // - TEST CASE PAVADINIMAS
    cy.visit('https://duckduckgo.com')
    cy.contains('Switch to DuckDuckGo. It’s private and free!') // PATIKRINU, AR PUSLAPYJE MATOMA
    .should('be.visible') // PASITIKRINU, AR MATOMAS SVETAINĖS ŠŪKIS
    cy.get('#searchbox_input').type('microsoft word cheat sheet')
    cy.get('.searchbox_searchButton__F5Bwq').click()
    cy.contains('Microsoft Word 2010').should('be.visible')
    cy.get('.c-base__title').should('be.visible')
  })
})

describe('DuckDuckGO search engine', () => { // TEST SUITE PAVADINIMAS
  it('Share Feedback', () => {   // - TEST CASE PAVADINIMAS
    cy.visit('https://duckduckgo.com')
    cy.contains('Switch to DuckDuckGo. It’s private and free!') // PATIKRINU, AR PUSLAPYJE MATOMA
    .should('be.visible') // PASITIKRINU, AR MATOMAS SVETAINĖS ŠŪKIS
    cy.get('#searchbox_input').type('microsoft word cheat sheet')
    cy.get('.searchbox_searchButton__F5Bwq').click()
    cy.contains('Microsoft Word 2010').should('be.visible')
    cy.get('.c-base__title').should('be.visible')
    cy.get('.VYRn0PqcTApLnWYi0GKA > .ffON2NH02oMAcqyoh2UU').click()
    cy.get('.qVcwmKAeI6lHWhM7wALj > [aria-label="Positive feedback"]').click()
    cy.get(':nth-child(14) > .JkHd9XMghWGv6y6RD_Cr > .wZ4JdaHxSAhGy1HoNVja').click()
    cy.get('[data-testid="feedback-form-submit"]').click()
    cy.get('.AvAURxrcviI0tNootU1F').type('This is just a test')
    cy.get('[data-testid="feedback-form-submit"]').should('exist')
  })
})

describe('DuckDuckGO search engine', () => { // TEST SUITE PAVADINIMAS
  it('Shorten DuckDuckGO', () => {   // - TEST CASE PAVADINIMAS
    cy.visit('https://duckduckgo.com')
    cy.contains('Switch to DuckDuckGo. It’s private and free!') // PATIKRINU, AR PUSLAPYJE MATOMA
    .should('be.visible') // PASITIKRINU, AR MATOMAS SVETAINĖS ŠŪKIS
    cy.get('#searchbox_input').type('shorten duckduckgo.com/about')
    cy.get('.searchbox_searchButton__F5Bwq').click()
    cy.get('#shorten-url').should('have.value','https://is.gd/OnnE8s')
  })
})

describe('DuckDuckGO search engine', () => { // TEST SUITE PAVADINIMAS
  it('!wiki', () => {   // - TEST CASE PAVADINIMAS
    cy.visit('https://duckduckgo.com')
    cy.get('#searchbox_input').type('!wiki')
    cy.get('.searchbox_searchButton__F5Bwq').click()
    cy.origin('https://en.wikipedia.org', () => {
    cy.url().should('include', 'wikipedia.org');
    })
  })
})

describe('DuckDuckGO search engine', () => { // TEST SUITE PAVADINIMAS
  it('Stopwatch', () => {   // - TEST CASE PAVADINIMAS
    cy.visit('https://duckduckgo.com')
    cy.get('#searchbox_input').type('stopwatch{Enter}')
    cy.get('.start').click()
    cy.wait(1103)
    cy.get('.stop').click()
  })
})
