import { Selector } from "testcafe";

const loginInput = Selector("#user_login");
const loginPassword = Selector("#user_password");
const loginButton = Selector("[name='submit']");
const pageTitle = Selector("a.brand");
//const individualAccount = accountTitles.find('')


// const citySelect = Selector('#city');
// const cityOption = citySelect.find('option');

// test(`Select an option from the drop-down menu`, async t => {
//     await t
//         .click(citySelect)
//         .click(cityOption.withText('London'))
//         .expect(citySelect.value).eql('London');
// });

fixture `Login test`
.page `http://zero.webappsecurity.com/login.html`
.beforeEach(async t =>{
    await t.setTestSpeed(0.2)
})

test('Test login with valid credentials', async t =>{
    await t
    .typeText(loginInput,"username",{paste:true})
    .typeText(loginPassword, "password",{paste:true})
    .click(loginButton)
    .expect(pageTitle.innerText).eql('Zero Bank',{timeout: 2000})

})