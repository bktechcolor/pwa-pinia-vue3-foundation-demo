import { defineStore } from 'pinia'
import MealsDataService from '../services/MealsDataService'
export const useTaskStore = defineStore('taskStore',{
    state:()=> ({
        meals:[]
    }),
    getters:{
        storeGetAllMeals(){
            return this.meals
        }
    },
    actions:{
        async getAllMealAsync(){
            await MealsDataService.getAllMealAsync().then( res => {
                res.forEach(doc=>{
                    this.meals.push(doc.data())
                })
                }).catch(error=>{
                    throw new Error(error.message + "Fail to fetch meals data")
                })
        },
        async addMealAsync(meal){
            await MealsDataService.addMealAsync(meal)
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
        async deleteMealAsync(id){
            await MealsDataService.delete(id)
        }
    }
})