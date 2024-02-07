# Sprint 17 - NodeJs and the Backend

## Topics covered
1. Intro to the backend
   1. Basic API security
2. Intro to NodeJs & debugging Node
3. Basic Node Server
4. Full Stack JS with React & a Node backend
5. Intro to AWS & SST

## Capstone
1. Introduction & begin phase 1

## Projects
1. Basic information site <- Don't focus on styling, have a simple html page with some text in an h1 that shows you've figured out how to use server side routing
2. Full stack JS -> React & Node contact form


## Content breakdown

1. Capstone overview + Phase 1
   1. Phase 1 deliverables -> at least 2 project ideas
   2. Phase 1 reviews conducted Feb 12th -> Schedule a call with Andrew now to review your project.
2. What is the backend?
  - The server. This is the computer that receives requests.
  - The app. This is the application running on the server that listens for requests, retrieves information from the database, and sends a response.
  - The database. Databases are used to organize and persist data.

### Tuesday 2/6
1. Updates
   1. Graduation date (Sometime end of May)
   2. Capstone -> Pushed out timeline, phase two broken up into 2 phases
      1. Additional week to come up with 2-3 ideas
      2. Schedule Phase 1 reviews for the week of the 19th
      3. Possible opportunity for the in person cohort to jump in and help as their capstone. TBD but will know for sure by March 17th
   3. Curriculum - Still needs to be fully planned out | [Syllabus](https://docs.google.com/document/d/1VGt82jyqUXZxffQrXUKWJbcR38IPrcefJFpxdcosUJg)
      1. Sprint 18 - Additional Week on DBs 
         1. SQL (Postgres & MySQL), ORMs, AWS RDS(maybe)
      2. Sprint 19 - Express
         1. Mini message board
      3. Sprint 20 - Authentication & API basics
         1. Project: Members only message board
      4. Sprint 21: Fullstack Frameworks & Websockets
         1. Project: Realtime tic-tac-toe
      5. Sprint 22: Devops & the cloud 
   4. TBD - Career support 
      1. Will be working with Karin and Morgan to put this in place during capstone phase
2. Tonight
   1. NodeJS
      1. What is node: ASync event driven javascript runtime
      2. Running files in node
      3. Debugging node
      4. Developing in node -> Nodemon
      5. Working with files
   2. NodeJS Server
      1. Basic node server
      2. Serving "static" content
      3. ENVs -> Keeping your secrets secret
3. Thursday
   1. Deploy your Server
   2. AWS - Cloud development tools
      1. EC2 - [deploy to ec2](https://bhavan.dev/blog/how-to-deploy-node-js-application-to-aws-ec2-a-step-by-step-guide?trk=article-ssr-frontend-pulse_little-text-block) & [securing your .pem file](https://stackoverflow.com/questions/8193768/unprotected-private-key-file-error-using-ssh-into-amazon-ec2-instance-aws)

Resources: 

1. Setting up AWS CLI w/ IAM role: https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-user.html
2. Generating an SSH key on your EC2 https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=linux