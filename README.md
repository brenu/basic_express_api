# Basic Express API - v1.0

## What it is

It's a simple API that handles with users stuff (like creating, deleting or updating info) and also deals with sessions by using JWT as its authentication method.

## How it's made

This API is entirely developed using Node.js and Express. Maybe I will do an AdonisJs version of it in the future, but I rather learn how to do that, at first, by using Express, once it doesn't solve the whole problem for me.

## Directory structure (Folders)

- :beginner: **root**: actually, it has nothing that I would have to explain, just keep reading :D
- :information_source: **src**: It's where you are going to find all the project code
  - :iphone: **app**: folder that contains the business rules of the application
    - :control_knobs: **controllers**: folder that contains the controllers, which are structures that manage the tables
    - :arrows_counterclockwise: **middlewares**: folder that contains the middlewares, which are functions that take request data and manipulate that in order to achieve the application goals
    - :label: **models**: folder that contains the models, which are strucutres that represents tables, but I like to see them as basic classes
    - :heavy_check_mark: **validators**: folder that contains the validators, which are specific middlewares created to verify if the request is being made in the correct way
  - :wrench: **config**: It's where you are going to find the configuration for installed modules and stuff like that. Example: Sequelize
  - :bar_chart: **database**: It's where you'll find code that is directly related to the database
    - :alarm_clock: **migrations**: folder that contains migrations, which are structures that help us with keeping the database version equal in every machine that runs the application
    - :seedling: **seeds**: folder that contains seeders, which are structures that automatically populate the database with fake information. It's very useful for developing, because it takes way less time to test new stuff

## Aww brenu, how do I run this weird thing?

First of all, you definitely need to open your terminal and run de code below. Otherwise it just won't work.

    npm install

After running npm install, you should open the **.env.example** file that's in the project's root folder, and change the variables in a way that fits your environment. For example:

    #DATABASE
    DB_DIALECT=mariadb
    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=admin
    DB_PASSWORD=potatoes123
    DB_NAME=database_api

Once the file is configured, rename it as just **.env** :D

Now everything is supposed to be fine, so use on your terminal the following code:

    npm run dev

and voilà, the system must be working :)

## And if you want to...

You have the right to use the code of this API in another application of yours. Also, I would love to
receive some suggestions :D
