🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline. Feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be comepleted by.  Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric.  Contributing to docs does NOT count as a PR to meet your weekly requirements.

# API Documentation

#### 1️⃣ Backend delpoyed at https://delphe-backend.herokuapp.com <br>

## 1️⃣ Getting started

To get the server running locally:


- Clone this repo
- **yarn install** to install all required dependencies
- **yarn server** to start the local server
- **yarn test** to start server using testing environment

### We deployed our backend using Node and Express

-   allows us to build a relational database using knex and sqlite.
-   allows us to create out own middleware wherever neccessary.
-   allows for easy integration with our React app.
-   allows us to create verry custom endpoints to call on from out React app.

## 2️⃣ Endpoints


#### Answers Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/answers         ` | all users      | Returns all of the answers that exist.       |
| POST   | `/api/answers         ` | experts        | posts to the answer table                    |
| PUT    | `/api/answers/:id     ` | experts        | edits existing answer .                      |
| DELETE | `/api/delete/:id      ` | experts        | Delete an answer.                            |

#### Questions Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| GET    | `/api/questions`        | all users           | Returns all of the question data that exists       |
| GET    | `/api/questions/:id`    | user                | Returns all question data for the user             |
| POST   | `/api/questions` .      | user                | Posts a new question to the db                     |
| PUT    | `/api/questions/:id     | owners of question  | user can edit the question                         |
| DELETE | `/api/questions/:id`    | owners of question  | user can delete the question                       |


#### Topics Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/topics          ` | all users      | Returns all of the topics                    |
| POST   | `/api/topics`           | all users      | Posts a new topic                            |
| POST   | `/api/topics/question`  | owners         | gets topics by question                      |
| POST   | `/api/topics/expert`    | owners         | gets topics by expert                        |

#### User Routes

| Method | Endpoint                 | Access Control      | Description                                        |
| ------ | -----------------------  | ------------------- | -------------------------------------------------- |
| GET    | `/api/users    `         | all users           | returns all user info                              |
| GET    | `/api/users/:id          | all users           | returns user info by id                            |
| GET    | `/api/users/:id/questions| owners, supervisors | returns questions by user id                       |
| DELETE | `/api/users/:id `        | none                | delete a user by id                                |
| POST   | `/api/users              | user                | creates a new user                                 |
| PUT    | `/api/users/:id          | user                | edits user info                                    |
| DELETE | `/api/users/:id          | user                | delete user info                                   |


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
