# Introduction



## Directories:


config - setting up all the configurations, like we set mongodb \
routes - All paths - home, profile etc... \
models - schema \
views - different html folders 

## Interploation

console.log("Error"); \
Now we will use interpolation method to print
template literal strings ``\
console.log(`Error in server running  - ${err}`);

## Getting rid of running the same nodemon index.js command

Add it in scripts of package.json file\
 "start": "nodemon index.js",


## Adding Git

git init \
(Add node_modules/ in .gitignore file)
git status \
git add . \
git commit -m "" \
git push -u origin master

## Routers 
create index.js in routes folder\
it will be entry point for all routes\
in step 1 -> my app\index.js file will go to routes folder and there, it will search for existing different routes\
in step 2- router will search for particular controllers