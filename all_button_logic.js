
const request = new XMLHttpRequest();
//get request function.
function get() {
    request.open("GET", "http://localhost:3000/student");
    request.send();

    request.onload = function () {
        if (request.status == 200) {
            // console.log("All Data fatched successfully.");
            document.getElementById('output_box').value = request.response;
        }
        else {
            console.log("Wrong URL!");
        }
    }
}
//get request function end.

//post request function.
function post() {

    let data = (document.getElementById('user_input_text_box').value);
    request.open("POST", "http://localhost:3000/student");
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(data);

    request.onload = function () {
        if (request.status == 201) {
            console.log("Post request send successfully");
            document.getElementById('output_box').value = request.response;
        }
        else {
            console.log("Wrong URL!");
        }
    }
}
//post request function end.

//update request function.
function update() {
    let id_input = Number(document.getElementById('id_text_box').value);
    let putData = (document.getElementById('user_input_text_box').value);
    request.open("PUT", ("http://localhost:3000/student/" + id_input));
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(putData);

    request.onload = function () {
        if (request.status == 200) {
            console.log("Put request send successfully");
            document.getElementById('output_box').value = request.response;
        }
        else {
            console.log("Wrong URL!");
        }
    }
}
//end of update request function.


function delete_function() {
    let deleteId = (document.getElementById('id_text_box').value);
    request.open("DELETE", ("http://localhost:3000/student/" + deleteId));
    request.send();

    request.onload = function () {
        if (request.status == 200) {
            console.log("Item Deleted");
            document.getElementById('output_box').value = request.response;
        }
        else {
            console.log("Wrong URL!");
        }
    }
}
