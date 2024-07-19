# Scaffold Setup Instructions

This document outlines the setup instructions for both the backend and front-end components of the project. Ensure you follow the steps in sequence for a smooth setup.

## Backend Setup in WSL

### 1. Install Python 3.12.4
Ensure Python 3.12.4 is installed in your WSL environment. Download it from the [official Python website](https://www.python.org/downloads/release/python-3124/).

### 2. Set Up PYTHONPATH
Add the following line to your `.bashrc` or `.zshrc` file to set the `PYTHONPATH` environment variable:
export PYTHONPATH="/path/to/scaffold-api:${PYTHONPATH}"

### 3. Configure Environment Variables
Create a `.env` file in your scaffold-api with the necessary configurations. Reference sample.env to see what variables you need to configure

### 4. Start Docker Compose
In a separate terminal, launch Docker Compose to set up your containers:
docker-compose up

### 5. Run Setup
Navigate to your project directory and run the setup command to prepare your development environment:
make setup

### 5. Run Server
Once the setup is completed use make run to start the server:
make run


## Backend Setup on Windows


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

