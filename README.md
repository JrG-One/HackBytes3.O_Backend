# MockXpert Backend

MockXpert is an AI-powered platform designed to revolutionize interview preparation. Built during HackBytes 3.0, MockXpert offers a smart, intuitive, and interactive space where users can practice technical and behavioral interviews, analyze their resumes, and receive instant feedback — all powered by advanced AI.

The platform simulates real-world interview scenarios and provides personalized suggestions, helping candidates build confidence and improve their performance. With features like mock interviews, ATS compatibility checks, and dynamic resume evaluation, MockXpert acts as your personal interview coach — always ready, always objective, and always evolving.

## Project Structure

```
HackBytes3.0_Backend/
├── .github/              # GitHub related files
├── cache/
│   └── mailcache.js      # Email caching implementation
├── controllers/
│   ├── interviewController.js  # Interview management logic
│   ├── mailController.js       # Email functionality controller
│   ├── resetPass.js            # Password reset functionality
│   ├── resourceController.js   # Resource management
│   ├── resumeController.js     # Resume handling functionality
│   └── userController.js       # User management operations
├── db/
│   └── connect.js        # Database connection configuration
├── lib/
│   └── cloudinary.js     # Cloudinary integration for media storage
├── middleware/
│   └── auth.middleware.js # Authentication middleware
├── models/
│   ├── interview.js      # Interview data schema
│   ├── resources.js      # Resources data schema
│   └── userModel.js      # User data schema
├── node_modules/         # Project dependencies
├── routes/
│   ├── forgetPassRoute.js # Password recovery routes
│   ├── interviewRoutes.js # Interview management endpoints
│   ├── resourceRoutes.js  # Resource access endpoints
│   ├── resumeRoutes.js    # Resume management endpoints
│   ├── userRoute.js       # User management endpoints
│   └── verify.js          # Verification routes
├── utils/
│   ├── cleanMarkdown.js   # Markdown cleaning utility
│   ├── generateOtp.js     # OTP generation utilities
│   ├── generateToken.js   # JWT token generation
│   ├── openaiClient.js    # OpenAI integration
│   ├── randString.js      # Random string generation
│   └── sendEmail.js       # Email sending functionality
├── .env                  # Environment variables
├── .gitignore            # Git ignore configuration
├── package-lock.json     # Dependency lock file
├── package.json          # Project metadata and dependencies
├── README.md             # Project documentation
└── server.js             # Main application entry point
```

## Features

- **User Management**: Registration, authentication, and profile management
- **Authentication**: JWT-based secure authentication system
- **Password Recovery**: OTP-based password reset functionality
- **Interview Management**: Schedule and manage interviews
- **Resource Management**: Create, update, and retrieve resources
- **Resume Management**: Upload, process, and store user resumes
- **Email Notifications**: Automated email notifications and templates
- **OpenAI Integration**: AI-powered features using OpenAI's API
- **Cloudinary Integration**: Media file storage and management
- **Markdown Processing**: Utilities for cleaning and processing markdown content

## Technologies

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database (assumed based on structure)
- **JWT**: JSON Web Tokens for authentication
- **OpenAI API**: AI functionality integration
- **Cloudinary**: Cloud-based media management

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- MongoDB instance
- Cloudinary account
- OpenAI API access

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-repo/HackBytes3.0_Backend.git
cd HackBytes3.0_Backend
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your configuration details
```

4. Start the server
```bash
node server.js
```

## API Endpoints

- **User Routes**: Registration, login, profile management
- **Resource Routes**: CRUD operations for resources
- **Interview Routes**: Interview scheduling and management
- **Resume Routes**: Resume upload and management functionality
- **Password Reset**: Password recovery functionality

## Contributors

### Team HackOps
- Adarsh Singh
- Samarth Gangrade
- Ojaswa Varshney
- Prateek Jaiswal

---

© 2025 HackOps. All Rights Reserved.
