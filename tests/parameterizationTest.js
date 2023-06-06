//bring selenium module
const { Builder, By, Key } = require("selenium-webdriver");
//bring mocha
const { describe, it } = require("mocha");
//require chai pkg
  //should style 
var should = require('chai').should();
//require capabilities file
const ltCapabilities = require("../capabilities");

//describe block
describe("add some more text", function(){

  var driver;

  //username
  const USERNAME = ltCapabilities.capabilities["LT:Options"].username;

  //key
  const KEY = ltCapabilities.capabilities["LT:Options"].accessKey;

  //host
    //example grid host name 
  const GRID_HOST = "hub.example.com/wd/hub";

  const gridUrl = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST;

  const browsers = [
    { browser: "Chrome" , bVersion: "93.0", os: "Windows 10" },
    { browser: "Firefox" , bVersion: "91.0", os: "Windows 10" },
    { browser: "Firefox" , bVersion: "90.0", os: "Windows 10" }
  ];

  browsers.forEach(({browser, bVersion, os}) => {
    //it block
    it(`adds some text for browser: ${browser}, ${bVersion} in: ${os}`, async function(){
      
      //update capabilities as it runs
      ltCapabilities.capabilities["LT:Options"].platformName = os;
      ltCapabilities.capabilities.browserName = browser;
      ltCapabilities.capabilities.browserVersion = bVersion;


      //rename the test to the name of the it block thats running
      ltCapabilities.capabilities["LT:Options"].name = this.test.title;
      
      //launch the browser
      driver = new Builder().usingServer(gridUrl).withCapabilities(ltCapabilities.capabilities).build();
  
  
  
      //navigate to the application
      await driver.get("/application/EndPoint");
      
      
      //test something in the app
        //select the element to interact with
          //do somthing with the element
            //(write some text in and press enter in this case)
      await driver.findElement(By.id("elementToSelect")).sendKeys("Learn Selenium on the cloud", Key.RETURN);
      
      
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
      fieldTextValue.should.equal("Learn Selenium on the cloud")
  
  
      //close the browser
      await driver.quit();
      
    });
  });
});