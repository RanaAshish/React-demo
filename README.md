# React-demo
Create a React app that displays a list of users obtained from a public API. The app should have two pages:
Page 1:
- A list of users obtained from the API should be displayed.
- Each user should be displayed with their name, username, email, and phone number.
- The users should be sorted alphabetically by name.
- Clicking on a user should navigate to Screen 2.
Page 2:
- The details of the selected user should be displayed, including their name, username, email, phone number, and address (street, suite, city, zip code).
- Users should be able to mark the user as "favorite" by clicking a button.
- Users should be able to view a list of their favorite users by clicking a button in the app bar.
- Users should be able to remove a user from their favorites list by clicking a button next to the user's name.
Data persistence:
- Users' favorite users should be stored in local storage.
- The app should maintain the state of the favorites list across app sessions.
Networking:
- The list of users should be obtained by making a GET request to the following URL:(https://jsonplaceholder.typicode.com/users)
- The user's address should be obtained by making a GET request to the following URL: (https://jsonplaceholder.typicode.com/users/{userId}/address)
- Replace "{userId}" with the user's ID obtained from the API response for each user.
Submission Guidelines:
Please submit your code as a GitHub repository with clear instructions on how to run the project locally. Use some CSS framework to stylize the app.
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/users/
