import {defineStore} from "pinia"

export const useContactStore =  defineStore ('contactStore', {
    state:()=> ({
        contacts: [
            {name: "steven",
            email: "stevenmichael@gmail.com",
            number: "0812127490",
            company: "Apple Inc",
            title: "Mr",
            group: null,
            isFav: true,
            todos: [],
            contacts: [],
            id: 1
        },
            {name: "abdul Maleek",
            email: "abdulMaleek@gmail.com",
            number: "09045321241",
            company: "Google Tech",
            title: "Mr",
            group: null,
            isFav: false,
            todos: [],
            contacts: [],
            id: 2
        }
        ]}),
        getters: {
            //this method gets all the favourite contact from the contacts state
            favs(){
                return this.contacts.filter(t => t.isFav)
            },

            //this method gets returns the total value of favourite contact
            favCount(){
                return this.contacts.reduce((prev, cur)=> {
                    return cur.isFav ? prev + 1 : prev;
                   
                }, 0)
            },
            //this method returns the total number of  items in the contacts array
            totalCount(){
                return this.contacts.length
            },
            //this method returns a filtered search array
            searchFilter(input){
                return this.contacts.filter(contact =>{
                    return contact.name === input;
                })
            }

        },
        actions: {
            addContacts(datas){
               this.contacts.push(datas)
            },
            toggleFav(id){
                const contact = this.contacts.find(item => item.id === id)
                contact.isFav = !contact.isFav;
            }
        }

})