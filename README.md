🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline. Feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be comepleted by.  Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric.  Contributing to docs does NOT count as a PR to meet your weekly requirements.

# API Documentation

#### Backend delpoyed at https://delphe-backend.herokuapp.com <br>

## Getting started

To get the server running locally:


- Clone this repo
- `yarn install` to install all required dependencies
- `yarn server` to start the local server
- `yarn test` to start server using testing environment

### We deployed our backend using Node and Express

-   allows us to build a relational database using knex and sqlite.
-   allows us to create out own middleware wherever neccessary.
-   allows for easy integration with our React app.
-   allows us to create modular, RESTful APIs to call on from our React app.

## 2️⃣ Endpoints
(_selective access to endpoints is handled on Frontend_)
- [Authentication Routes](#Authentication-Routes)
- [User Routes](#User-Routes)
- [Question Routes](#Question-Routes)
- [Answer Routes](#Answer-Routes)
- [Topic Routes](#Topic-Routes)

#### Authentication Routes `/api/auth...`
| Method | Endpoint | Description  |
| ------ | ----  | -------------- |
| POST    | `/register `  | posts a new user to database 
| POST    | `/login `  | finds registered user in database 


#### User Routes `/api/users...`

| Method | Endpoint  | Description  |
| ------ | ----  | -------------- |
| GET    | `/ `| returns all users in database |
| GET    | `/:id`| returns single user info by id |
| GET    | `/:id/questions`| returns single user info by id with user's questions and answers to questions |
| DELETE | `/:id`| deletes a single user by id |
| PUT    | `/:id`| edits single user info by id  |

#### Question Routes  `/api/questions...`

| Method | Endpoint  | Description  |
| ------ | ----  | -------------- |
| GET    | `/`| returns all questions in database | 
| GET    | `/:id`| returns single question info by id with array of its answers and array of its topics |
| POST   | `/` | adds a new question to database|
| DELETE | `/:id` | deletes a single question by id |
| PUT    | `/:id` | edits a single question by id |



#### Answer Routes `/api/answers...`

| Method | Endpoint  | Description  |
| ------ | ----  | -------------- |
| GET    | `/`| returns all answers in database | 
| GET    | `/:id`| returns single answer info by id|
| POST   | `/` | adds a new answer to database|
| DELETE | `/:id` | deletes a single answer by id |
| PUT    | `/:id` | edits a single answer by id |


#### Topic Routes `/api/topics...`

| Method | Endpoint  | Description  |
| ------ | ----  | -------------- |
| GET    | `/`| returns all topics in database | 
| GET    | `/question`| returns all records in question_topics database|
| POST   | `/` | finds a topic in database|
| POST | `/question` | adds new record to question_topics table|




# Data Model



#### 2️⃣ Answers

---

```
{
    "id": 1,
    "question_id": 1,
    "user_id": 5,
    "answer": "Definitely check to see if there are any MESA (Mathematics, Engineering, Science, Achievement) programs in your area. They have a lot of resources and volunteers who come to schools for this purpose!",
    "created_at": "2019-06-05 23:18:31",
    "updated_at": "2019-06-05 23:18:31"
  }
```

#### Questions

---

```

  {
    "id": 1,
    "user_id": 1,
    "title": "After-school STEM Program",
    "question": "What are some cool online resources for 3rd graders interested in STEM?",
    "date": "June 3, 2019",
    "created_at": "2019-06-05 23:18:31",
    "updated_at": "2019-06-05 23:18:31"
  }
```

#### 2️⃣ Topics

---

```
{
    "id": 1,
    "topic": "Physics"
  }
```

#### Users

---

```
{
    "id": 1,
    "first_name": "Jane",
    "last_name": "Doe",
    "username": "janedoe",
    "password": "$2a$10$gNYRCdqdFBRq.9FNUwl6ye.TYlmPm5HZJWDon4bxjJvSzzhka7IKS",
    "email": "jane@company.com",
    "bio": "I'm a primary school counselor with a passion for advancing our youth -- especially those who are under-served. I'm hoping to start an after-school program students interested in STEM! Looking for any resources or leads to make this possible!",
    "image_url": null,
    "user_type": "asker",
    "hourly_rate": null
  }
```

## 2️⃣ Actions

🚫 This is an example, replace this with the actions that pertain to your backend

`getOrgs()` -> Returns all organizations

`getOrg(orgId)` -> Returns a single organization by ID

`addOrg(org)` -> Returns the created org

`updateOrg(orgId)` -> Update an organization by ID

`deleteOrg(orgId)` -> Delete an organization by ID
<br>
<br>
<br>
`getUsers(orgId)` -> if no param all users

`getUser(userId)` -> Returns a single user by user ID

`addUser(user object)` --> Creates a new user and returns that user. Also creates 7 availabilities defaulted to hours of operation for their organization.

`updateUser(userId, changes object)` -> Updates a single user by ID.

`deleteUser(userId)` -> deletes everything dependent on the user

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

🚫 These are just examples, replace them with the specifics for your app
    
    *  STAGING_DB - optional development db for using functionality not available in SQLite
    *  NODE_ENV - set to "development" until ready for "production"
    *  JWT_SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-*=+)') for i in range(50)])
    *  SENDGRID_API_KEY - this is generated in your Sendgrid account
    *  stripe_secret - this is generated in the Stripe dashboard
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.
