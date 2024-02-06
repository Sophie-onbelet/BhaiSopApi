import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";
import { Pet } from "../api/InterfacesPetStore";

test("Exercise 1: Authentication", async ({ request }) => {
  const loginResponse = await request.post('https://demoqa.com/Account/v1/Authorized', {
    data: {
      userName: 'TonyBobonie',
      password: 'Perro123!',
    },
  });

  // Check if the login request was successful
  expect(loginResponse.ok()).toBeTruthy();

  // Use the loginResponse to perform further assertions
  const responseData = await loginResponse.json();
  console.log(responseData);
});

test("Exercise 2: Query Parameters", async ({ request }) => {
  //Test different values for query parameters
  const page1 = 'https://reqres.in/api/users?page=1'
  const page2 = 'https://reqres.in/api/users?page=2'
  const pageunkown = 'https://reqres.in/api/users/23'
  const response1 = await request.get(page1)
  const response2 = await request.get(page2)
  const response3 = await request.get(pageunkown)
  //Verify that the response reflects the changes based on the query parameters
  expect(response1.status()).toBe(200)
  expect(response2.status()).toBe(200)
  expect(response3.status()).toBe(404)
  console.log(await response1.json())
  console.log(await response2.json())
  console.log(await response3.json())
});

test("Exercise 3: Error Handling", async ({ request }) => {
  //Verify that the API returns 404
  const response = await request.get(
    "https://petstore.swagger.io/v2/api/nonexistent"
  );
  console.log(response);
  expect(response.status()).toBe(404);
});

test("Exercise 4: File Upload", async ({ request }) => {
    const PETID = 12321;
   
    const fileName = path.resolve("petstorefile/", "PicturePet.JPG"); // Give the complete path starts from User, here in directory("/petstorefile/") without file name.
    const myFile = fs.readFileSync(fileName);
   // Send a POST request with a file attached 
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
    //Verify that the file is successfully uploaded
    console.log(body);

});

test("Exercise 5: Response Validation", async ({ request }) => {
  // Perform a request to the endpoint
  const response = await request.get("https://petstore.swagger.io/v2/pet/4");

  // Parse the response body as JSON
  const responseBody: Pet = await response.json();

  // Validate the response against the TypeScript interface
  // Check if all expected fields are present in the response
  expect(responseBody.id).toBe(4);
  expect(responseBody.name).toBe("Johnie");
  expect(responseBody.status).toBe("5000");

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
