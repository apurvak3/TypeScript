type user = {
    name:string ; email : string ; isActive:boolean
}
function createUser(user : User) :user{
    return{name:' ' , email : " " , isActive:true};
}
createUser({name: " " , email : " " , isActive : false});

type User = { 
    readonly _id : string
    name : string
    email: string
    isActive : boolean
    creditCard ?: "number" //if someone has to login without using credit card.optional
}
let myUser:User = { 
    _id:"12345",
    name:"Apurva",
    email:"kanthapurva655@gmail.com",
    isActive: false

}
myUser.email = "sanjana@gmail.com" //to change the email.
myUser._id -  "shreya" //but my id wil no be change