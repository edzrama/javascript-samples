var guestList = ['Angela', 'Jack', 'Pam', 'James','Lara', 'Jason'];
var name = prompt();

if(guestList.includes(name)) {
    console.log('Welcome ' + name);
    }
else {

        console.log('Get out! ' + name);
}