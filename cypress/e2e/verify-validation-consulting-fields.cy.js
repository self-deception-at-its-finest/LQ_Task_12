describe('', () => {
    it('Verify validation errors when submitting consultation form with empty fields', () => {
        cy.prompt([
            "Visit 'https://dev.rentzila.com.ua/'",
            "Scroll to the field with placeholder text 'Імʼя'",
            "Verify that the input field with placeholder text 'Імʼя' is displayed",
            "Verify that the input field with placeholder text 'Номер телефону' is displayed",
            "Verify that the button with visible text 'Замовити консультацію' is displayed",
            "Click on the button with visible text 'Замовити консультацію'",

            "Verify that the input field with placeholder text 'Імʼя' has a red border rgb(247, 56, 89)",
            "Verify that the input field with placeholder text 'Номер телефону' has a red border rgb(247, 56, 89)",

            "Verify that the error message with visible text 'Поле не може бути порожнім' is displayed below the 'Імʼя' input field",
            "Verify that the error message with visible text 'Поле не може бути порожнім' is displayed below the 'Номер телефону' input field"
        ]);
    });

})
