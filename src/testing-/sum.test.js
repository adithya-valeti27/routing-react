const sum = require('./sum')
 
test("test whether 1 and 2 sum to 3" ,()=>{
    expect(sum(1,2)).toBe(3)
})