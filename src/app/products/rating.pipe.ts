import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'rating'
})
export class Rating implements PipeTransform{
    transform(val:number ):string{
        if(val>4.5 && val <=5){
            return "Excellent";
        }
        else if(val>4.0 && val<=4.5){
            return "Very Good"
        }
        else if(val>3.5 && val <=4.0){
            return "Good"
        }
        else{
            return "Average"
        }
    }
}