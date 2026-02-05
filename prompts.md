## 1.cursor-prompt:
- Create the new 'rentzila-logo-navigation' test spec using playwright MCP with following steps:
1. Visit https://dev.rentzila.com.ua/;
2. Verify the Rentzila logo is displayed in the website header;
3. Click on any navigation link (for example, a category or service page) to navigate to a non-home page;
4. Verify the current URL is not equal to the home page URL;
5. Verify the Rentzila logo is still displayed in the website header;
6. Click on the Rentzila logo;
7. Verify the user is redirected to the home page;
8. Verify the current URL equals https://dev.rentzila.com.ua/.

## 2.cursor-prompt:
1. Visit the home page  
   **URL:** `https://dev.rentzila.com.ua/`
2. Verify that the **Catalog** item is displayed in the website header.
3. Click on the **Catalog** item in the header.
4. Verify that the catalog dropdown menu is displayed.
5. Verify that the **«Спецтехніка»** menu item is displayed in the catalog menu.
6. Verify that the **«Послуги»** menu item is displayed in the catalog menu.
   

## 3.claude
Act as a Senior QA Automation Engineer. Based on the rules defined in ai-instructions-claude.md create the new 'сheck-poslugi_section' test spec using playwright MCP with following steps:
1. Visit the home page **URL:** https://dev.rentzila.com.ua/
2. Scroll the page down until the **Services** section is visible.
3. Verify that the section title **"Послуги"** is displayed on the page.
4. Verify that the services section contains four subsection tabs.
5. Verify that the following subsection tabs are displayed:
   - **Популярні**
   - **Сільськогосподарські**
   - **Будівельні**
   - **Інші**
6. Verify that each subsection tab is visible and clickable.