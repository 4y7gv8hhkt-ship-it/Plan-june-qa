import { test } from '@playwright/test';
import { LoginPage } from '../page/LoginPage';

test('userlogin', async ({page}) => {
 const loginPage = new LoginPage(page);
 await loginPage.goto();
 await loginPage.login('standard_user','secret_sauce');
});