import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("items.db");

export const initDB = () => {
    db.transaction(tx => {
        tx.executeSql(
            "create table if not exists items (id integer primary key not null, isDone boolean, value text);",
            [],
            (_, result) => {
                console.log("OK- DB inicializada  desde initDB");
                console.log(result);
            },
            (_, error) => {
                console.log("ERROR- desde initDB");
                console.log(error);
            }
        )
    })
}

export const getDB = (setList, setListFilter) => {
    db.transaction(tx => {
        res = tx.executeSql(
            "SELECT * FROM items;",
            [],
            (_, result) => {
                console.log("OK - traer DB desde getDB ");
                console.log(result.rows._array);
                setList(result.rows._array)
                setListFilter(result.rows._array)
            },
            (_, error) => {
                console.log("ERROR - al traer DB desde getDB ");
                console.log(error);
            }
        )
    })

    // console.log(promise);
    // return promise
}

export const addToDB = (item) => {
    db.transaction(tx => {
        tx.executeSql(
            "INSERT INTO items (id, isDone, value) VALUES (?, ?, ?);",
            [item.id, item.isDone, item.value],
            (_, result) => {
                console.log("OK - addtoDB");
                console.log(result);
            },
            (_, error) => {
                console.log("ERROR - addtoDB");
                console.log(error);
            }
        )
    })
}

export const deleteToDB = (item) => {
    db.transaction(tx => {
        tx.executeSql(
            "DELETE FROM items WHERE id = ?;",
            [item.id],
            (_, result) => {
                console.log("OK - deletetoDB");
                console.log(result);
            },
            (_, error) => {
                console.log("ERROR - deletetoDB");
                console.log(error);
            }
        )
    })
}

export const updateValueToDB = (item, newValue) => {
    db.transaction(tx => {
        tx.executeSql(
            "UPDATE items SET value = ? WHERE id= ?;",
            [newValue, item.id],
            (_, result) => {
                console.log("OK - updateValueToDB");
                console.log(result);
            },
            (_, error) => {
                console.log("ERROR - updateValueToDB");
                console.log(error);
            }
        )
    })
}

export const updateIsDoneToDB = (id, isDone) => {
    const res = !isDone
    db.transaction(tx => {
        tx.executeSql(
            "UPDATE items SET isDone = ? WHERE id= ?;",
            [isDone, id],
            (_, result) => {
                console.log("OK - updateIsDoneToDB");
                console.log(result);
            },
            (_, error) => {
                console.log("ERROR - updateIsDoneToDB");
                console.log(error);
            }
        )
    })
}