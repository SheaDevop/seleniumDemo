//bring selenium module
const { Builder, By, Key } = require("selenium-webdriver");
//bring assertion node built in pkg
const assert = require("assert");

//define the testing function
async function example() {

  //launch the browser
  let driver = await new Builder().forBrowser("firefox").build();


  //navigate to the application
  await driver.get("http://application/EndPoint");


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

  //checks that the value of the var is correct
  assert.strictEqual(fieldTextValue, "Learn Selenium");

  //if it doesn't behave how it supposed to we'll get an assertion error


  //close the browser
  await driver.quit();
}

//execute the function
example();
