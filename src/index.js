const fecha = new Date()
const inputDia = document.getElementById("formulario_dia")
const inputMes = document.getElementById("formulario_mes")
const inputAño = document.getElementById("formulario_año")
const resultsDia = document.getElementById("results_day")
const resultsMes = document.getElementById("results_month")
const resultsAño = document.getElementById("results_year")
const boton = document.getElementById("button")
const expReg = /^[0-9]*$/


const funcionDia = () => {
    if(expReg.test(inputDia.value)){
        if(parseInt(inputDia.value) < 32){
            document.getElementById("labelDay").classList.remove("formulario_label--error")
            document.getElementById("formulario_dia").classList.remove("formulario_input--error")
            document.getElementById("errorDay").classList.remove("formularios_error--active")
            console.log("qlo")

            return inputDia.value - fecha.getDate() 
            
        }
    }

    document.getElementById("labelDay").classList.add("formulario_label--error")
        document.getElementById("formulario_dia").classList.add("formulario_input--error")
        document.getElementById("errorDay").classList.add("formularios_error--active")
}

const funcionMes = () => {
    if(expReg.test(inputMes.value)){
        if(parseInt(inputMes.value) < 13){
            document.getElementById("labelMonth").classList.remove("formulario_label--error")
    document.getElementById("formulario_mes").classList.remove("formulario_input--error")
    document.getElementById("errorMonth").classList.remove("formularios_error--active")

            if(parseInt(inputMes.value) > fecha.getMonth()){
                console.log("es menor")
                return inputMes.value - fecha.getMonth() - 1
            }
            return parseInt(inputMes.value) + 5
        }
    }

    document.getElementById("labelMonth").classList.add("formulario_label--error")
    document.getElementById("formulario_mes").classList.add("formulario_input--error")
    document.getElementById("errorMonth").classList.add("formularios_error--active")
}

const funcionAño = () => {
    if(expReg.test(inputAño.value )){
        if(parseInt(inputAño.value) < 2024){
            document.getElementById("labelYear").classList.remove("formulario_label--error")
    document.getElementById("formulario_año").classList.remove("formulario_input--error")
    document.getElementById("errorYear").classList.remove("formularios_error--active")
            if(parseInt(inputMes.value) >= fecha.getMonth() && parseInt(inputDia.value) >= fecha.getDate() || parseInt(inputMes.value) > fecha.getMonth() - 1 ){
                console.log("hola")
                return inputAño.value - fecha.getFullYear() + 1
            }
            return inputAño.value - fecha.getFullYear() 
        }
    }

    document.getElementById("labelYear").classList.add("formulario_label--error")
    document.getElementById("formulario_año").classList.add("formulario_input--error")
    document.getElementById("errorYear").classList.add("formularios_error--active")
}

boton.addEventListener("click", (e) =>{
    e.preventDefault()


    
    if(funcionDia() < 0){
        if(funcionDia() === undefined){
            resultsDia.innerHTML = "- -"
        
        }else{
            resultsDia.innerHTML = funcionDia() * -1
        
        }
    }else{
        if(funcionDia() === undefined){
            resultsDia.innerHTML = "- -"
        
        }else{
            resultsDia.innerHTML = funcionDia()
        
        }
        
    }

    if(funcionMes() < 0){
        if(funcionMes() === undefined){
            resultsMes.innerHTML = "- -"
        
        }else{
            resultsMes.innerHTML = funcionMes() * -1
        
        }
    }else{
        if(funcionMes() === undefined){
            resultsMes.innerHTML = "- -"
        
        }else{
            resultsMes.innerHTML = funcionMes()
        
        }
    }

    if(funcionAño() < 0){
        if(funcionAño() === undefined){
            resultsAño.innerHTML = "- -"
        
        }else{
            resultsAño.innerHTML = funcionAño() * -1
        
        }
    }else{
        if(funcionAño() === undefined){
            resultsAño.innerHTML = "- -"
        
        }else{
            resultsAño.innerHTML = funcionAño()
        
        }
    }

})

