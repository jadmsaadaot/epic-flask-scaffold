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

## Step 1: Download the Latest Python Version

1. Visit the official Python website: [Python Downloads](https://www.python.org/downloads/)
2. Download and install the latest version of Python for your operating system.


## Step 4: Set Environment Variables

1. Set the `FLASK_APP` and `FLASK_ENV` environment variables:
    - set FLASK_APP=app.py 
      set FLASK_ENV=development
      
2. Configure `PYTHONPATH` to your project's folder location up to `scaffold-api/src`:
    - set PYTHONPATH=path\to\scaffold-api\src &&    PYTHONPATH=path\to\scaffold-api

## Step 2: Start Docker

1. Open a terminal.
2. Navigate to the `scaffold-api` directory:
    cd scaffold-api

3. Run the following command to start the services using Docker Compose:
    docker-compose up

## Step 3: Set Up `scaffold-api`

1. Open a separate terminal.

2. Navigate to the `` directory:
    cd scaffold-api

3. Create a virtual environment. Refer to the official Python documentation on how to create a virtual environment: [Python venv](https://docs.python.org/3/library/venv.html).
    python -m venv venv

4. Activate the virtual environment:
    - venv\Scripts\activate

5. Install the required Python packages from both `dev.txt` and `prod.txt` requirements files:
    python -m pip install -r path/to/requirements/dev.txt
    python -m pip install -r path/to/requirements/prod.txt

6. Run your Flask app using the Flask CLI:
    - python -m flask run -p 5000

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

