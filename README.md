# TestJavan

This code using sequelize for the database, before run the code this several command to prepare the database: 
    1. npm i
    2. sequelize db:create
    3. sequelize db:migrate
    4. sequelize db:seed:all


Routing
    1. Show all data in database
        GET http://localhost:3000/family

    2. Show a data of family member with total price of the assets
        GET http://localhost:3000/family/price/:id

    3. Add family member data
        POST http://localhost:3000/
        
        req.body : 
            {
                "name": "Rani",
                "father": "Bani",
                "mother": "",
                "gender": "female",
                "assets": []
            }
    
    4. Edit Family member data
        PUT http://localhost:3000/family/:id

        req.body : 
            {
                "name": "Rani",
                "father": "Bani",
                "mother": "",
                "gender": "female",
                "assets": ["iPhone X"]
            }
    
    5. Delete Family member data
        DELETE http://localhost:3000/family/:id

    6. Delete all family member
        DELETE http://localhost:3000/family