const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

let data = {
    transactions: []
}

checkLogged();

document.getElementById("button-logout").addEventListener("click", logout);
document.getElementById('verTodas').addEventListener("click", function(){
    window.location.href = "transactions.html";
})

//adicionando valores na home
document.getElementById("#transaction-modal").addEventListener("submit", function(e){
    e.preventDefault();

    const value = parseFloat(document.getElementById("value-input").value);
    const description = document.getElementById("description-input").value;
    const date = document.getElementById("date-input").value;
    const type = document.querySelector('input[name="type-input"]:checked').value;

    data.transactions.unshift({

        value: value, type: type, description: description, date: date
    })

    saveData(data);
    e.target.reset();
    myModal.hide();

    alert("lançamento adicionado");
})

function checkLogged(){

    if(session){
        session.setItem("logged", session);

        logged = session;
    }

    if(!logged){
        window.location.href= "index.html"
    }


    const dataUser = localStorage.getItem(logged)
    if(dataUser){
        data = JSON.parse(dataUser);
    }

   
};


//sair 
function logout(){
    sessionStorage.removeItem("logged");
        window.location.href= "index.html"
};

//adicionar lancamento com usuário logado
function saveData(data){
    localStorage.setItem(data.login, JSON.stringify(data));
};





