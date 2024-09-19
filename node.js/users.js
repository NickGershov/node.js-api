const users = [
    {
        id: 1,
        name: "john",
        age:25 
    },
    {
        id: 2,
        name: "jane",
        age:26 
    },
];

const getUser = (id) => {
    return users[id];
};


module.exports = {
    users,
    getUser,
};


