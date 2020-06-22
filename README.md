# Basic Express API

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
  - :wrench: **config**: It's where you are going to find the configuration for installed modules and stuff like that. Example: Sequelize
  - :bar_chart: **database**: It's where you'll find code that is directly related to the database
    - :alarm_clock: **migrations**: folder that contains migrations, which are structures that help us with keeping the database version equal in every machine that runs the application
    - :seedling: **seeds**: folder that contains seeders, which are structures that automatically populate the database with fake information. It's very useful for developing, because it takes way less time to test new stuff

## And if you want to...

You have the right to use the code of this API in another application of yours. Also, I would love to
receive some suggestions :D
