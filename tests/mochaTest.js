//bring selenium module
const { Builder, By, Key } = require("selenium-webdriver");
//bring mocha
const { describe, it } = require("mocha");
//require chai pkg
  //should style 
var should = require('chai').should();

//describe block
describe("add some text", function(){
  
  //it block
  it("successfully adds text to the text field and submit", async function(){

    //launch the browser
    let driver = await new Builder().forBrowser("firefox").build();
    
    
    //navigate to the application
    await driver.get("/application/EndPoint");
    
    
    //test something in the app
      //select the element to interact with
        //do somthing with the element
          //(write some text in and press enter in this case)
    await driver.findElement(By.id("elementToSelect")).sendKeys("Learn Selenium", Key.RETURN);
    
    
    //assert (checking that our test do what it has to do)
      //find the element by xpath
        //(should be the last element in the path cause we just added it)
      //get the text from the selected field
        //then return it so it gets stored in the variable
    let fieldTextValue = await driver.findElement(By.xpath("//li[last()]")).getText()
    .then(function(value){
      return value
    });
    

    //assert using chai should
    fieldTextValue.should.equal("Learn Selenium")

    
    //close the browser
    await driver.quit();
  });
});


//to run the test run ==> npx mocha --no-timeouts 'tests/*.js'
  //(no timeouts cause we're using async code)

//to make this simpler allocate tests in "test" dir and run ==> npx mocha --no-timeouts
  //or better replace test script in pkg.json for "mocha --no-timeouts 'tests/*.js'"