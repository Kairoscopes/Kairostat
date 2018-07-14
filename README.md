# Kairostat
### Medical chat/task management application written in MERN by Vikram Melkote for Kairoscopes

## About

## Demo

### Login
![trade simulation](https://raw.githubusercontent.com/Vikrammel/EasyTrage/master/scrumdocs/demo/bad_login_demo.gif)

## Setup

1. clone repo with git or download contents
`git clone https://github.com/Kairoscopes/Kairostat.git`

2. Install Docker and docker-compose


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
