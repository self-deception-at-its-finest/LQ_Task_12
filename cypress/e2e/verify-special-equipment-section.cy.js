describe('Equipment section renzila', () => {
    it('Verify Special Equipment section on Rentzila home page', () => {
        cy.prompt([
            "Visit 'https://dev.rentzila.com.ua/'",
            "Verify that the section title with visible text 'Спецтехніка' is displayed",
            "Verify that the subsection tab with visible text 'Популярна' is displayed under the 'Спецтехніка' section",
            "Verify that the subsection tab with visible text 'Сільськогосподарська' is displayed under the 'Спецтехніка' section",
            "Verify that the subsection tab with visible text 'Будівельна' is displayed under the 'Спецтехніка' section",
            "Verify that the subsection tab with visible text 'Інша' is displayed under the 'Спецтехніка' section",
            "Click on the subsection tab with visible text 'Сільськогосподарська' under the 'Спецтехніка' section",
        ]);
    });
})
