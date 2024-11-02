#How to connect to local data of man/data/db.json

#First, open terminal
#Second, cd to the folder which is the mother of the db.json file
    #Example: 
cd /Downloads/BTL-main/man/data #db.json is included in data folder

#Third, using json server to host a local server
json-server --watch db.json --port 3000

#Done!