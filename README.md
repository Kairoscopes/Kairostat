# Kairostat
### Medical chat/task management application written in MERN by Vikram Melkote for Kairoscopes

## About

## Demo

### Login
![login page](https://raw.githubusercontent.com/Kairoscopes/Kairostat/master/docs/login_demo.png)

### Profile
![profile page](https://raw.githubusercontent.com/Kairoscopes/Kairostat/master/docs/profile_demo.png)

## Setup

1. clone repo with git or download contents
`git clone https://github.com/Kairoscopes/Kairostat.git`

2. Install Docker and docker-compose from [here](https://www.docker.com/community-edition#/download) and [here](https://docs.docker.com/compose/install/) respectively


## Run

Start app

1. Open new terminal window
2. `docker-compose up` (add `--build` if changes have been made since last `docker-compose up`)

Stopping app containers

1. `Ctrl/Cmd + C`

Access the site as a client via browser:
[http://localhost:3000](http://localhost:3000)

API test:
[http://localhost:3001/api](http://localhost:3001/api)

Accessing db shell

1. Open new terminal window
2. `docker exec -it mongo /bin/bash`
3. `mongo`

To exit mongo shell (or docker container's bash): `exit`
