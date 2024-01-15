# BhaiSopApi
API testing practising project with Playwright 

To start working with this project run
- npm i playwright
- npm install @faker-js/faker playwright

Create your own branch and work on the exercises below.

**Exercise 1: Retrieve a List of Users**
Objective: Make a GET request to retrieve a list of users.

Steps:

- Use the endpoint: https://reqres.in/api/users.
- Perform a GET request to retrieve the list of users.
- Verify that the response status code is 200.
- Check the response body for the presence of user data.

**Exercise 2: Retrieve a Specific User**
Objective: Retrieve details for a specific user.

Steps:

- Use the endpoint: https://reqres.in/api/users/{user_id}, replace {user_id} with an existing user ID (e.g., 2).
- Perform a GET request to retrieve the details of the specific user.
- Verify that the response status code is 200.
- Check the response body for the details of the specified user.

**Exercise 3: Create a New User**
Objective: Send a POST request to create a new user.

Steps:

- Use the endpoint: https://reqres.in/api/users.
- Send a POST request with a JSON payload containing user information (e.g., name, job).
- Verify that the response status code is 201 (created).
- Check the response body for the details of the newly created user.

**Exercise 4: Update User Information**
Objective: Send a PUT request to update user information.

Steps:

- Choose a user ID (e.g., 5) whose information you want to update.
- Use the endpoint: https://reqres.in/api/users/{user_id}, replace {user_id} with the chosen user ID.
- Send a PUT request with a JSON payload containing the updated user information.
- Verify that the response status code is 200.
- Check the response body for the updated user details.

**Exercise 5: Delete a User**
Objective: Send a DELETE request to delete a user.

Steps:

- Choose a user ID (e.g., 6) that you want to delete.
- Use the endpoint: https://reqres.in/api/users/{user_id}, replace {user_id} with the chosen user ID.
- Send a DELETE request to delete the user.
- Verify that the response status code is 204 (no content).

**Exercise 6: Pagination**
Objective: Test pagination by retrieving users with different page numbers.

Steps:

- Use the endpoint: https://reqres.in/api/users?page={page_number}, replace {page_number} with different page numbers (e.g., 1, 2, 3).
- Perform a GET request for each page.
- Verify that the response status code is 200.
- Check the response body for the list of users on each page.
