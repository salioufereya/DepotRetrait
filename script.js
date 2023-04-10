
let users = [
    {
        // id:0,
        nom: "Gueye",
        prenom: "Lamine",
        telephone: "772238013",
        email: "sidy@exemple.com",
        src: "https://plus.unsplash.com/premium_photo-1678232179463-9e1cb6a72a3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        solde: 0,
        transactions: [
        ]
    },
    {
        // id:1,
        nom: "Diallo",
        prenom: "Khaoussou",
        telephone: "770854519",
        email: "fatou@exemple.com",
        src: "https://images.unsplash.com/photo-1522260980274-3fdb238bf382?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
        solde: 0,
        transactions: [
        ]
    },
    {
        // id:2,
        nom: "Ba",
        prenom: "Kadiata",
        telephone: "708434422",
        email: "kadiata@exemple.com",
        src: "https://images.unsplash.com/photo-1629977007371-0ba395424741?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        solde: 0,
        transactions: [
        ]
    },
    {
        // id:3,
        nom: "Mar",
        prenom: "Ndiaye",
        telephone: "783899860",
        email: "oumar@exemple.com",
        src: "https://images.unsplash.com/photo-1618073193718-23a66109f4e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZvb3RiYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        solde: 0,
        transactions: [
        ]
    },
    {
        // id:3,
        nom: "Berthe",
        prenom: "Basse",
        telephone: "706899860",
        email: "Berte@exemple.com",
        src: "https://images.unsplash.com/photo-1527950510183-9112f2b9c5e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        solde: 0,
        transactions: [
        ]
    },
    {
        // id:3,
        nom: "Hadja",
        prenom: "Sira",
        telephone: "783679860",
        email: "sira@exemple.com",
        src: "https://images.unsplash.com/photo-1542680283-b96aadf08a09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        solde: 0,
        transactions: [
        ]
    },
    {
        // id:3,
        nom: "Yaye",
        prenom: "Bhoye",
        telephone: "772546860",
        email: "sira@exemple.com",
        src: "https://images.unsplash.com/photo-1580620981875-d135b5477848?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=951&q=80",
        solde: 0,
        transactions: [
        ]
    },
]
let firstName = document.getElementById('firstname')
let lastName = document.getElementById('lastname')
let phone = document.getElementById('phone')
let email = document.getElementById('email')
let solde = document.getElementById('solde')
let next = document.querySelector('.next')
let src = document.querySelector("img")
let form = document.querySelector(".form")
let ajout = document.querySelector("#ajout")
let tbody = document.querySelector(".tbody")
let enregistrer = document.querySelector(".enregistrer")
let select = document.querySelector("#trans")
let code = document.querySelector(".code")
let error = document.querySelector(".error")
let numeroDepotRetrait = document.querySelector(".numeroDepotRetrait")
/* debut modal*/
const modal = document.querySelector('.modal')
let btnCloseModal = document.getElementById('closeModal')
let btnAddUser = document.querySelector('.okModal')
let firstNameAdd = document.querySelector('.firstNameAdd')
let lastNameAdd = document.querySelector('.lastNameAdd')
let phoneAdd = document.querySelector('.phoneAdd')
let emailAdd = document.querySelector('.emailAdd')
let soldeAdd = document.querySelector('.soldeAdd')
let photoAdd = document.querySelector(".photoAdd")

let mnt = document.querySelector("#mnt")
// let btnAnnuler=document.querySelector(".btnAnnuler")
/*finModal*/
let inputSearch = document.querySelector(".inputSearch")
let listUsers = document.querySelector(".listUsers")
let list = document.querySelector(".list")
const spin = document.querySelector(".skeleton")
let numeroSaisie = null
let nfois = 0
let fa_user_plus = document.querySelector(".fa-user-plus")
ajout.addEventListener('click', () => {
    form.classList.toggle("visible")
})
let i = null

i = getRandomInt(users.length)

function printUsers(i) {
    const img = document.querySelector('img');
    const photoEl = document.querySelector('.photo');
    let photo = new Image();
    photo.src = users[i].src;
    photoEl.innerHTML = photo.outerHTML;
    photo.onload = () => {
        spin.classList.remove('skeleton')
        code.innerHTML = users[i].transactions.length
        solde.innerHTML = users[i].solde
        lastName.innerHTML = users[i].nom
        firstName.innerHTML = users[i].prenom
        phone.innerHTML = users[i].telephone
        email.innerHTML = users[i].email
        tbody.innerHTML = "";
        users[i].transactions.forEach(trans => {

            tbody.innerHTML += ` <tr>
            <td>${trans.numero}</td>
            <td>${trans.date}</td>
            <td>${trans.sens}</td>    
            <td>${trans.somme}</td>
            <td><button class="btnAnnu"> Annuler</button>
        </tr>  `
            let btnAnnus = document.querySelectorAll(".btnAnnu")
            btnAnnus.forEach(btnAnnu => {
                btnAnnu.addEventListener('click', () => {
                    if (getUserByTelephone(numeroSaisie)) {
                        if (getUserByTelephone(numeroSaisie).solde >= somme) {
                            getUserByTelephone(numeroSaisie).solde -= somme
                            users[i].solde = (+users[i].solde) + somme
                            alerte("transaction annulé!!!")
                        }else{
                            alerte("somme deja retireé")
                        }

                    } else {
                        users[i].solde = (+users[i].solde) - somme
                        somme = 0
                        alerte("transaction annulé!!!")
                    }
                    printUsers(i)
                   
                })
            });
        });
    }
}

fa_user_plus.addEventListener('click', () => {

    modal.classList.toggle('close')
})

btnCloseModal.addEventListener('click', () => {
    modal.classList.toggle('close')
})
btnAddUser.addEventListener('click', () => {
    let nom = firstNameAdd.value
    let prenom = lastNameAdd.value
    let email = emailAdd.value
    let telephone = phoneAdd.value
    // let src = "https://images.unsplash.com/photo-1629977007371-0ba395424741?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
    let src = photoAdd.value
    let solde = soldeAdd.value
    let transactions = []
    if (lastNameAdd.value == "" || firstNameAdd.value == "" ||
        emailAdd.value == "" || phoneAdd.value == "" || photoAdd.value == "" ||
        soldeAdd.value == "") {
        alerte("veillez remplir tous les champs")
    } else if (isTelephoneExist(telephone)) {
        alerte("telephone existe deja")

    } else if (telephone.length > 9 || telephone.length < 9) {
        alerte("numero invalide!!!!")

    }
    else {
        let objetcAdd = { nom, prenom, email, telephone, src, solde, transactions }
        users.push(objetcAdd)
        firstNameAdd.value = ""
        lastNameAdd.value = ""
        emailAdd.value = ""
        phoneAdd.value = ""
        soldeAdd.value = ""
        succes("Utilisateur ajouté avec succes!!!!")
        modal.classList.toggle('close')
    }
})
let somme = 0

let sens = 0
let date = null
function depotRetrait(i) {
    if (getSelectValue(select) == "Depot" && numeroSaisie != null) {
        if (users[i].solde < mnt.value) {
            alerte("vous ne disposer pas  ce montant")
            condition = false
        } else {
            if (+mnt.value >= 500) {
                users[i].solde = (+users[i].solde) - (+mnt.value)
                if (getUserByTelephone(numeroSaisie)) {
                    getUserByTelephone(numeroSaisie).solde += (+mnt.value)
                    somme = +mnt.value
                    sens = 1
                    let numero = Math.floor(Math.random() * 20);
                    let object1 = { somme, date, sens, numero }
                    getUserByTelephone(numeroSaisie).transactions.push(object1)
                    condition = true
                } else {
                    setTimeout(() => {
                        alerte("transaction annulé car numero inexistant!!!!")
                        users[i].solde += somme
                        console.log(users[i].solde);
                        somme = somme
                        sens = 1
                        let numero = Math.floor(Math.random() * 20);
                        let object1 = { somme, date, sens, numero }
                        users[i].transactions.push(object1)
                        printUsers(i)
                        condition = true
                    }, 4000);
                }
            } else {
                alerte("minimum 500")
                condition = false
            }
            condition = true
        }
    } else if (getSelectValue(select) == "Retrait") {
        if (users[i].solde < (+mnt.value)) {
            condition = false
            alerte("vous ne pouvez retirer ce montant")
        } else {
            users[i].solde = (+users[i].solde) - (+mnt.value)
            condition = true
        }
    }
    else if (getSelectValue(select) == "Depot" && numeroSaisie == null) {
        condition = true
        if (+mnt.value >= 500) {
            users[i].solde = (+users[i].solde) + (+mnt.value)
            condition = true
        }
        else {
            condition = false
        }
    }
}
function nomsUsers() {
    let tabNums = []
    for (let a = 0; a < users.length; a++) {
        tabNums.push(users[a].nom)
    }
    return tabNums
}
numeroDepotRetrait.addEventListener("keyup", (e) => {
    const input = numeroDepotRetrait.value
    const resultat = users.filter(item => item.telephone.includes(input))
    let suggestion = ""
    if (input.length >= 3) {
        resultat.forEach(resultatItem => {
            suggestion += `
            <div class="suggestion">${resultatItem.telephone}</div> 
           `
        });
    }
    console.log(resultat);
    document.querySelector(".list").innerHTML = suggestion

    let suggestions = document.querySelectorAll(".suggestion")
    suggestions.forEach(el => {
        el.addEventListener('click', () => {
            numeroDepotRetrait.value = +el.textContent
            numeroSaisie = +numeroDepotRetrait.value
            list.textContent = ""
        })
    });
})
inputSearch.addEventListener("keyup", (e) => {
    const recherch = inputSearch.value
    const resultatUsers = users.filter(item => item.telephone.toLocaleLowerCase().includes(recherch.toLocaleLowerCase()))
    let sugges = ""
    if (recherch.length >= 3) {
        resultatUsers.forEach(usersCher => {
            sugges += `
                 <div class="listUser" >${usersCher.telephone} </div>
                 <div>${usersCher.nom} </div>
                `
        });
    }
    document.querySelector(".listUsers").innerHTML = sugges
    let listUser = document.querySelectorAll(".listUser")

    listUser.forEach(element => {
        element.addEventListener('click', () => {
            console.log(element.textContent);
            let a = element.innerText
            console.log(getIdByTel(a));
            i = getIdByTel(a)
            printUsers(i)
            inputSearch.value = ""
            document.querySelector(".listUsers").innerHTML = ""
        })
    });
})
function isTelephoneExist(tel) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].telephone == tel) {
            return true
        }
        else {
            return false
        }
    }
}
function getIdByTel(tel) {
    for (let a = 0; a < users.length; a++) {
        if (users[a].telephone == tel) {
            return users.indexOf(users[a])
        }
    }
}
function alerte(message) {
    error.style.display = "block"
    error.innerHTML = '<i class="fa-solid fa-triangle-exclamation fa-shake"></i>' + " " + message
    setTimeout(() => {
        error.style.display = "none"
    }, 5000);
}
function succes(message) {
    error.style.backgroundColor = "green"
    error.style.display = "block"
    error.innerHTML = '<i class="fa-solid fa-square-check"></i>' + " " + message
    setTimeout(() => {
        error.style.display = "none"
    }, 5000);
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
printUsers(i)
next.addEventListener('click', () => {
    tbody.innerHTML = ""
    code.innerHTML = ""
    i = getRandomInt(users.length)
    printUsers(i)
    //   getSolde(i)
    printTransact(i)
})
enregistrer.addEventListener('click', () => {
    somme = +mnt.value;
    if (+mnt.value < 500) {
        alerte("veillez saisir au moins 500fcfa")
        condition = false
    }
    else {
        condition = true
    }
    date = new Date()
    sens = sens
    date = date.toLocaleDateString()
    let numero = Math.floor(Math.random() * 20);
    let object = { numero, somme, date, sens }
    depotRetrait(i)
    if (condition) {
        users[i].transactions.push(object)
        mnt.value = ""
        numeroDepotRetrait.value = ""
        tbody.innerHTML = ""
    }
    printUsers(i)
    tbody.innerHTML = ""
    condition = null
})
function getUserByTelephone(telephone) {
    return users.find(el => el.telephone == telephone)
}
numeroDepotRetrait.addEventListener('change', () => {
    numeroSaisie = +numeroDepotRetrait.value
})
function printTransact(i) {
    users[i].transactions.forEach(element => {
        let row = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.setAttribute('class', 'numero')
        let td2 = document.createElement("td")
        td2.setAttribute('class', 'sens')
        let td3 = document.createElement("td")
        td3.setAttribute('class', 'montant')
        let td4 = document.createElement("td")
        td4.setAttribute('class', 'date')
        row.append(td1, td2, td3, td4)
        tbody.append(row)
    });
}
select.addEventListener('change', () => {
    if (getSelectValue(select) == "Depot") {
        sens = 1
    } else {
        sens = -1
    }
})
function getSelectValue(select) {
    return select.options[select.selectedIndex].innerHTML;
}

function numtabs() {
    let numtab = []
    for (let a = 0; a < users.length; a++) {
        numtab.push(users[a].telephone)
    }
    return numtab;
}








console.log(numtabs());







// function  {
//     setTimeout(() => {
//         error.style.display = "none"
//     }, 5000);
// }



// btnAnnuler.addEventListener('click', () => {
//     getUserByTelephone(numeroSaisie).solde -= somme
//     users[i].solde = (+users[i].solde) + somme
//     printUsers(i)
//     alerte("transaction annulé!!!")
// })