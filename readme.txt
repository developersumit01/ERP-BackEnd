this file is created to write some important information about the application


DataBase Information :-
###############################

first of all you need to create a replica in your mongodb 
steps to create a replica
~ stop mongodb server using taskmanager
~ create a file in C drive name should be data
~ inside data file at least one file should be created name db
~ edit the config file of mongodb
~ write 
#replication:
  replication:
    repelSetName:"rs0"
save the config file

~ run command in cmd
command:- mongod --port 27017 --dbpath "C:\data\db" --bind_ip localhost 

NOTE: if replica in mongodb is not created then data will not be stored inside the database and throw an error

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

if you don't want to create any replica inside the mongodb databse then you can create a cluster in mongodb atlas database which is the cloud of mongodb