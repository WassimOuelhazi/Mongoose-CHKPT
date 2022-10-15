const personSchema = require('../Models/person')


// create one person

exports.createPerson = async (req, res) => {
    try {

        const newPerson = new personSchema(req.body)
        await newPerson.save();
        res.status(200).send({ msg: "a new person has been successfully created .. !", newPerson })

    } catch (error) {
        res.status(500).send("problem in creating a new person")
        console.log(error);
    }
}

// create many persons/records

exports.createManyPersons = async (req, res) => {
    try {
        const arrayOfPeople = req.body;
        const newPersons = await personSchema.create(arrayOfPeople);
        res.status(200).send({ msg: "new persons successfully created .. !", newPersons })

    } catch (error) {
        res.status(500).send("problem in creating a new persons")
        console.log(error);
    }
}

// display or find all persons : search db

exports.getAllPersons = async (req, res) => {
    try {

        const persons = await personSchema.find()
        res.status(200).send(persons)

    } catch (error) {
        res.status(500).send("problem in getting all persons")
        console.log(error);
    }
}



// find a person who loves a specific food

exports.findByfood = async (req, res) => {
    try {
    
        const favoriteFoods = req.params
        const persons = await personSchema.findOne( favoriteFoods )
        res.status(200).send(persons)

    } catch (error) {
        res.status(500).send("problem in getting person with a specific favourite food")
        console.log(error);
    }
}


// find a person using an id

exports.findPersonById = async (req, res) => {
    try {

        const { id } = req.params
        const persons = await personSchema.findById(id)
        res.status(200).send(persons)

    } catch (error) {
        res.status(500).send("problem in getting person by id")
        console.log(error);
    }
}


// find a person using an id and update his favourite foods :classic method


exports.classicUpdateFood = async (req, res) => {
    try {

        const { id } = req.params
        const person = await personSchema.findById(id)
        const newfood = req.body.favoriteFoods

        person.favoriteFoods.push(newfood)

        await person.save();
        res.status(200).send(person)

    } catch (error) {
        res.status(500).send("problem in updating food : classic method")
        console.log(error);
    }
}


// find a person using an id and update his favourite foods : using findOneAndUpdate function


exports.newUpdateAge = async (req, res) => {
    try {

        const query = { name: req.body.name };
        const person = await personSchema.findOneAndUpdate(query, { $set: { age: 20 } }, { new: true }) // new is set to true to return an updated model
        res.status(200).send(person)

    } catch (error) {
        res.status(500).send("problem in updating person ; new methode mongoose")
        console.log(error);
    }
}

// find a person by Id then remove 


exports.removePerson = async (req, res) => {
    try {

        const { id } = req.params
        await personSchema.findByIdAndRemove(id)
        res.status(200).send("person has been successfully removed from your db")

    } catch (error) {
        res.status(500).send("problem in removing person")
        console.log(error);
    }
}


// find persons by name then remove 


exports.removePersonsByName = async (req, res) => {
    try {

        await personSchema.remove(req.params)

        res.status(200).send("all persons with inserted name were been successfully removed from your db")


    } catch (error) {
        res.status(500).send("problem in removing persons")
        console.log(error);
    }
}

// find persons who like a specific food then Sort them by name, limit the results to two documents, and hide their age
// use of .find(), .sort(), .limit(), .select(), and then .exec(). 

exports.narrowResults = async (req, res) => {
    try {
        const favfood = req.params
        
        const persons = await personSchema.find( favfood ).sort('name').limit(2).select('-age')
        res.status(200).send(persons)


    } catch (error) {
        res.status(500).send("problem in finding persons")
        console.log(error);
    }
}
