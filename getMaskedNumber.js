export default (number)=>{
  const multipleOf3 = number % 3 == 0
  const multipleOf5 = number % 5 == 0
  if(multipleOf3){
    number = 'Fizz'
  }
  if(multipleOf5){
    number = 'Buzz'
  }
  if(multipleOf3  && multipleOf5){
    number = 'FizzBuzz'
  }
  return number
}
