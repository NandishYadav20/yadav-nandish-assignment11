# Coding Assignment 11 – Docker File

**Course:** WEBD-3012 (287541) Business Systems Build and Testing
**Student:** Nandish Yadav

## Overview

This project is a React application (created with Create React App) that displays an `<h1>` tag with the text **"Codin 1"**. The application is containerized with Docker and runs on **localhost:7775**.

## What's in this repo

- `src/App.js` – React component that renders the `<h1>Codin 1</h1>` heading
- `Dockerfile` – Docker configuration used to build and run the app in a container
- `package.json` – project dependencies and scripts
- `.dockerignore` – files excluded from the Docker build context

## Step 1: Create the React App

The project was created using Create React App:

```bash
npx create-react-app yadav-nandish-site
```

The `src/App.js` file was then edited so the app renders:

```jsx
function App() {
  return (
    <div className="App">
      <h1>Codin 1</h1>
    </div>
  );
}
```

## Step 2: Write the Dockerfile

The `Dockerfile` in the root of this project contains:

```dockerfile
FROM node:20-alpine

WORKDIR /Yadav_Nandish_site

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

What each line does:

- `FROM node:20-alpine` – uses a lightweight Node.js base image
- `WORKDIR /Yadav_Nandish_site` – sets/creates the working directory inside the container where the site files are stored
- `COPY package.json package-lock.json ./` – copies the dependency files first so Docker can cache the `npm install` layer
- `RUN npm install` – installs the project dependencies
- `COPY . .` – copies the rest of the application source code into the working directory
- `EXPOSE 3000` – documents that the app listens on port 3000 inside the container (the default Create React App dev server port)
- `CMD ["npm", "start"]` – starts the React development server when the container runs

## Step 3: Build the Docker Image

From the root of this project (where the `Dockerfile` is located), run:

```bash
docker build -t yadav-nandish-assignment11 .
```

This builds a Docker image named `yadav-nandish-assignment11`.

## Step 4: Run the Docker Container

```bash
docker run -d -p 7775:3000 --name Yadav_Nandish_coding_assignment11 yadav-nandish-assignment11
```

- `-p 7775:3000` maps port 3000 inside the container (where the app runs) to port 7775 on the host machine, as required by the assignment
- `--name Yadav_Nandish_coding_assignment11` names the container as required by the assignment

## Step 5: View the Application

Open a browser and go to:

```
http://localhost:7775
```

The page displays an `<h1>` tag with the text **"Codin 1"**.

## Stopping the Container

```bash
docker stop Yadav_Nandish_coding_assignment11
docker rm Yadav_Nandish_coding_assignment11
```

## Useful Docker Commands

| Command | Purpose |
|---|---|
| `docker ps` | List running containers |
| `docker images` | List Docker images |
| `docker logs Yadav_Nandish_coding_assignment11` | View container logs |
| `docker exec -it Yadav_Nandish_coding_assignment11 sh` | Open a shell inside the running container |
