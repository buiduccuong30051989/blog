# Strapi application

A quick description of your strapi application

# Follow instruction here
This blog is built in 16/1/2021 with current follow instruction below
https://strapi.io/documentation/developer-docs/latest/deployment/heroku.html#heroku-postgres

There are one things i need to deal with:
Deploy from my github repo https://github.com/buiduccuong30051989/blog
that contain two folder for backend & frontend
So, default heroku only deploy from the root, no sub folder can' choose.
I need to deploy strapi on backend folder.
To deal with this i follow: https://stackoverflow.com/a/53221996

Notice: remember ignore yarn.lock because of heroku issue
Stop building stuck https://stackoverflow.com/a/54312389