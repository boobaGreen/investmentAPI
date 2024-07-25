<p align="center">
  <img src="https://img.icons8.com/external-tal-revivo-duo-tal-revivo/100/external-markdown-a-lightweight-markup-language-with-plain-text-formatting-syntax-logo-duo-tal-revivo.png" width="100" />
</p>
<p align="center">
    <h1 align="center">INVESTMENTAPI</h1>
</p>
<p align="center">
    <em>HTTP error 401 for prompt `slogan`</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/boobaGreen/investmentAPI?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/boobaGreen/investmentAPI?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/boobaGreen/investmentAPI?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/boobaGreen/investmentAPI?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white" alt="Jest">
	<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=flat&logo=ts-node&logoColor=white" alt="tsnode">
	<br>
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running investmentAPI](#-running-investmentAPI)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

HTTP error 401 for prompt `overview`

---

## 📦 Features

HTTP error 401 for prompt `features`

---

## 📂 Repository Structure

```sh
└── investmentAPI/
    ├── README.md
    ├── combined.log
    ├── doc
    │   ├── authflow
    │   │   └── auth-flowcahrt.pdf
    │   ├── original_track
    │   │   └── Esercizio_1_be.pdf
    │   └── test
    │       ├── insomnia_v4
    │       │   └── Insomnia_2024-07-22.json
    │       └── postman_v2
    │           └── InvestmentAPI.postman_collection.json
    ├── jest.config.ts
    ├── note.md
    ├── package-lock.json
    ├── package.json
    ├── prisma
    │   ├── dev.db
    │   ├── migrations
    │   │   ├── 20240722212222_init
    │   │   │   └── migration.sql
    │   │   └── migration_lock.toml
    │   ├── schema.prisma
    │   ├── seed.ts
    │   ├── seedData
    │   │   └── investmentSeedData.ts
    │   ├── test.db
    │   └── tsconfig.json
    ├── src
    │   ├── app.ts
    │   ├── controllers
    │   │   ├── errorController.ts
    │   │   ├── investmentController.ts
    │   │   └── tokenController.ts
    │   ├── midllewares
    │   │   └── authMiddleware.ts
    │   ├── routes
    │   │   ├── healthRouter.ts
    │   │   ├── helpRouter.ts
    │   │   ├── investmentRouter.ts
    │   │   └── tokenRouter.ts
    │   ├── server.ts
    │   ├── service
    │   │   ├── investmentService.ts
    │   │   └── tokenService.ts
    │   ├── test
    │   │   ├── healthRouter
    │   │   │   └── health.test.ts
    │   │   ├── investmentRouter
    │   │   │   ├── createInvestment.test.ts
    │   │   │   ├── deleteInvestment.test.ts
    │   │   │   ├── getOneInvestment.test.ts
    │   │   │   ├── getallInvestments.test.ts
    │   │   │   ├── statsInvestment.test.ts
    │   │   │   └── updateInvestment.test.ts
    │   │   ├── setupTest.ts
    │   │   ├── tokenRouter
    │   │   │   └── tokenRouter.test.ts
    │   │   └── utils
    │   │       └── deleteExpiredTokens.test.ts
    │   ├── types
    │   │   ├── TInvestment.ts
    │   │   └── TUser.ts
    │   └── utils
    │       ├── appError.ts
    │       ├── catchAsync.ts
    │       ├── cleanupService.ts
    │       ├── cookieUtils.ts
    │       ├── dateUtils.ts
    │       ├── dbServer.ts
    │       ├── jwtConfig.ts
    │       └── logger.ts
    └── tsconfig.json
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                                           | Summary                                       |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [tsconfig.json](https://github.com/boobaGreen/investmentAPI/blob/master/tsconfig.json)         | HTTP error 401 for prompt `tsconfig.json`     |
| [jest.config.ts](https://github.com/boobaGreen/investmentAPI/blob/master/jest.config.ts)       | HTTP error 401 for prompt `jest.config.ts`    |
| [package.json](https://github.com/boobaGreen/investmentAPI/blob/master/package.json)           | HTTP error 401 for prompt `package.json`      |
| [package-lock.json](https://github.com/boobaGreen/investmentAPI/blob/master/package-lock.json) | HTTP error 401 for prompt `package-lock.json` |

</details>

<details closed><summary>doc.test.postman_v2</summary>

| File                                                                                                                                                       | Summary                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [InvestmentAPI.postman_collection.json](https://github.com/boobaGreen/investmentAPI/blob/master/doc/test/postman_v2/InvestmentAPI.postman_collection.json) | HTTP error 401 for prompt `doc/test/postman_v2/InvestmentAPI.postman_collection.json` |

</details>

<details closed><summary>doc.test.insomnia_v4</summary>

| File                                                                                                                              | Summary                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [Insomnia_2024-07-22.json](https://github.com/boobaGreen/investmentAPI/blob/master/doc/test/insomnia_v4/Insomnia_2024-07-22.json) | HTTP error 401 for prompt `doc/test/insomnia_v4/Insomnia_2024-07-22.json` |

</details>

<details closed><summary>src</summary>

| File                                                                               | Summary                                   |
| ---------------------------------------------------------------------------------- | ----------------------------------------- |
| [server.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/server.ts) | HTTP error 401 for prompt `src/server.ts` |
| [app.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/app.ts)       | HTTP error 401 for prompt `src/app.ts`    |

</details>

<details closed><summary>src.midllewares</summary>

| File                                                                                                           | Summary                                                       |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [authMiddleware.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/midllewares/authMiddleware.ts) | HTTP error 401 for prompt `src/midllewares/authMiddleware.ts` |

</details>

<details closed><summary>src.types</summary>

| File                                                                                               | Summary                                              |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [TUser.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/types/TUser.ts)             | HTTP error 401 for prompt `src/types/TUser.ts`       |
| [TInvestment.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/types/TInvestment.ts) | HTTP error 401 for prompt `src/types/TInvestment.ts` |

</details>

<details closed><summary>src.utils</summary>

| File                                                                                                     | Summary                                                 |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [cookieUtils.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/utils/cookieUtils.ts)       | HTTP error 401 for prompt `src/utils/cookieUtils.ts`    |
| [dateUtils.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/utils/dateUtils.ts)           | HTTP error 401 for prompt `src/utils/dateUtils.ts`      |
| [logger.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/utils/logger.ts)                 | HTTP error 401 for prompt `src/utils/logger.ts`         |
| [cleanupService.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/utils/cleanupService.ts) | HTTP error 401 for prompt `src/utils/cleanupService.ts` |
| [catchAsync.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/utils/catchAsync.ts)         | HTTP error 401 for prompt `src/utils/catchAsync.ts`     |
| [dbServer.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/utils/dbServer.ts)             | HTTP error 401 for prompt `src/utils/dbServer.ts`       |
| [jwtConfig.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/utils/jwtConfig.ts)           | HTTP error 401 for prompt `src/utils/jwtConfig.ts`      |
| [appError.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/utils/appError.ts)             | HTTP error 401 for prompt `src/utils/appError.ts`       |

</details>

<details closed><summary>src.routes</summary>

| File                                                                                                          | Summary                                                    |
| ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [tokenRouter.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/routes/tokenRouter.ts)           | HTTP error 401 for prompt `src/routes/tokenRouter.ts`      |
| [helpRouter.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/routes/helpRouter.ts)             | HTTP error 401 for prompt `src/routes/helpRouter.ts`       |
| [healthRouter.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/routes/healthRouter.ts)         | HTTP error 401 for prompt `src/routes/healthRouter.ts`     |
| [investmentRouter.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/routes/investmentRouter.ts) | HTTP error 401 for prompt `src/routes/investmentRouter.ts` |

</details>

<details closed><summary>src.test</summary>

| File                                                                                          | Summary                                           |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [setupTest.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/test/setupTest.ts) | HTTP error 401 for prompt `src/test/setupTest.ts` |

</details>

<details closed><summary>src.test.tokenRouter</summary>

| File                                                                                                                    | Summary                                                              |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [tokenRouter.test.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/test/tokenRouter/tokenRouter.test.ts) | HTTP error 401 for prompt `src/test/tokenRouter/tokenRouter.test.ts` |

</details>

<details closed><summary>src.test.investmentRouter</summary>

| File                                                                                                                                     | Summary                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [updateInvestment.test.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/test/investmentRouter/updateInvestment.test.ts)   | HTTP error 401 for prompt `src/test/investmentRouter/updateInvestment.test.ts`  |
| [statsInvestment.test.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/test/investmentRouter/statsInvestment.test.ts)     | HTTP error 401 for prompt `src/test/investmentRouter/statsInvestment.test.ts`   |
| [createInvestment.test.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/test/investmentRouter/createInvestment.test.ts)   | HTTP error 401 for prompt `src/test/investmentRouter/createInvestment.test.ts`  |
| [getOneInvestment.test.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/test/investmentRouter/getOneInvestment.test.ts)   | HTTP error 401 for prompt `src/test/investmentRouter/getOneInvestment.test.ts`  |
| [deleteInvestment.test.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/test/investmentRouter/deleteInvestment.test.ts)   | HTTP error 401 for prompt `src/test/investmentRouter/deleteInvestment.test.ts`  |
| [getallInvestments.test.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/test/investmentRouter/getallInvestments.test.ts) | HTTP error 401 for prompt `src/test/investmentRouter/getallInvestments.test.ts` |

</details>

<details closed><summary>src.test.utils</summary>

| File                                                                                                                              | Summary                                                                |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [deleteExpiredTokens.test.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/test/utils/deleteExpiredTokens.test.ts) | HTTP error 401 for prompt `src/test/utils/deleteExpiredTokens.test.ts` |

</details>

<details closed><summary>src.test.healthRouter</summary>

| File                                                                                                           | Summary                                                          |
| -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [health.test.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/test/healthRouter/health.test.ts) | HTTP error 401 for prompt `src/test/healthRouter/health.test.ts` |

</details>

<details closed><summary>src.service</summary>

| File                                                                                                             | Summary                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [investmentService.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/service/investmentService.ts) | HTTP error 401 for prompt `src/service/investmentService.ts` |
| [tokenService.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/service/tokenService.ts)           | HTTP error 401 for prompt `src/service/tokenService.ts`      |

</details>

<details closed><summary>src.controllers</summary>

| File                                                                                                                       | Summary                                                             |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [tokenController.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/controllers/tokenController.ts)           | HTTP error 401 for prompt `src/controllers/tokenController.ts`      |
| [errorController.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/controllers/errorController.ts)           | HTTP error 401 for prompt `src/controllers/errorController.ts`      |
| [investmentController.ts](https://github.com/boobaGreen/investmentAPI/blob/master/src/controllers/investmentController.ts) | HTTP error 401 for prompt `src/controllers/investmentController.ts` |

</details>

<details closed><summary>prisma</summary>

| File                                                                                          | Summary                                          |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [tsconfig.json](https://github.com/boobaGreen/investmentAPI/blob/master/prisma/tsconfig.json) | HTTP error 401 for prompt `prisma/tsconfig.json` |
| [seed.ts](https://github.com/boobaGreen/investmentAPI/blob/master/prisma/seed.ts)             | HTTP error 401 for prompt `prisma/seed.ts`       |
| [schema.prisma](https://github.com/boobaGreen/investmentAPI/blob/master/prisma/schema.prisma) | HTTP error 401 for prompt `prisma/schema.prisma` |

</details>

<details closed><summary>prisma.seedData</summary>

| File                                                                                                                   | Summary                                                           |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [investmentSeedData.ts](https://github.com/boobaGreen/investmentAPI/blob/master/prisma/seedData/investmentSeedData.ts) | HTTP error 401 for prompt `prisma/seedData/investmentSeedData.ts` |

</details>

<details closed><summary>prisma.migrations</summary>

| File                                                                                                                 | Summary                                                           |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [migration_lock.toml](https://github.com/boobaGreen/investmentAPI/blob/master/prisma/migrations/migration_lock.toml) | HTTP error 401 for prompt `prisma/migrations/migration_lock.toml` |

</details>

<details closed><summary>prisma.migrations.20240722212222_init</summary>

| File                                                                                                                         | Summary                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [migration.sql](https://github.com/boobaGreen/investmentAPI/blob/master/prisma/migrations/20240722212222_init/migration.sql) | HTTP error 401 for prompt `prisma/migrations/20240722212222_init/migration.sql` |

</details>

---

## 🚀 Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **TypeScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the investmentAPI repository:

```sh
git clone https://github.com/boobaGreen/investmentAPI
```

2. Change to the project directory:

```sh
cd investmentAPI
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running investmentAPI

Use the following command to run investmentAPI:

```sh
npm run build && node dist/main.js
```

### 🧪 Tests

To execute tests, run:

```sh
npm test
```

---

## 🛠 Project Roadmap

- [x] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/boobaGreen/investmentAPI/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/boobaGreen/investmentAPI/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/boobaGreen/investmentAPI/issues)**: Submit bugs found or log feature requests for Investmentapi.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/boobaGreen/investmentAPI
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
