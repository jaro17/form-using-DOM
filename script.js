const form = document.createElement('form');
form.id = 'myForm';
form.style.width = '360px';

function createLabel(text) {
    return `<label>${text}</label>`;
}

function createInput(type, placeholder, id) {
    return `<input type="${type}" placeholder="${placeholder}" id="${id}">`
}

form.innerHTML = `

<h2>Add user</h2>
<div>
<label>First name:</label>
<input type="text" placeholder="First name" id="first_name">
</div>

<div>
${createLabel('Last name:')}
${createInput('text', 'Last name', 'last_name')}
</div>

<div>
${createLabel('Birthday:')}
${createInput('date', null, 'dob')}
</div>

<div>
${createLabel('Email:')}
${createInput('email', 'Email', 'email')}
</div>

<div>
${createLabel('Password:')}
${createInput('password', 'Password', 'password')}
</div>

<button class="btn" type="Submit">Submit</button>
`;

document.body.appendChild(form);

document
    .querySelector('form')
    .querySelectorAll('div')
    .forEach(div => {
        div.className = 'input_container';
    });

form.addEventListener('submit', e => {
    e.preventDefault();

    document.body.style.display = 'grid';
    document.body.style.gridTemplateColumns = '1fr 1fr';

    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    function getFullName() {
        return `${firstName} ${lastName}`
    }

    function calculateAge(dob) {
        let birthday = new Date(dob);
        let ageDifference = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifference);

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    validation();

    function validation() {
        if (
            firstName === '' ||
            lastName === '' ||
            dob === '' ||
            email === '' ||
            password === ''
        ) {
            alert('All fields are required.');
        } else {
            createUser();
            document.querySelectorAll('input').forEach(inputField => {
                inputField.value = '';
            });
        }
    }

    function createUser() {
        const ul = document.createElement('ul');
        ul.id = 'userDetails';
        ul.className = 'animate-in';

        ul.innerHTML = `
       
       <h4>${getFullName()}</h4>
       <img src="https://source.unsplash.com/PpyOVWQtEjE" alt=""
       style="height: 150px; border-radius: 25px">
       <li>First name: <span>${firstName}</span></li>
       <li>Last name: <span>${lastName}</span></li>
       <li>Birthday: <span>${dob}</span></li>
       <li>Age: <span>${calculateAge(dob)}</span></li>
       <li>Email: <span>${email}</span></li>
       `;

        document.body.appendChild(ul);

    }
});


