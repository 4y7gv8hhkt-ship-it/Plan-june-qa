import { test ,expect } from '@playwright/test';
import { LoginPage } from '../page/LoginPage';

test('userlogin_error',async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('strenger_user','secret_sauce');
    await expect(page.locator('[data-test="error"]')).toHaveText(/Epic sadface/);   
    });

test('userlogin',async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto(); 
    await loginPage.login('standard_user','secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });