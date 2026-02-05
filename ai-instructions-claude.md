---
alwaysApply: true
---

# Coding Guidelines for Playwright-MCP Project

## 1. File Interaction
- Always interact only with files located in the `task-12` folder.
- Do not read or modify files outside this folder.

## 2. Page Object Model (POM)
- **MANDATORY**: Every test spec MUST have corresponding page object files.
- Always use the **Page Object Model (POM)** pattern for structuring UI automation code.
- Create one page object class in separate page file for each page.
- Store all page object files in:  `task_12/pages`
- **NEVER create spec files without creating their corresponding page objects first**.
- All locators and page interactions must be defined in page objects, not in test files.

## 3. Test Files
- Always create test files in:  `task_12/tests`.
- Do not place spec files outside this folder.

## 4. MCP Usage
- All navigation, assertion, AND LOCATOR DISCOVERY must be performed via playwright-mcp.
- Use MCP browser/inspector to derive selectors, do not guess or hardcode without MCP validation.
- For every new/changed locator:
  - Validate via MCP;
  - Prefer role/name, label, placeholder, accessible names, or test IDs exposed in DOM.

## 5. Prevent Auto-Generated / Random Test Files
- Do not allow LLM or MCP to create random test files like urltest_<uuid>.test.
- Ensure AI-generated spec files are only created in `task_12/tests`.

## 6. General Notes
- **MANDATORY**: Use TypeSript for writing code
- Follow consistent naming conventions for pages and specs.
- Keep code modular and reusable within the defined folder structure.
- Review MCP logs to debug test execution if necessary.

## 7. Prohibition of Unsolicited Files and Content
- **STRICTLY PROHIBITED**: Do not create or modify any files other than the necessary Page Objects and Spec files unless explicitly requested.
- **No Documentation/Analysis**: Do not generate summaries, conclusion reports, analysis files, or logs unless a specific task requires it.
- **No README updates**: Never modify the `README.md` or any other project documentation file unless directly instructed to do so.
- The AI agent must focus solely on the automation code and the defined project structure within the `task_12` folder.
