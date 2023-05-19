
let store = {
    _state: {
        takeNumber: "TAKE_NUMBER",
        createClient: "CREATE_CLIENT",
        createService: "CREATE_SERVICE",
        deleteService: "DELETE_SERVICE",
        clients: 
            [   
                {id: 3, lastName: "Иванов", firstName: "Иван",
             patronymic: "Иванович", carNumber: "В001ВВ777",
              phoneNumber: "7-777-777-77-77", email: "ivan@mail.ru",
               services: [{name: "Шиномонтаж", date: "2023-04-14", description: "Some description", number: 0,}]},
                {id: 2, lastName: "Петров", firstName: "Петр",
             patronymic: "Петрович", carNumber: "А777АА777",
              phoneNumber: "8-888-888-88-88", email: "piter@mail.ru",
               services: [{name: "Замена масла", date: "2023-05-14", description: "Some description", number: 0,}]},
               {id: 1, lastName: "Cидоров", firstName: "Cидр",
             patronymic: "Сидорович", carNumber: "О000ОО000",
              phoneNumber: "9-999-999-99-99", email: "piter@mail.ru",
               services: [{name: "Сход-развал", date: "2022-05-23", description: "Some description", number: 0},]},
               {id: 0, lastName: "Клиент не найден", firstName: "Клиент не найден",
             patronymic: "Клиент не найден", carNumber: "Клиент не найден",
              phoneNumber: "Клиент не найден", email: "Клиент не найден",
               services: []},
            ],
        searchingNumber: "",
    },
    _rerender(){
        console.log('')
    },
    observer(observer){
        this._rerender = observer
    },
    getState(){
        return this._state
    },

    dispatch(action){
        if(action.type === this._state.takeNumber){
            this._state.searchingNumber = action.text.toUpperCase().replaceAll("Y", "У").replaceAll("X", "Х").replaceAll("H", "Н")
            .replaceAll("M", "М").replaceAll("K", "К").replaceAll("A", "А").replaceAll("E", "Е").replaceAll("С", "С").replaceAll("T", "Т")
            .replaceAll("O", "О").replaceAll("P", "Р").replaceAll("B", "В")
            this._rerender()
        }
        else if(action.type === this._state.createClient){
            if(!action.lastNameText){
                alert("Введите фамилию клиента")
            }
            else if(!action.carNumberText){
                alert("Укажите госномер транспортного средства клиента")
            }
            else if(!action.phoneNumberText){
                alert("Введите номер телефона клиента")
            }
            else{
                let carNumberTextRus = action.carNumberText.toUpperCase().replaceAll("Y", "У").replaceAll("X", "Х").replaceAll("H", "Н")
                .replaceAll("M", "М").replaceAll("K", "К").replaceAll("A", "А").replaceAll("E", "Е").replaceAll("С", "С").replaceAll("T", "Т")
                .replaceAll("O", "О").replaceAll("P", "Р").replaceAll("B", "В")
                let newClient = {
                    id: this._state.clients.length,
                    lastName: action.lastNameText,
                    firstName: action.firstNameText,
                    patronymic: action.patronymicText,
                    carNumber: carNumberTextRus,
                    phoneNumber: action.phoneNumberText,
                    email: action.emailText,
                    services: [ ],
                }
                this._state.clients.unshift(newClient)
                this._rerender()
                alert("Карта нового клиента успешна создана")
            }
            
        }
        else if(action.type === this._state.createService){
            if(this._state.searchingNumber !== "Клиент не найден" && this._state.searchingNumber !== "" ){
                let newServece = {
                    name: action.serviceName,
                    date: action.serviceDate,
                    description: action.serviceDescription,
                    number: Math.random(),
                }
                this._state.clients[this._state.clients.findIndex(el => 
                    el.phoneNumber === this._state.searchingNumber || el.carNumber === this._state.searchingNumber
                    )].services.push(newServece)
                this._rerender()
            }
            else return this._state
        }
        else if(action.type === this._state.deleteService){
            if(window.confirm("Вы уверены, чо хотите удалить услугу? Отменить это действие будет невозможно.")){
                this._state.clients[this._state.clients.findIndex(el => 
                    el.phoneNumber === this._state.searchingNumber || el.carNumber === this._state.searchingNumber
                    )].services.splice(this._state.clients[this._state.clients.findIndex(el => 
                          el.phoneNumber === this._state.searchingNumber || el.carNumber === this._state.searchingNumber
                          )].services.findIndex(el => el.number === action.number), 1)
                    this._rerender()
            } 
        }
    },


 
}

export const takeNumberAC = (type, text)=>{
    return {
        type: type,
        text: text,
    }
}
export const createClientAC = (type, lastNameText, firstNameText, patronymicText, carNumberText, phoneNumberText, emailText)=>{
    return {
        type: type,
        lastNameText: lastNameText,
        firstNameText: firstNameText,
        patronymicText: patronymicText,
        carNumberText: carNumberText,
        phoneNumberText: phoneNumberText,
        emailText: emailText,
    }
}
export const createServiceAC = (type, serviceName, serviceDate, serviceDescription)=>{
    return {
        type: type,
        serviceName: serviceName,
        serviceDate: serviceDate,
        serviceDescription: serviceDescription,
    }
}
export const deleteServiceAC = (type, number)=> {
    return {
        type: type,
        number: number,
    }
}

export default store