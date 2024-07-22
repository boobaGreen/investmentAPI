# 💵 InvestmentAPI

## 📌 EXAM TRACK

Exercise
Specifications:
A company has decided to allow frontend-enabling bees to the public
developers to experiment with those already made bees. Bees will allow you to create and
read about investments and an API that allows you to see how many and which ones over time
investments have been made. However, before carrying out some operations they must be
authorizations via a specific API, which will assign two levels of access based on the request
Technical specifications:

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
   Investment Specifications: {
   data creation,
   confirmation of data,
   value,
   annual rate,
   id
   }
   Delivery specifications:
   The code must be delivered via a public repository on github, with the
   specifications to start in code.
   It is advisable to leave Postman (or similar) files in the repository for API testing
   Implementation Requests:

- Backend development must be implemented with Node.js and a framework
  choice(Express favorite)
- The use of Typescript is mandatory
- Data can be saved in a SQL db or in a file
- Carry out e2e tests to verify the correct functioning of the developed APIs
  (with bookcase of your choice)
  Evaluation methods:
  The project will be evaluated based on:
- Code quality and reusability
- Compliance with requirements
- Following best practices
- Correct use of git

## 💽 INSTALLATION



## 🔬 TEST

### JEST E SUPERTEST

To create the test database from the terminal in the root of the project type:

```


```

There are automated tests in jest and supertest .

To run them:

```
npm run test

```

### POSTMAN COLLECTION ON LINE (Render.com)

This collection of postman points to the service deployed online on render.com. so the base URL is: https://investmentapi.onrender.com/

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/37112030-533998d2-7f3c-41f8-9bf3-d712d13c95b8?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D37112030-533998d2-7f3c-41f8-9bf3-d712d13c95b8%26entityType%3Dcollection%26workspaceId%3D4ff310f0-17de-4e59-a39d-b71459c423ec)

### POSTMAN COLLECTION FOR LOCALHOST

This collection of postman points to the possible service deployed locally on port 8000 for example, so the base URL is: http://localhost:8000

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/37112030-38e21a9b-fe21-40f3-8273-247081bf6b9b?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D37112030-38e21a9b-fe21-40f3-8273-247081bf6b9b%26entityType%3Dcollection%26workspaceId%3D4ff310f0-17de-4e59-a39d-b71459c423ec)

As well as being reachable via the button above, the collection is also in the /doc/test/postman_v2 folder

### INSOMINA

The collection is also available in Insomnia v4 format in the doc/test/insomia_v4 folder
