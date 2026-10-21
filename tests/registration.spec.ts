import{test, expect} from '@playwright/test';

//User Text Inputs
test("User Text Inputs", async({page})=>{

    await page.goto("https://www.playwrightautomation.com/");
    
    await page.getByRole("link", {name: "Start Practicing"}).click();
    await expect(page).toHaveURL("https://www.playwrightautomation.com/practice.html");

    await expect(page.getByRole("heading", {name: "Form Controls"})).toBeVisible();

    await expect(page.getByRole("heading", {name: "Text Inputs", exact: true})).toBeVisible();

    const name = page.getByPlaceholder("Enter your name");
    const email = page.getByPlaceholder("Enter your email");
    const address = page.getByPlaceholder("Enter your address");

    await name.fill("Neha");
    await email.fill("birajvibes@outlook.com");
    await address.fill("B 72, B Block, Noida");

   await page.getByRole("button", {name: "Submit"}).click();
 
    const sucessMessage = page.locator('[data-testid="text-inputs-status"]');
    await expect(sucessMessage).toHaveText("submitted");

});

//User Reset
test("User Reset", async({page})=>{

    await page.goto("https://www.playwrightautomation.com/");
    
    await page.getByRole("link", {name: "Start Practicing"}).click();
    await expect(page).toHaveURL("https://www.playwrightautomation.com/practice.html");

    await expect(page.getByRole("heading", {name: "Form Controls"})).toBeVisible();

    await expect(page.getByRole("heading", {name: "Text Inputs", exact: true})).toBeVisible();

    const name = page.getByPlaceholder("Enter your name");
    const email = page.getByPlaceholder("Enter your email");
    const address = page.getByPlaceholder("Enter your address");

    await name.fill("Neha");
    await email.fill("birajvibes@outlook.com");
    await address.fill("B 72, B Block, Noida");

    await expect(name).toHaveValue("Neha");
    await expect(email).toHaveValue("birajvibes@outlook.com");
    await expect(address).toHaveValue("B 72, B Block, Noida");

    await page.locator('[data-testid="btn-reset-text-inputs"]').click();

    await expect(name).not.toHaveValue("Neha");
    await expect(email).not.toHaveValue("birajvibes@outlook.com");
    await expect(address).not.toHaveValue("B 72, B Block, Noida");

});

//Radio Buttons
test("User Test Radio Buttons", async({page})=>{

    await page.goto("https://www.playwrightautomation.com/");
    
    await page.getByRole("link", {name: "Start Practicing"}).click();
    await expect(page).toHaveURL("https://www.playwrightautomation.com/practice.html");

    await expect(page.getByRole("heading", {name: "Radio Buttons"})).toBeVisible();

    const gender = page.locator('input[type="radio"]');
    await gender.nth(0).check();
    await expect(gender.nth(0)).toBeChecked();

});

//Checkbox
test("User Test Checkbox", async({page})=>{

    await page.goto("https://www.playwrightautomation.com/");
    
    await page.getByRole("link", {name: "Start Practicing"}).click();
    await expect(page).toHaveURL("https://www.playwrightautomation.com/practice.html");

    await expect(page.getByRole("heading", {name: "Checkboxes"})).toBeVisible();

    const availableSays = page.locator('input[type="checkbox"]');
    await availableSays.nth(2).check();

    await expect(availableSays.nth(2)).toBeChecked();

});


//Dropdowns
test("Select Country from Dropdown", async({page})=>{

    await page.goto("https://www.playwrightautomation.com/");
    
    await page.getByRole("link", {name: "Start Practicing"}).click();
    await expect(page).toHaveURL("https://www.playwrightautomation.com/practice.html");

    await expect(page.getByRole("heading", {name: "Static Dropdowns"})).toBeVisible();

    const selectCountry = page.locator('[data-testid="dropdown-country"]');
    await selectCountry.selectOption("india");
    await expect(selectCountry).toHaveValue("india");

    const sortedAnimals = page.locator('[data-testid="dropdown-sorted"]');
    await sortedAnimals.selectOption("elephant");
    await expect(sortedAnimals).toHaveValue("elephant");

});


//Custom Dropdowns
test("Custom Dropdowns", async({page})=>{

    await page.goto("https://www.playwrightautomation.com/");
    
    await page.getByRole("link", {name: "Start Practicing"}).click();
    await expect(page).toHaveURL("https://www.playwrightautomation.com/practice.html");

    await expect(page.getByRole("heading", {name: "Bootstrap Dropdown"})).toBeVisible();

    const selectJobTitle = page.locator('[data-testid="bootstrap-dropdown"]');
    await selectJobTitle.click();
    
    await page.getByRole("option", {name: "Automation Tester"}).click();
    await expect(page.locator('.bd-select-trigger')).toHaveText("Automation Tester");
    
});


//Auto Suggestive Dropdown
test("Auto Suggestive Dropdown", async({page})=>{

    await page.goto("https://www.playwrightautomation.com/");
    
    await page.getByRole("link", {name: "Start Practicing"}).click();
    await expect(page).toHaveURL("https://www.playwrightautomation.com/practice.html");

    await expect(page.getByRole("heading", {name: "Auto Suggestive Dropdown"})).toBeVisible();

    // Locate the search input
    const searchProduct = page.getByPlaceholder("Search for Products");

    // Enter search text
    await searchProduct.fill("lap");

    // Verify the Laptop suggestion appears
    const laptopOption = page.getByRole("option", {name: "Laptop", exact: true});
    await expect(laptopOption).toBeVisible();

    // Select Laptop
    await laptopOption.click();

    // Verify the selected value in the input
    await expect(searchProduct).toHaveValue("Laptop");

});

//Searchable Custom Dropdown
test("Searchable Custom Dropdown", async({page})=>{

    await page.goto("https://www.playwrightautomation.com/");
    
    await page.getByRole("link", {name: "Start Practicing"}).click();
    await expect(page).toHaveURL("https://www.playwrightautomation.com/practice.html");

    await expect(page.getByRole("heading", {name: "Searchable Custom Dropdown"})).toBeVisible();

    const selectSkills = page.getByPlaceholder("Type to search skills…");
    await selectSkills.click();

    const chooseSkill = page.getByRole("option", {name: "Playwright", exact: true});
    await expect(chooseSkill).toBeVisible();
    
    await chooseSkill.click();
    await expect(page.locator("#sd-display")).toContainText("Playwright");

});

//Dynamic Dependent Dropdown
test("Dynamic Dependent Dropdown", async({page})=>{

    await page.goto("https://www.playwrightautomation.com/");
    
    await page.getByRole("link", {name: "Start Practicing"}).click();
    await expect(page).toHaveURL("https://www.playwrightautomation.com/practice.html");

    await expect(page.getByRole("heading", {name: "Dynamic Dependent Dropdown"})).toBeVisible();

    const country = page.locator('[data-testid="dep-dropdown-country"]');
    await country.selectOption("india");
    await expect(country).toHaveValue("india");

    const state = page.locator('[data-testid="dep-dropdown-state"]');
    await state.selectOption("tamil-nadu");
    await expect(state).toHaveValue("tamil-nadu");

    const city = page.locator('[data-testid="dep-dropdown-city"]');
    await city.selectOption("chennai");
    await expect(city).toHaveValue("chennai");

    await expect(page.locator('[data-testid="dep-selected-display"]')).toHaveText("India → Tamil Nadu → Chennai");

});

//Single File Upload
// test("Single File Upload", async({page})=>{

//     await page.goto("https://www.playwrightautomation.com/");
    
//     await page.getByRole("link", {name: "Start Practicing"}).click();
//     await expect(page).toHaveURL("https://www.playwrightautomation.com/practice.html");

//     await expect(page.getByRole("heading", {name: "Standard File Inputs"})).toBeVisible();

//     const singleFile = page.locator('[data-testid="upload-single"]');
//     await singleFile.setInputFiles("C:/Users/Biraj/Downloads/1790402015750.jpg");

//     await expect(page.locator('[data-testid="upload-single-status"]')).toHaveText("✓ File Uploaded Successfully");

// });


//Multiple File Upload
// test("Multiple File Upload", async({page})=>{

//     await page.goto("https://www.playwrightautomation.com/");
    
//     await page.getByRole("link", {name: "Start Practicing"}).click();
//     await expect(page).toHaveURL("https://www.playwrightautomation.com/practice.html");

//     await expect(page.getByRole("heading", {name: "Standard File Inputs"})).toBeVisible();

//     const multipleFile = page.locator('[data-testid="upload-multiple"]');
//     await multipleFile.setInputFiles(["C:/Users/Biraj/Pictures/Screenshots/1.png",
//                                       "C:/Users/Biraj/Pictures/Screenshots/2.png"]);

    
//      await expect(page.locator('[data-testid="upload-multiple-count"]')).toHaveText("2");                                

// });

//Upload Challenges
// test("Upload Challenges", async({page})=>{

//     await page.goto("https://www.playwrightautomation.com/");
    
//     await page.getByRole("link", {name: "Start Practicing"}).click();
//     await expect(page).toHaveURL("https://www.playwrightautomation.com/practice.html");

//     await expect(page.getByRole("heading", {name: "Upload Challenges"})).toBeVisible();

//     const resumeUpload = page.getByTestId("btn-upload-resume");

//     const fileChooserPromise = page.waitForEvent("filechooser");
//     await resumeUpload.click();

//     const fileChooser = await fileChooserPromise;
//     await fileChooser.setFiles("C:/Users/Biraj/Downloads/Profile.pdf");

//     await expect(page.locator('[data-testid="upload-hidden-status"]')).toHaveText("✓ Resume Uploaded Successfully");

//     //Browse Upload
//     const browseFile = page.getByTestId("btn-browse-files");

//     const selectFile = page.waitForEvent("filechooser");
//     await browseFile.click();

//     const myFile = await selectFile;
//     await myFile.setFiles("C:/Users/Biraj/Downloads/Profile.pdf");

//     await expect(page.locator('[data-testid="filechooser-status"]')).toHaveText("✓ 1 File Selected Successfully");
// });

// //Capture Screenshot
// test("Capture Screenshot", async({page})=>{

//     await page.goto("https://www.playwrightautomation.com/");

//     //Element screenshot
//     await page.locator('[data-testid="hero-visual"]').screenshot({path: "./screenshots/element-screenshot.png"});

//     // Page screenshot 
//     await page.screenshot({path: "./screenshots/page-screenshot.png"});

//     // Full-page screenshot
//     await page.screenshot({path: "./screenshots/fullpage-screenshot.png", fullPage: true});

//     await page.getByRole("link", {name: "Start Practicing"}).click();
//     await expect(page).toHaveURL("https://www.playwrightautomation.com/practice.html");
// });

// //Capture Registration Form Screenshot
// test("Capture Registration Form Screenshot", async({page})=>{

//     await page.goto("https://www.playwrightautomation.com/");

//     await page.locator('[data-testid="pw-header-login"]').click();

//     await expect(page).toHaveURL("https://www.playwrightautomation.com/login.html");

//     await page.locator('[data-testid="login-register-link"]').click();

//     await expect(page).toHaveURL("https://www.playwrightautomation.com/register.html");

//     await page.screenshot({path: "./screenshots/registration-form.png", fullPage:true});

// });

