import { test, expect } from '@playwright/test';
import * as ApiData from '../spec/ApiData.json'


const Name = ApiData.reqresData.name
const jobTitle = ApiData.reqresData.job

test('Retrieve a list of Users', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users') // stoaring the endpoint in response variable and sending a get request  
    expect(response.status()).toBe(200);  //Verify the status code is correct
    const users = await response.text(); //checking resonse body
    console.log(await response.json());  // logging the response text in console 
})

test('Retrieve a Specific User', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/9')
    expect(response.status()).toBe(200)
    const user = await response.text()
    expect(user).toContain('Tobias')
    console.log(await response.json())
})

test('Create a New User', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": Name,
            "job": jobTitle
        }
    })
    expect(response.status()).toBe(201)
    const user = await response.text()
    expect(user).toContain(Name)
    console.log(await response.json())
})

test('Update User Information', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/8', {
        data: {
            "name": Name,
            "job": jobTitle
        }
    })
    expect(response.status()).toBe(200)
    const user = await response.text()
    expect(user).toContain(Name)
    console.log(await response.json())
})

test('Delete a User', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/8')
    expect(response.status()).toBe(204)
})

test('Pagination', async ({ request }) => {
    const page1 = 'https://reqres.in/api/users?page=1'
    const page2 = 'https://reqres.in/api/users?page=2'
    const response1 = await request.get(page1)
    const response2 = await request.get(page2)
    expect(response1.status()).toBe(200)
    expect(response2.status()).toBe(200)
    console.log(await response1.json())
    console.log(await response2.json())
})



