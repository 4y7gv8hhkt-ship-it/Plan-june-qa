//アプリ側のタグdata-test="username"/data-test="password"/data-test="login-button"
//アプリのURL:https://www.saucedemo.com/
//遷移先のアプリのURL:https://www.saucedemo.com/inventory.html
import {Page ,expect} from '@playwright/test';

    export class LoginPage{
        constructor(private page:Page){}
        async goto(){
            await this.page.goto('https://www.saucedemo.com/');
        }
        async login(username:string,password:string){
            await this.page.locator('[data-test="username"]').fill(username);
            await this.page.locator('[data-test="password"]').fill(password);
            await this.page.locator('[data-test="login-button"]').click();
        }
        async expectInventoryPage(){
            await expect(this.page).toHaveURL(/inventory/);
        }

    }
