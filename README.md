# Shortly - URL Shortener Service

<p align="center">
  <img alt="Light" src="https://github.com/yinonozery/shortly/assets/74764366/a52997ef-bc78-443c-b407-cf265b800fdd" height="500px">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark" src="https://github.com/yinonozery/shortly/assets/74764366/7581ecff-2c59-497f-8fb8-2b7ca17f8290" width="45%">
</p>

---

A simple and efficient URL shortener service built using React for the frontend and Java Spring for the backend. The service allows users to shorten long URLs, making them easier to share, and provides useful analytics such as click tracking. URLs are stored in a PostgreSQL database and have a validity period of one year.

## Features

- **URL Shortening**: Easily shorten long URLs to more manageable and shareable formats.
- **Click Tracking**: Keep track of how many times each shortened URL is clicked.
- **Expiration**: Shortened URLs are removed after one year for better data management.
- **User-friendly Interface**: The intuitive frontend interface is designed with custom CSS for a seamless user experience.
- **Database Integration**: Utilizes PostgreSQL to store and manage shortened URLs and their related data.
- **REST API**: The backend provides a RESTful API for creating, retrieving, and managing shortened URLs.
- **Customizable**: You can easily customize the project to suit your branding and requirements.

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Java Spring
- **Database**: PostgreSQL

## Getting Started

These instructions will help you set up and deploy the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm for the frontend
- Java Development Kit (JDK)
- Java Spring Boot
- PostgreSQL database

### Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/yinonozery/shortly.git
   ```
   
2. **Frontend Setup**
    ```
    cd url-shortener/frontend
    npm install
    npm start
    ```
    The frontend should now be running on http://localhost:3000.
   
4. **Backend Setup:**
    ```
    Soon
    ```

5. **Database Setup:**
   
   Set up a PostgreSQL database and update the database configuration in `application.properties`.

