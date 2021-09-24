import React, { useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native";

function DateScreen(){
    
    const [curShow,setShow]=useState(null);
    const days =["sun","mon","tue","wed","thur","fri","sat"];
    const [array,setArray] = useState(new Array(31).fill());
    useEffect(()=>{
      let newShow={
          date:new Date().getDate(),
          day:new Date(new Date().getFullYear(),new Date().getMonth(),1).getDay(),
          noOfdays:new Date(new Date().getFullYear(),new Date().getMonth()+1,0).getDate()

      }
     
      setShow(newShow);
      let temp =new Array(31).fill(0);
      console.log(temp);
      setArray(temp);
      console.log(newShow);
    },[])

    return(
        <View style={{maxWidth:"100%",backgroundColor:"black"}}>
           {curShow && <FlatList data={array} numColumns="6"  renderItem={({item,index})=>{
           if(index+1>curShow.noOfdays)return;

             
    return(
 <View style={{width:"13%",margin:5}}>
                <Text style={[styles.date,curShow.date==index+1 && {backgroundColor:"white",color:"black"}]}>{index+1} {"\n"} {days[(curShow.day+index)%7]}</Text>
            </View>
    )
           
            

       }} />}
    </View>
    )
    
}
export default DateScreen;

const styles = StyleSheet.create({
    date:{
        width: "100%",
        fontSize:16,
        borderRadius:25,
        color:"white",
        height:45,
      
        borderColor:"black",
        borderTopColor:"green",
        borderLeftColor:"green",
      
        borderWidth:.5,
        borderTopWidth:1,
        borderColor:"grey",
        margin:10,
        textAlign:"center"
        
    },
    current:{
        backgroundColor:"white",
        color:"black"
    }
})