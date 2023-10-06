# Part 2 (Written Questions)

## Question 2.1 : Explaining my decision
## Code Structure Explanation

I structured this code using the Express.js framework. Here are some of the reasons for which I structured my code this way:

1. **Modularity**: I divided this code into separate sections for different functionalities. The required modules and dependencies are imported at the beginning of the code, and each section handles a specific task, such as user registration and login, book operations, authentication middleware, etc. This modular structure improves code organization, readability, and maintainability.

2. **Routing**: I defined various HTTP routes using Express's routing capabilities. The app handles different HTTP methods (GET, POST, PUT, DELETE) and routes requests to the corresponding route handlers. For example, the `/register` route handles user registration, the `/login` route handles user login, and the `/books` routes handle book-related operations.

3. **User Authentication**: I included user registration and login functionality. When a user registers, their password is hashed using bcrypt for security. During login, the provided username and password are checked against the stored user information, and if valid, a JSON Web Token (JWT) is generated and sent back to the client. This ensures secure user authentication.

4. **Book Operations**: The code provides CRUD (Create, Read, Update, Delete) operations for books. It includes routes for retrieving all books, creating a new book, retrieving a specific book by ID, updating a specific book, and deleting a specific book. These routes are protected using the `authenticateToken` middleware function, which verifies the JWT token before allowing access to the routes.

Differences in a Production Environment:

In a production environment, I would make the following improvements:

1. **Environment Configuration**: Instead of hardcoding sensitive information like JWT secret and database credentials like I did, it's recommended to use environment variables. The code can be configured to read these variables from a `.env` file or from the server environment, ensuring better security and flexibility.

2. **Database Integration**: For a production-ready application, it's common to use a database to store user information and book data. The code can be modified to integrate with a database system like MongoDB, MySQL, or PostgreSQL. This allows for efficient data storage, retrieval, and management.

3. **Error Handling and Validation**: The code can be enhanced with comprehensive error handling and input validation mechanisms. This ensures that proper error messages are returned to the client in case of failures, and input data is validated to prevent malicious or incorrect data from being processed.

4. **Logging and Monitoring**: Logging is essential in a production environment for debugging, monitoring, and performance analysis. Incorporating a logging library like Winston or Bunyan can help capture logs for different events and errors. Additionally, monitoring tools like Prometheus or New Relic can be used to track server performance, response times, and resource usage.

5. **Security Enhancements**: In a production environment, it's crucial to implement additional security measures. This may include enabling HTTPS for secure communication, implementing rate limiting to protect against brute-force attacks, and adding input sanitization to prevent common security vulnerabilities like SQL injection or cross-site scripting (XSS).

6. **Caching and Performance Optimization**: Depending on the requirements, caching mechanisms like Redis or Memcached can be used to improve performance by caching frequently accessed data. Additionally, performance optimization techniques such as compressing responses, using CDNs (Content Delivery Networks), or implementing pagination can be employed to enhance the application's speed and scalability.

These some considerations which I think are necessary for improving the code for a production environment.


## Question 2.2 : Code Review

## Issues and proposed improvements in the Code

1. **Missing input validation:** input data should be validated in order to prevent unexpected behavior or security vulnerabilities.

2. **Lack of error handling:**  errors should be handled during the `db.addUser(user)` operation to avoid unhandled exceptions and crashes.

3. **Inconsistent response status codes:** We should use consistent status code (e.g., 201 - Created) for successful user addition and provide meaningful response messages.

4. **Lack of error messages for clients:** The code should be modified to provide descriptive error messages to help clients understand issues.

5. **Inefficient database call:** The code can be modified to use asynchronous operations to avoid blocking the event loop and improve scalability.

6. **Code organization and readability:** We can improve the formatting and organization of that code  for better readability and maintainability.

I think by addressing these issues and implementing the proposed improvements, the code can become more robust, maintainable, and client-friendly.


## Issues and Improvements in the Code

1. **Missing input validation:** Validate input data to prevent unexpected behavior or security vulnerabilities.

2. **Lack of error handling:** Handle errors during the `db.addUser(user)` operation to avoid unhandled exceptions and crashes.

3. **Inconsistent response status codes:** Use a consistent status code (e.g., 201 - Created) for successful user addition and provide meaningful response messages.

4. **Lack of error messages for clients:** Provide descriptive error messages to help clients understand issues.

5. **Inefficient database call:** Use asynchronous operations to avoid blocking the event loop and improve scalability.

6. **Code organization and readability:** Improve code formatting and organization for better readability and maintainability.

By addressing these issues and implementing the proposed improvements, the code can become more robust, maintainable, and client-friendly.

# Part 3 (Time Management Task)

## Task Prioritization and Timeline

## Tasks to be completed

1. Fix a critical bug in the login module. (Priority: High, Urgency: Immediate)
2. Document the API you developed in Task 1. (Priority: Medium, Urgency: Moderate)
3. Optimize the database queries in an existing module. (Priority: Medium, Urgency: Moderate)
4. Develop a new feature that has been highly requested by clients. (Priority: Low, Urgency: Flexible)

## Timeline

I would prioritize the tasks as follows
### Day 1

- **Fix a critical bug in the login module:**
  - I'll investigate and reproduce the bug.
  - Analyze the codebase in order to identify the possible causes of the bug.
  - Implement necessary fixes and thoroughly test the changes.

### Day 2

- **Document the API developed in Task 1:**
  - Create clear and concise documentation, including endpoints, request/response formats, and authentication requirements.
  - Review and revise the documentation for accuracy and clarity.
  - Allocate time for peer review if applicable.
- **Optimize the database queries in the existing module:**
  - Identify the queries that can be optimized.
  - Evaluate potential improvements and implement the optimized queries.
  - Perform testing to ensure the changes don't introduce regressions and measure performance improvements.

### Day 3

- **Continue optimizing database queries if additional time is needed.**
- **Perform thorough testing to ensure the changes don't introduce any regressions.**
- **Conduct performance testing to measure the impact of query optimizations.**
- **Begin development of the new feature highly requested by clients:**
  - Analyze the requirements and design the feature's implementation.
  - Start working on the initial implementation of the feature.

### Day 4

- **Continue development of the new feature:**
  - Implement the feature's functionality according to the requirements.
  - Test the feature thoroughly to ensure it meets the expected behavior.
  - Address any issues or bugs that arise during testing.

### Day 5

- **Finalizing the development and testing of the new feature.**
- **Perform comprehensive regression testing to ensure the overall system stability.**
- **Conducting a final review of all my tasks, making any necessary adjustments, and ensuring completion of documentation and optimization tasks.**

## Reasoning

The 5 days timeline I created focuses on addressing critical issues first and allocating enough time for each task:

- I made sure the  critical bug in the login module is prioritized and resolved on Day 1 in order to ensure system stability and security.
- I placed API documentation and database query optimization concurrently on Day 2 and Day 3 in order to save time.
- Development of the new feature follows, allowing two days for its implementation, testing, and bug fixing.
- The final day is dedicated to completing pending tasks, conducting regression testing, and ensuring the overall completion of all planned activities.

This plan I created is to ensure that high-priority tasks are accomplished within the given timeframe while allowing for efficient task management and timely resolution of critical issues.

