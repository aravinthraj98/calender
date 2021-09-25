import React, { useState } from "react"
import { Text, Touchable, TouchableOpacity, View } from "react-native"
function Head({setChanged}){
    const month=["january","february","March","April","May","June","July","August","September","October","November","December"]
    let initialState ={
        month:new Date().getMonth(),
        year:new Date().getFullYear()
    }
    // console.log(initialState);
    const [curDate,setDate]=useState(initialState);
    function decrease(){
        let temp ={...curDate};
        console.log(curDate)
        if(temp.month==0){
            temp={
                month:11,
                year:temp.year-1
            }
        }
        else{
            temp.month=temp.month-1;

        }
        setDate(temp);
        setChanged(temp);

    }
    function increase(){
            let temp ={...curDate};
        if(temp.month==11){
            temp={
                month:0,
                year:temp.year+1
            }
        }
        else{
            temp.month=temp.month+1;

        }
        setDate(temp);
        setChanged(temp);

    }

return(
    <View style={{backgroundColor:"orange",flexDirection:"row",justifyContent:"space-between"}}>
        
<TouchableOpacity style={{backgroundColor:"white",color:"orange"}} onPress={decrease}><Text style={{marginLeft:5,color:"orange",marginRight:5,fontWeight:"bolder"}}>{"<"}</Text></TouchableOpacity>
<Text style={{color:"white",fontWeight:"bold"}}>{curDate.year}{"\n"}{month[curDate.month]}</Text>
<TouchableOpacity style={{backgroundColor:"white",color:"orange"}} onPress={increase}><Text style={{marginLeft:5,color:"orange",marginRight:5,fontWeight:"bolder"}}>{">"}</Text></TouchableOpacity>



    </View>
)
}
export default Head;