
//REVIEWHIN MO SHIYE
function isAuthorized(uname, pass) {
    console.log(uname); // DEBUGGGS

    // if (uname.toLowerCase() === "admin" && pass === "admin") {
    //     return true;
    // } else if (uname.toLowerCase()  === "user" && pass === "user") {
    //     return true;
    // } return false;


    // WISE CODE
    const users = {
        'admin': 'admin',
        'user': 'user',
    }
    return users[uname.toLowerCase()] === pass;
}


function onLoad() {
    const txtUname = $("#txtUname");
    const txtPass = $("#txtPass");
    const btnLogin = $("#btn-login");
    const toSignUp = $('#toSignUp');
    const toLogin = $('#toLogin');
    const frmLogin = $('.login-form');
    frmLogin.submit((e) => {
        e.preventDefault();
        btnLogin.text('');
        const timer = setInterval(() => {
            const text = btnLogin.text();
            btnLogin.text(text + '.');
        }, 500);
        const uname = txtUname.val();
        const pass = txtPass.val();
        authorize(uname, pass)
            .then((res) => {
                if(res.success === true){
                    window.location.href = "/index.html";
                }else{
                    alert('LOGIN FAILED');
                }
            })
            .catch((err) => {
                //DO SOMETHING
            }).finally(() => {
                clearInterval(timer);
                btnLogin.text("Login");
            });
    });

    toSignUp.click(() => {
        //WILL HIDE LOGIN
        //WILL SHOW SIGN UP
        const frmSignUp = $('.form-sign-up');
        const frmLogin = $('.login-form');
        frmLogin.addClass('hide');
        frmSignUp.removeClass('hide');
    });
    toLogin.click(() => {
        //WILL SHOW LOGIN
        //WILL HIDE SIGN UP
        const frmLogin = $('.login-form');
        const frmSignUp = $('.form-sign-up');
        frmSignUp.addClass('hide');
        frmLogin.removeClass('hide');
    });
}

$(document).ready(onLoad);

function isAuthorized(uname, pass) {
    const LOGIN_URL = 'http://localhost/church/api.php';

    //AJAX
    const request = $.ajax({
        'url': LOGIN_URL,
        data: {uname, pass},
        method: 'POST',

    }).then((response) => {
        console.log(JSON.parse(response));
    });
    return true;
}


function authorize(uname, pass) {
    return new Promise((resolve, reject) => {
        const LOGIN_URL = 'http://localhost/church/api.php';
        const request = $.ajax({
            'url': LOGIN_URL,
            data: { uname, pass },
            method: 'POST',
       
        }).then((response) => {
            resolve(JSON.parse(response));
        }).catch((error) => {
            reject(error);
        });
    });
}


