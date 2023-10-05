import { defineStore } from 'pinia'
import MealsDataService from '../services/MealsDataService'
export const useTaskStore = defineStore('taskStore',{
    state:()=> ({
        meals:[]
    }),
    getters:{
        getMeals(){
            return this.meals
        }
    },
    actions:{
        async getAll(){
            await MealsDataService.getAll().then( res => {
                res.forEach(doc=>{
                  this.meals.push(doc.data())
                })
                }).catch(error=>{
                    throw new Error(error.message + "Fail to fetch meals data")
                })
        },
        async addMeal(meal){
            await MealsDataService.create(meal)
            .then(res=> {
                if(res){
                    this.meals.push(meal)
                    return "Added meal succesfully"
                }
            })
            .catch(err=> {
                throw new Error(err.message + "Could not add new meal")
            })
        },
        async deleteMeal(id){
            await MealsDataService.delete(id)
        }
    }
})