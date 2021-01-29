//this js will not  work without jqurey or just update
let id = $("input[name*='student_id']")
id.attr("readonly", "readonly");

// to get data from table row to input fields to Update, edit or delete by edit icon in table
$(".btnedit").click(edit => {
    let textvalues = displayData(edit);

    ;
    let studentname = $("input[name*='student_name']");
    let studentuniversity = $("input[name*='student_university']");
    let studentphone = $("input[name*='student_phone']");

    id.val(textvalues[0]);
    studentname.val(textvalues[1]);
    studentuniversity.val(textvalues[2]);
    studentphone.val(textvalues[3].replace("$", ""));
});

//to show the data by id
function displayData(edit) {
    let id = 0;
    const td = $("#tbody tr td");
    let textvalues = [];

    for (const value of td) {
        if (value.dataset.id == edit.target.dataset.id) {
            textvalues[id++] = value.textContent;
        }
    }
    return textvalues;

}