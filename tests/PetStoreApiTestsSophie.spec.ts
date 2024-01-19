import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";
import { Pet } from "../api/InterfacesPetStore";

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
  // Perform a request to the endpoint
  const response = await request.get("https://petstore.swagger.io/v2/pet/1412");

  // Parse the response body as JSON
  const responseBody: Pet = await response.json();

  // Validate the response against the TypeScript interface
  expect(responseBody).toStrictEqual({
    id: expect.any(Number),
    category: {
      id: expect.any(Number),
      name: expect.any(String),
    },
    name: expect.any(String),
    photoUrls: expect.any(Array),
    tags: expect.any(Array),
    status: expect.any(String),
  });

  // Check if all expected fields are present in the response
  expect(responseBody.id).toBe(1412);
  expect(responseBody.category.id).toBe(1412);
  expect(responseBody.category.name).toBe("Tony");

  // Verify that data types are correct (additional checks can be added based on the schema)
  expect(typeof responseBody.id).toBe("number");
  expect(typeof responseBody.category.id).toBe("number");
  expect(typeof responseBody.category.name).toBe("string");
  expect(typeof responseBody.name).toBe("string");
  expect(Array.isArray(responseBody.photoUrls)).toBe(true);
  expect(Array.isArray(responseBody.tags)).toBe(true);
  expect(typeof responseBody.status).toBe("string");

  // Additional tests for optional or conditional fields can be added as needed

  // Check the status code
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
