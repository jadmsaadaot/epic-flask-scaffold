# Scaffold Setup Instructions

This document outlines the setup instructions for both the backend and front-end components of the project. Ensure you follow the steps in sequence for a smooth setup.

## Backend Setup in WSL

### 1. Install Python 3.12.4
Ensure Python 3.12.4 is installed in your WSL environment. Download it from the [official Python website](https://www.python.org/downloads/release/python-3124/).

### 2. Set Up PYTHONPATH
Add the following line to your `.bashrc` or `.zshrc` file to set the `PYTHONPATH` environment variable:
export PYTHONPATH="/path/to/scaffold-api:${PYTHONPATH}"

### 3. Configure Environment Variables
Create a `.env` file in your scaffold-api with the necessary configurations. Replace placeholder values with actual secret keys where appropriate:
```
FLASK_ENV=development
FLASK_APP=wsgi.py

# Local DB variables
DATABASE_USERNAME=scaffold
DATABASE_PASSWORD=scaffold
DATABASE_NAME=scaffold
DATABASE_HOST=localhost
DATABASE_PORT=54332

DATABASE_TEST_USERNAME=scaffold
DATABASE_TEST_PASSWORD=scaffold
DATABASE_TEST_NAME=scaffold
DATABASE_TEST_HOST=localhost
DATABASE_TEST_PORT=5432

# JWT OIDC Configuration
JWT_OIDC_TEST_ISSUER="http://localhost:8081/auth/realms/demo"
JWT_OIDC_TEST_WELL_KNOWN_CONFIG="http://localhost:8081/auth/realms/demo/.well-known/openid-configuration"
JWT_OIDC_TEST_ALGORITHMS="RS256"
JWT_OIDC_TEST_AUDIENCE="scaffold-web"
JWT_OIDC_TEST_CLIENT_SECRET="sample-client-secret"
JWT_OIDC_TEST_JWKS_CACHE_TIMEOUT="6000"

JWT_OIDC_WELL_KNOWN_CONFIG="https://localhost:8080/auth/realms/scaffold/.well-known/openid-configuration"
JWT_OIDC_AUDIENCE="account"
JWT_OIDC_ISSUER="https://localhost:8080/auth/realms/scaffold"
JWT_OIDC_ALGORITHMS="RS256"
JWT_OIDC_JWKS_URI="https://localhost:8080/auth/realms/scaffold/protocol/openid-connect/certs"
JWT_OIDC_CACHING_ENABLED=True
JWT_OIDC_JWKS_CACHE_TIMEOUT=3000000

SITE_URL="http://localhost:3000"
KEYCLOAK_BASE_URL="https://localhost:8080"
KEYCLOAK_URL_REALM="scaffold"

SCAFFOLD_ADMIN_CLIENT_ID="scaffold-admin"
SCAFFOLD_ADMIN_CLIENT_SECRET="sample-admin-client-secret"

CORS_ORIGIN="http://192.168.0.145:8000,http://192.168.0.145:3000,http://localhost:8000,http://localhost:3000,http://localhost:5000"

S3_BUCKET="sample-bucket-name"
S3_ACCESS_KEY_ID="scaffold-admin"
S3_SECRET_ACCESS_KEY="sample-s3-secret"
S3_HOST=""
S3_REGION=""
S3_SERVICE=""
```

### 4. Start Docker Compose
In a separate terminal, launch Docker Compose to set up your containers:
docker-compose up

### 5. Run Setup
Navigate to your project directory and run the setup command to prepare your development environment:
make setup

## Front End Setup

### 1. Navigate to Front End Directory
Change to the front-end directory:
cd scaffold-web

### 2. Install Dependencies
Install necessary npm packages:
npm install

### 3. Run Development Server
Launch the development server:
npm run dev

