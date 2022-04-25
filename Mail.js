class Mail{ //Parent Class
    constructor(author) { 
        this._contacts = []; //contacts is a property of Mail class
        this.from = author; //from is a property of Mail class
    }
    sendMessage = function(msg, to) { //sendMessage is a method of Mail class
        console.log('you send:', msg, 'to', to, 'from', this.from); //this.from is a property of Mail class
        this._contacts.push(to); //push is a method of Array class
    }
    showAllContacts() { //showAllContacts is a method of Mail class
        return this._contacts; //this._contacts is a property of Mail class
    }
}

// inheritance of Mail class
class WhatsApp extends Mail { //Child Class
    constructor(uname,account,from) {
        super(from); //call parent constructor
        this.username = uname; //username is a property of WhatsApp class
        this.isBussinessAccount = account; //isBussinessAccount is a property of WhatsApp class
    }
    myProfile() { //myProfile is a method of WhatsApp class
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`; //this.isBussinessAccount is a property of WhatsApp class
    }
}

const wa1 = new WhatsApp('Jefri Nicko', true,'080111000222'); //instantiate object
console.log(wa1.myProfile()); //output: my name Jefri Nicko, is Business
wa1.sendMessage('Hello', '081222333444'); //output: you send: Hello to 081222333444 from 080111000222
console.log(wa1.showAllContacts()); //output: [ '081222333444' ]