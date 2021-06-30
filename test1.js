import { Selector, t } from "testcafe";

const addNew = Selector ("[placeholder='Add New']")

fixture `search test`
    .page `https://simplest-react-todo-app.herokuapp.com/` 


 test ('',  async t =>{
     await t
     .typeText(addNew,"username",{paste:true})
})