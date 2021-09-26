import React, { useEffect, useState } from "react"
import { Alert, Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function DateScreen({current}){
    
    const [curShow,setShow]=useState(null);
    const days =["sun","mon","tue","wed","thur","fri","sat"];
    const [array,setArray] = useState(new Array(31).fill());
    const [event,setEvent]=useState([]);
    useEffect(()=>{
      let newShow={
          date:new Date().getDate(),
          day:new Date(current.year,current.month,1).getDay(),
          noOfdays:new Date(current.year,current.nextMonth,0).getDate(),
          year:current.year,
          month:current.month

      }
     
      setShow(newShow);
      let temp =new Array(31).fill(0);
      console.log(temp);
      setArray(temp);
      console.log(newShow);
    },[current])
    
    function Iscurrent(index){
        if(curShow.date==index+1 && curShow.year==new Date().getFullYear() && curShow.month==new Date().getMonth())return true;
        return false;
    }
    function addEvent(date,year,month){
        
    
    return Alert.alert(
      "Are your sure?",
      `Add event at ${date}/${month+1}/${year}`,
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
          let Tevent ={
              date:date,
              year:year,
              month:month
          }
          setEvent([...event,Tevent]);
          console.log(Tevent);
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  
    }
    function IsEvent(date,year,month){
      let temp=[...event];
      let index=temp.findIndex(item=>item.date==date && item.year==year && item.month==month);
      if(index!=-1)return true;
      return false;
    }

    return(
        <View style={{maxWidth:"100%",backgroundColor:"black",flexGrow:1,flex:1}}>
           {curShow && <FlatList style={{minHeight:Dimensions.get("window").height*0.60}} data={array} numColumns="6"  renderItem={({item,index})=>{
           if(index+1>curShow.noOfdays)return;

          
    return(
 <View style={{width:"13%",margin:5}}>
     <TouchableOpacity onPress={()=>addEvent(index+1,curShow.year,curShow.month)}>
<Text style={[styles.date,Iscurrent(index) && {backgroundColor:"white",color:"black"},IsEvent(index+1,curShow.year,curShow.month) && {backgroundColor:"yellow",color:"green"}]}>{index+1} {"\n"} {days[(curShow.day+index)%7]}</Text>
     </TouchableOpacity>
                
            </View>
    )
           
            

       }} />}
       <FlatList style={{backgroundColor:"white"}} data={event} renderItem={({item})=>(
           <View style={{flexDirection:"row",backgroundColor:"whitesmoke",padding:10,justifyContent:"space-around",marginTop:10,borderBottomColor:"black",borderWidth:1}}>
               <Text>EVENT ADDED ON </Text>
               <Text>{item.year}/{item.month+1}/{item.date}</Text>
               </View>

       )}/>
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
        height:40,
      
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