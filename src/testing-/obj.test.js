const namesList = require('./obj')

test("test whether the data contains a name with adithya or not",()=>{
    const name = namesList.map((person)=>person.name)
    expect(name).toContain("Adithya")

})