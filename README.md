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


**EXERCISES INTERMEDIATE**
**Exercise 1: Authentication**
Objective: Test API endpoints that require authentication.

Steps:

- Explore the endpoints that require authentication (e.g., /api/login, /api/protected).
- Send a POST request to /api/login with valid credentials and verify that you get a successful response.
- Use the authentication token received from the login response to access the protected endpoint /api/protected.
- Verify that the protected resource is accessible with the authentication token.
- Test with invalid credentials and ensure that the API returns the appropriate error response.

**Exercise 2: Query Parameters**
Objective: Test endpoints that use query parameters.

Steps:

- Explore an endpoint that supports query parameters (e.g., /api/users?page=2).
- Test different values for query parameters (e.g., change the page number, include/exclude optional parameters).
- Verify that the response reflects the changes based on the query parameters.
- Test edge cases, such as using large page numbers or invalid values.

**Exercise 3: Error Handling**
Objective: Test how the API handles errors.

Steps:

- Intentionally send a request to a non-existing endpoint (e.g., /api/nonexistent).
- Verify that the API returns a proper 404 Not Found response.
- Send a request with invalid parameters (e.g., missing required parameters).
- Verify that the API returns the appropriate error response with a meaningful error message.
- Test rate limiting by sending requests at a high frequency and ensure the API returns the expected rate-limiting response.

**Exercise 4: File Upload**
Objective: Test file upload functionality.

Steps:

- Find an endpoint that supports file uploads (e.g., /api/users/{user_id}/avatar).
- Send a POST request with a file attached (image, text file, etc.).
- Verify that the file is successfully uploaded.
- Test with different file types and sizes.
- Attempt to upload a file with an incorrect format and verify the error response.

**Exercise 5: Response Validation**
Objective: Validate the structure and data in API responses.

Steps:

- Define a JSON schema for the expected response of an endpoint (e.g., user details).
- Perform a request to the endpoint and validate the response against the defined schema.
- Check if all expected fields are present in the response.
- Verify that data types are correct (e.g., numeric fields are numbers, date fields are in the correct format).
- Test scenarios where the response may contain optional or conditional fields.

**Exercise 6: Performance Testing**
Objective: Test the API’s performance under different scenarios.

Steps:

- Send a series of requests in quick succession to test the API’s responsiveness.
- Measure and analyze the response times for different endpoints.
- Test with varying payload sizes to assess how the API handles larger amounts of data.
- Use tools like Apache JMeter or Locust to simulate multiple users accessing the API concurrently.
- Monitor the API’s response time, throughput, and error rates during performance testing.
- Remember to use appropriate tools and techniques to accomplish these exercises. Adjust the parameters, payloads, and scenarios -   based on your understanding of the API’s documentation and behavior.
