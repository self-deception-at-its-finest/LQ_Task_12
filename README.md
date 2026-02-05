# AI-Driven Test Automation Playground

## 🔹 Project Overview
This repository is a hands-on playground for exploring **AI-assisted automated testing**. The focus is on generating reliable, maintainable test cases for [https://luxequality.com/](https://luxequality.com/) using AI-powered tools like **Cursor IDE (Claude 3.5 Sonnet)** and **Claude Desktop**, integrated through the **Model Context Protocol (MCP)**.

Key highlights:
- Auto-generating tests for **Playwright** and **Cypress**.
- Following the **Page Object Model (POM)** for clean test architecture.
- Documenting test cases in line with **ISTQB** standards.
- Enforcing coding standards with AI-driven rules (`.cursorrules`).

---

## 🔹 Prerequisites
Make sure your environment includes:

- **Node.js** ≥ v18
- **npm** (bundled with Node.js)
- **Cursor IDE** with Claude 3.5 Sonnet
- **Claude Desktop Client**
- **Playwright MCP** server configured and running

---

## 🔹 Setup Instructions

1. **Clone this repository**
   ```bash
   git clone <your-repository-url>
   cd <repository-folder>
   npm install
   npx playwright install'
---
## Configure AI & MCP settings
Ensure .cursorrules and MCP configurations are active in your IDE.
## Running Tests
**Run all Playwright tests:**

        npx playwright test

**Launch the Cypress Test Runner::**

        npx playwright test
---
## 📁 Project Structure
```bash
task_12/
├─ .cursor/ # Cursor IDE configurations
├─ claude/ # AI-related resources
├─ cypress/ # Cypress test framework
│ ├─ e2e/ # End-to-end test scripts
│ ├─ fixtures/ # Test data
│ └─ support/ # Custom commands & helpers
├─ pages/ # Page Object Model classes
├─ tests/ # Playwright test scripts
├─ .gitignore # Git ignore rules
├─ ai-instructions-claude.md # AI test instructions
├─ cypress.config.js # Cypress configuration
├─ package.json # Project metadata & dependencies
├─ package-lock.json # NPM lock file
├─ playwright.config.ts # Playwright configuration
├─ prompts.md # AI prompt history
└─ README.md # Project documentation
```