function onSubmitClicked(){
    let firstName = document.getElementById('first_name').value
    let lastName = document.getElementById('last_name').value
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let feedback = document.getElementById('feedback').value
    let age = document.getElementById('age').value

    msg = `${firstName}, ${lastName}, ${gender}, ${feedback}, ${age}`
    window.alert(msg)

    let data = {
        'firstName': firstName,
        'lastName': lastName,
        'gender': gender,
        'feedback': feedback,
        'age': age
    }

    let dataToBeSent = JSON.stringify(data)
    console.log(dataToBeSent)
}