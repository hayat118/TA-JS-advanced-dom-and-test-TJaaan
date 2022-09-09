const getCircumfrence=require('./index');
const getArea=require('./index');


test(`circumference of circle with radius 7 is 44`,()=>{
  expect(circumference(7)).toBe(44);
})