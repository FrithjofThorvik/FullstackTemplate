# Fullstack Template

## Setup

### Step 1 (Clone Project)

Clone the project to your local computer

<pre>
  git clone https://github.com/FrithjofThorvik/FullstackTemplate.git
</pre>

### Step 2 (GitHub)

Create & connect to a new GitHub repository

<pre>
  rm -rf .git
  git init
  git remote add origin [GitHub Link]
  git add .
  git commit -m "First commit"
</pre>

### Step (Heroku)

Create a new project in Heroku
Choose GitHub as Deployment Method and connect to your GitHub account
Connect the Heroku project to your repository by entering its name
Enable automatic deployments to master branch

### Step (MySQL)

Create a MySQL database in Heroku
Head to resources and install ClearDB MySQL
Connect it to your Heroku appplication
Head to settings -> Reveal Config Vars -> copy CLEARDB_DATABASE_URL

mysql://[username]:[password]@[host]/[database]?reconnect=true
Insert these details into server -> configs -> replace all values
Use MySQLWorkbench or another software to view database data

### Step (?)
