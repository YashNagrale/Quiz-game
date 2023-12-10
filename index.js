
//For registration Form
function regisfunc() {
    let name = document.getElementById("studentName").value;
    let id = document.getElementById("studentID").value;
    let validname = /^[A-Za-z]+$/;
    let testname = validname.test(name);

    if (name.trim() !== "" && id.trim() !== "") {
        if (!testname && (id <= 0 || isNaN(id))) {
            document.getElementById("submitButtonLink").href = "#";
            alert("Please enter a valid Name and valid ID");
        } else if (!testname) {
            document.getElementById("submitButtonLink").href = "#";
            alert("Please enter a valid name");
        } else if (id <= 0 || isNaN(id)) {
            document.getElementById("submitButtonLink").href = "#";
            alert("Please enter a valid ID");
        } else {
            window.location.href = "quiz.html";
        }
    } else if (name.trim() === "") {
        document.getElementById("submitButtonLink").href = "#";
        alert("Please enter a valid Name");
    } else if (id.trim() === "") {
        document.getElementById("submitButtonLink").href = "#";
        alert("Please enter a valid ID");
    } else {
        document.getElementById("submitButtonLink").href = "#";
        alert("Please fill out both fields before submitting.");
    }
}


// Type animation
let typed = new Typed('#element', {
    strings: ['Short Quiz Test'],
    typeSpeed: 11,
    showCursor: false
});



function myfunc() {

    let form = document.getElementById("myform")
    let radiobtn = form.querySelectorAll('input[type="radio"] ')
    var formvalid = "true"

    radiobtn.forEach(function (grp) {
        let grpname = grp.getAttribute('name')
        if (!form.querySelector('input[name="' + grpname + '"]:checked')) {

            formvalid = false
        }
    })

    if (!formvalid) {
        alert("You didn't answer all questions");
    }
    else {
        alert("Form submitted sucessflly");
        form.submit()
        form.reset()
    }

}



