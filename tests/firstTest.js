//bring selenium module
const { Builder, By, Key } = require("selenium-webdriver");

//define the testing function
async function example() {

  //launch the browser
  let driver = await new Builder().forBrowser("firefox").build();


  //navigate to the application
  await driver.get("/application/EndPoint");


  //test something in the app
    //select the element to interact with
      //do somthing with the element
        //(write some text in and press enter in this case)
  await driver.findElement(By.id("elementToSelect")).sendKeys("Learn Selenium", Key.RETURN);



  //close the browser
  await driver.quit();
}

//execute the function
example();
