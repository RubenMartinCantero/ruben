
interface Users {
    user: string,
    pass: string
    
}

interface Database {
    isRunning: boolean,
    data: any
}

interface UserDatabase {
    data: {
        users: Users[]
    }
}
/* Esta siguiente puede sustituir a las dos de arriba */
// interface Database {
//     isRunning: boolean,
//     data: {
//         users: Users[]
//     }
// }

let database: Database = {
    isRunning: false,
    data: {
        users: [
            {'user': 'AmparoSanchezA9', pass: '1234'},
            {'user': 'cantolo_21', pass: '1234'},
            {'user': 'Carlos11234124', pass: '1234'},
        ],
    }
}

function setUpDatabase(): Promise<void>{
    return new Promise((resolve, reject) => {  /* Aqui no se añade nada, porque las promesas son asi. Aunque se podria poner */
        setTimeout(()=>{
            database.isRunning = true
            resolve()
        }, 2000)
    })
}



//@TODO: needs test
function getUser (username: string): Users{
    if(database.isRunning){
        return database.data.users.find(user => user.user === username)
    } else {
        throw(new Error('Database is not up'))
    }
}

//@TODO: needs test
function checkPassword(username: string, password: string | number): boolean{
    if(database.isRunning){
        let user: Users = database.data.users.find(user => user.user === username)
        if(!user) throw(new Error('User does not exist'))
        return user.pass === password
    } else {
        throw(new Error('Database is not up'))
    }
}

module.exports = {setUpDatabase, getUser, checkPassword}