## Bike Rental Service

A seamless bike rental system where users could easily rent bikes online. The system can handle user registrations, bike availability, and booking management efficiently.

**Live URL:** https://apollo-assignment-3-one.vercel.app/

### Features:

-   **User Authentication**: Secure signUp and login using JWT.
-   **User Authorization**: Authorization for admin, user
-   **Bike Rentals**: User Can Book A Bike for Rental and return it digitally
-   **Bike Management**: Admin's can create, update, delete Bike Data

### Technology Stack:

-   Express.js
-   TypeScript
-   Mongoose
-   Zod
-   JWT

### Prerequisites

-   Node 18.12.0
-   npm 8.19.2
-   MongoDB
-   [Prettier ESLint](vs-code-prettier-eslint)
-   ....other prerequisites

### Installation:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/coder7475/apollo-assignment-3.git
    ```

2.  **Navigate to the Project Directory:**

    ```bash
    cd apollo-assignment-3
    ```

3.  **Setup your .env file:**

    ```plaintext
       ENV='development'
       PORT=7475
       MONGODB_URI=<Your_mongodb_database_url>
       SECRET_KEY=2fc90105b3fe68b5274624cbe66c25ad0819b94e6f311fd1a21692a51e056573f74f>
       EXPIRES_IN=1d
       REFRESH_KEY=b2488c003d4807937920644b34095ef99af11ec4aec9d663accfb8aa6316fe93721>
       REFRESH_EXPIRES=100d

    ```

4.  **Install Dependencies:**

    ```bash
    npm install
    ```

5.  **Start the Server:**

    ```bash
    npm run dev
    ```

### Usage:

Visit http://localhost:7475 to see the application in action.

### Author(s):

-   [Robiul Hossain] ([coder7475](http://github.com/coder7475))
