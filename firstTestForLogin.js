import { Selector, t } from "testcafe";

const loginInput = Selector("#user_login");
const loginPassword = Selector("#user_password");
const loginButton = Selector("[name='submit']");
//const accountTitle = Selector("");

fixture `Login test`
.page`http://zero.webappsecurity.com/login.html`
.beforeEach(async t =>{
    await t.setTestSpeed(0.2)
})

test('Test login with valid credentials', async t =>{
    await t
    .typeText(loginInput,"username",{paste:true})
    .typeText(loginPassword, "password",{paste:true})
    .click(loginButton)
})