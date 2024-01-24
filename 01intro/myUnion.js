var score = 33;
score = 44;
score = "fifty five";
score = true;
var shreekar = { name: "shreekar", id: 23 };
shreekar = { username: "shreekar_", id: 66 };
function getDbId(id) {
    //id.toUpperCase()
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
    console.log("DB id is: ".concat(id, " "));
}
getDbId(3);
getDbId("3");
