const fecha = new Date();
const inputDia = document.getElementById("formulario_dia")
const inputMes = document.getElementById("formulario_mes")
const inputAño = document.getElementById("formulario_año")

const labelDay = document.getElementById("labelDay")
const labelMonth = document.getElementById("labelMonth")
const labelYear = document.getElementById("labelYear")

const errorDay = document.getElementById("errorDay")
const errorMonth = document.getElementById("errorMonth")
const errorYear = document.getElementById("errorYear")
const dateError = document.getElementById("dateError")

const resultsDia = document.getElementById("results_day")
const resultsMes = document.getElementById("results_month")
const resultsAño = document.getElementById("results_year")

const boton = document.getElementById("button")

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

let day = fecha.getDate();
let month = 1 + fecha.getMonth()
let year = fecha.getFullYear()

const funcionDia = () =>{
    let validator = true
    const inputDiaValue = parseInt(inputDia.value)
    const index = parseInt(inputMes.value) - 1
    if(inputDia.value == "" || inputDiaValue <= 0 || inputDiaValue > months[index] || inputDiaValue > 31){
        labelDay.classList.add("formulario_label--error")
        inputDia.classList.add("formulario_input--error")
        errorDay.classList.add("formularios_error--active")
        validator = false
    }else{
        labelDay.classList.remove("formulario_label--error")
        inputDia.classList.remove("formulario_input--error")
        errorDay.classList.remove("formularios_error--active")
        validator = true
    }

    return validator
    
}

const funcionMes = () => {
    const inputMesValue = parseInt(inputMes.value)
    let validator = true
    if(inputMes.value === "" || inputMesValue <= 0 || inputMesValue > 12){
        labelMonth.classList.add("formulario_label--error")
        inputMes.classList.add("formulario_input--error")
        errorMonth.classList.add("formularios_error--active")
        validator = false
    }else{
        labelMonth.classList.remove("formulario_label--error")
        inputMes.classList.remove("formulario_input--error")
        errorMonth.classList.remove("formularios_error--active")
        validator = true
    }

    return validator
}

const funcionAño = () => {
    const inputAñoValue = parseInt(inputAño.value)
    let validator = true
    if(inputAño.value === "" || inputAñoValue <= 0 || inputAñoValue > year || inputAñoValue < 1940){
        labelYear.classList.add("formulario_label--error")
        inputAño.classList.add("formulario_input--error")
        errorYear.classList.add("formularios_error--active")
        validator = false
    }else{
        labelYear.classList.remove("formulario_label--error")
        inputAño.classList.remove("formulario_input--error")
        errorYear.classList.remove("formularios_error--active")
        validator = true
    }

    return validator
}

function validate() {
    let validator = true

    if(funcionDia() && funcionMes() && funcionAño()){
        validator = true
    }else{
        validator = false
    }
   
   return validator
   
}

boton.addEventListener("click", (e) => {

    if(validate()){
        const inputDiaValue = parseInt(inputDia.value)
    const inputMesValue = parseInt(inputMes.value)
    const inputAñoValue = parseInt(inputAño.value)

    let birthday = `${inputMesValue}/${inputDiaValue}/${inputAñoValue}`;
    let birthdayObj = new Date(birthday)
    let ageDiffMill = Date.now() - birthdayObj
    let ageDate = new Date(ageDiffMill)
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay() - 1;
    resultsDia.innerHTML = ageDay
    resultsMes.innerHTML = ageMonth;
    resultsAño.innerHTML = ageYears;
    }else {
        resultsDia.innerHTML = "--"
        resultsMes.innerHTML = "--";
        resultsAño.innerHTML = "--";
    }
})