var myStates = [
    "Maharashtra",
    "Karnataka",
    "Rajasthan",
    2020,
    "Goa",
    "Kerala",
];

for (let i = 0; i < myStates.length; i++) {
    if(typeof myStates[i] !== 'string') break;
    console.log(myStates[i]);
}


