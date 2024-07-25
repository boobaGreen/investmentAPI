<p align="center">
  <img src="https://img.icons8.com/external-tal-revivo-duo-tal-revivo/100/external-markdown-a-lightweight-markup-language-with-plain-text-formatting-syntax-logo-duo-tal-revivo.png" width="100" />
</p>
<p align="center">
    <h1 align="center">investmentAPI</h1>
</p>
<p align="center">
    <em>Claudio Dall'Ara</em>
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

**Exercise Specifications:**

A company has decided to allow frontend-enabling bees to the public
developers to experiment with those already made bees. Bees will allow you to create and
read about investments and an API that allows you to see how many and which ones over time
investments have been made. However, before carrying out some operations they must be
authorizations via a specific API, which will assign two levels of access based on the request

**Technical specifications:**

1. Create an API that returns a unique, one-time use code
   which provides access to the rest of the bees with two permission levels, one for
   reading and one for reading and writing. If the request is made a basic
   permission to grant that reading and writing otherwise only in
   reading
2. Creation of investments
3. Reading investments
4. Investment statistics API, which allows you to filter between two periods to see the
   number or value of investments made in the selected period. Furthermore
   this api will have to be used for graphs, consequently the values
   they can be divided by day, week, month and year

**Investment Specifications:** {
data creation,
confirmation of data,
value,
annual rate,
id
}

**Delivery specifications:**
The code must be delivered via a public repository on github, with the
specifications to start in code.
It is advisable to leave Postman (or similar) files in the repository for API testing

**Implementation Requests:**

- Backend development must be implemented with Node.js and a framework
  choice(Express favorite)
- The use of Typescript is mandatory
- Data can be saved in a SQL db or in a file
- Carry out e2e tests to verify the correct functioning of the developed APIs
  (with bookcase of your choice)

**Evaluation methods:**
The project will be evaluated based on:

- Code quality and reusability
- Compliance with requirements
- Following best practices
- Correct use of git

---

## 📦 Features

### Investment Management

- **Creation:** Allows the creation of new investments by specifying value and annual interest rate.
- **Reading:** Enables viewing all investments, a single investment, or aggregate statistics over a defined period.
- **Update:** Allows modification of an existing investment's details (value, interest rate, confirmation date).
- **Deletion:** Enables the removal of an investment.

### Authentication

- **JWT Token:** Uses JWT tokens to authenticate users and secure resources. The token is unique and can be used only once.
- **User Roles:** Supports different user roles : read, readWrite for athl level permission.

### Statistics

- **Data Analysis:** Provides features to analyze investment data, such as performance over time .
- **Customization:** Allows users to customize statistics according to their needs, including selecting the relevant period and choosing the granularity between day, week, month, and year.

### Other Features

- **Health Check:** Monitors the server's health status.
- **API Documentation:** Provides detailed documentation of the APIs.

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

4. Create the .env files. For the project, we plan to create 2 databases, one for 'dev' and one for 'test'. To keep the two environments separate, I have prepared scripts to facilitate their creation and initial seeding.
   he main environment file is called .env, while the one for testing is .env.test. I have provided two example files for reference: .env.example and .env.test.example

5. Now let's create the 2 databases with this commands :

```sh
npm run dbdev:push
```

```sh
npm run dbtest:push
```

6. Populate them with sample records if necessary using seed data :

```sh
npm run dbdev:seed
```

```sh
npm run dbtest:seed
```

### 🤖 Running investmentAPI

#### Local Run

Use the following command to run investmentAPI with nodeman:

```sh
npm run dev
```

#### Deploy - for Production

Use the following command to build:

```sh
npm run build
```

Use the following command to run:

```sh
npm start
```

### 🧪 Tests

To execute tests, run:

```sh
npm run test
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
