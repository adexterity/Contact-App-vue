import {defineStore} from "pinia"

export const useContactStore =  defineStore ('contactStore', {
    state:()=> ({
        contacts: [ ],
        searching: false,
        loading: false,
    }),
        getters: {
            //this method gets all the favourite contact from the contacts state
            favs(){
                return this.contacts.filter(t => t.isFav)
            },

            //this method returns the total value of favourite contact
            favCount(){
                return this.contacts.reduce((prev, cur)=> {
                    return cur.isFav ? prev + 1 : prev;
                   
                }, 0)
            },
            //this method returns the total number of  items in the contacts array
            totalCount(){
                return this.contacts.length
            }

        },
        actions: {
            async getContacts(){
                this.loading = true
                const res = await fetch("http://localhost:4000/contacts")
                const data = await res.json();
                this.contacts = data;
                this.loading = false
            },

            //this method returns a filtered search array
            searchFilter(input, searching){
                this.searching = searching;
                return this.contacts.filter(contact =>{
                    contact.name.toLowerCase().includes(input.toLowerCase());
                })
            },
                
            async addContacts(datas){
               this.contacts.push(datas);
                // add the contact to json database
                const res = await fetch("http://localhost:4000/contacts", {
                    method: "POST",
                    body: JSON.stringify(datas),
                    headers: {"Content-Type": "application/json"}
                })
                
                if(res.error){
                    console.log(error)
                }
               
            },
            async toggleFav(id){
                const contact = this.contacts.find(item => item.id === id)
                contact.isFav = !contact.isFav;

                // toggle fav in the json database
                const res = await fetch("http://localhost:4000/contacts/" + id, {
                    method: "PATCH",
                    body: JSON.stringify({isFav: contact.isFav}),
                    headers: {"Content-Type": "application/json"}
                    
                })
                
                if(res.error){
                    console.log(error)
                }
            },
            async removeContact(id){
                this.contacts = this.contacts.filter(item => {
                    return item.id !== id
                })
                // delete contact from the json database
                const res = await fetch("http://localhost:4000/contacts/" + id, {
                    method: "DELETE",
                    
                })
                
                if(res.error){
                    console.log(error)
                }
            }
        }

})