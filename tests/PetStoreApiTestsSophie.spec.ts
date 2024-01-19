import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

test("Exercise 1: Authentication", async ({ request }) => {
  //Send a POST request to /api/login with valid credentials and verify that you get a successful response.
  //Use the authentication token received from the login response to access the protected endpoint /api/protected.
  //Verify that the protected resource is accessible with the authentication token.
  //Test with invalid credentials and ensure that the API returns the appropriate error response.
});

test("Exercise 2: Query Parameters", async ({ request }) => {
  //Test different values for query parameters (e.g., change the page number, include/exclude optional parameters).
  //Verify that the response reflects the changes based on the query parameters.
  //Test edge cases, such as using large page numbers or invalid values.
  const pet = {
    id: 0,
    category: {
      id: 0,
      name: "string",
    },
    name: "doggie",
    photoUrls: ["string"],
    tags: [
      {
        id: 0,
        name: "string",
      },
    ],
    status: "available",
  };
  const response = await request.post(`https://petstore.swagger.io/v2/pet`, {
    data: pet,
  });
  expect(response.ok()).toBeTruthy();
});

test("Exercise 3: Error Handling", async ({ request }) => {
  const response = await request.get(
    "https://petstore.swagger.io/v2/api/nonexistent"
  );
  console.log(response);
  expect(response.status()).toBe(404);
});

test("Exercise 4: File Upload", async ({ request }) => {
    const PETID = 12321;
   
    const fileName = path.resolve("/Users/sophieonbelet/BhaiSopApi-1/petstorefile/", "PicturePet.JPG"); // Give the complete path starts from User, here in directory("/petstorefile/") without file name.
    const myFile = fs.readFileSync(fileName);
 
    const apiResponse = await request.post(`https://petstore.swagger.io/v2/pet/${PETID}/uploadImage`,{
    headers:{
        Accept: "*/*",
        ContentType: "multipart/form-data",
    },
    multipart: {
        file: {
            name: 'PicturePet.jpg',
            mimeType: 'image/jpg',
            buffer: myFile,
          }
      }
    });
    const body = JSON.parse(await apiResponse.text());
    await console.log("Show me request : "+apiResponse.json());
    console.log(apiResponse.text());
    expect((await apiResponse).status()).toBe(200);
    console.log(body);

});

test("Exercise 5: Response Validation", async ({ request }) => {
    //Define a JSON schema for the expected response of an endpoint (e.g., user details).
  const pet = {
    id: 1412,
    category: {
      id: 1412,
      name: "Tony"
    }}
    //Perform a request to the endpoint and validate the response against the defined schema.

    const response = await request.get(
    "https://petstore.swagger.io/v2/api/pet"
  );
    //Check if all expected fields are present in the response.
  console.log(response);
      //Verify that data types are correct (e.g., numeric fields are numbers, date fields are in the correct format).
    //Test scenarios where the response may contain optional or conditional fields.
  expect(response.status()).toBe(200);
});

test("Exercise 6: Performance Testing", async ({ request }) => {
    //Send a series of requests in quick succession to test the API’s responsiveness.
    //Measure and analyze the response times for different endpoints.
    //Test with varying payload sizes to assess how the API handles larger amounts of data.
    //Use tools like Apache JMeter or Locust to simulate multiple users accessing the API concurrently.
    //Monitor the API’s response time, throughput, and error rates during performance testing.
    //Remember to use appropriate tools and techniques to accomplish these exercises. 
    //Adjust the parameters, payloads, and scenarios -   based on your understanding of the API’s documentation and behavior.
});
