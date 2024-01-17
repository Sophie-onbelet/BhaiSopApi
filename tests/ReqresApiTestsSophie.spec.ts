import { test, expect } from "@playwright/test";
import reqresUser from "../jsons/user.json";
import { User, CreateUser } from '../api/InterfacesReqres';

  test("Exercise 1: Retrieve a List of Users @Sophie @API", async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users');
    expect(response.ok()).toBeTruthy();

  });


  test("Exercise 2: Retrieve a Specific User @Sophie @API", async ({ request }) => {
    const response = await request.get(`https://reqres.in/api/users/2`);
    expect(response.ok()).toBeTruthy();

    const parsedResponse = await response.json();
    const myUserData: User = parsedResponse['data'];
    expect(myUserData).toEqual(reqresUser);
  });


  test("Exercise 3: Create a New User @Sophie @API", async ({ request }) => {
      const user = {
        name: "Sophie",
        job: "Queen",
      };
      const response = await request.post(`https://reqres.in/api/users`, {
        data: user,
      });
      expect(response.ok()).toBeTruthy();

    const parsedResponse = await response.json();
    const myUser: CreateUser = parsedResponse;
    expect.soft(myUser.name).toEqual(user.name);
    expect.soft(myUser.job).toEqual(user.job);
    expect.soft(myUser.id).toBeDefined();
    expect.soft(myUser.createdAt).toBeDefined();
  });


    test("Exercise 4: Retrieve a Specific User @Sophie @API", async ({ request }) => {
      const user = {
        name: "Tony",
        job: "barking",
      };
      const response = await request.put(`https://reqres.in/api/users/2`, {
        data: user,
      });
      expect(response.ok()).toBeTruthy();
    });
  

    test("Exercise 5: Delete user @Sophie @API", async ({ request }) => {
        const response = await request.delete('https://reqres.in/api/users/2')
        expect(response.status()).toBe(204)
    });
  

  test("Exercise 6: Pagination @Sophie @API", async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2')
    expect(response.status()).toBe(204)
});