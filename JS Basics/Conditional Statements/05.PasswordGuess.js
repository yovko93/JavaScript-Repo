function solve(pass){
    let correctPass = "s3cr3t!P@ssw0rd";

    if (correctPass == pass){
        console.log("Welcome");
    }
    else{
        console.log("Wrong password!");
    }
}

solve("s3cr3t!P@ssw0rd");