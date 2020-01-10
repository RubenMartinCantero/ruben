let database = {
    isRunning: false,
    data: {
        users: [
            {'user': 'AmparoSanchezA9', pass: '1234'},
            {'user': 'cantolo_21', pass: '1234'},
            {'user': 'Carlos11234124', pass: '1234'},
        ],
    }
}

function setUpDatabase(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            database.isRunning = true
            resolve()
        }, 2000)
    })
}

//@TODO: needs test
function getUser(username){
    if(database.isRunning){
        return database.data.users.find(user => user.user === username)
    } else {
        throw(new Error('Database is not up'))
    }
}

//@TODO: needs test
function checkPassword(username, password){
    if(database.isRunning){
        let user = database.data.users.find(user => user.user === username)
        if(!user) throw(new Error('User does not exist'))
        return user.pass === password
    } else {
        throw(new Error('Database is not up'))
    }
}

module.exports = {setUpDatabase, getUser, checkPassword}