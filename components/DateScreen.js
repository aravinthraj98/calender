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
      let temp =new Array(31).fill(1,31);
      setArray(temp);
      console.log(newShow);
    },[])

    return(
        <View style={{maxWidth:"100%",backgroundColor:"black"}}>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.date}>
                    <Text>1</Text>
                    <Text>{"\n"}{curShow!=null && days[curShow.day]}</Text>
                </Text>
                <Text style={styles.date}>2{"\n"}{curShow!=null && days[(curShow.day+1)%7]}</Text>
                <Text style={styles.date}>3{"\n"}{curShow!=null && days[(curShow.day+2)%7]}</Text>
                <Text style={styles.date}>4{"\n"}{curShow!=null && days[(curShow.day+3)%7]}</Text>
                <Text style={styles.date}>5{"\n"}{curShow!=null && days[(curShow.day+4)%7]}</Text>
            </View>
              <View style={{flexDirection:"row"}}>
                <Text style={styles.date}>6 {"\n"}{curShow!=null && days[(curShow.day+5)%7]}</Text>
                <Text style={styles.date}>7{"\n"}{curShow!=null && days[(curShow.day+6)%7]}</Text>
                <Text style={styles.date}>8{"\n"}{curShow!=null && days[(curShow.day+7)%7]}</Text>
                <Text style={styles.date}>9{"\n"}{curShow!=null && days[(curShow.day+8)%7]}</Text>
                <Text style={styles.date}>10{"\n"}{curShow!=null && days[(curShow.day+9)%7]}</Text>
            </View>
              <View style={{flexDirection:"row"}}>
                <Text style={styles.date}>11{"\n"}{curShow!=null && days[(curShow.day+10)%7]}</Text>
                <Text style={styles.date}>12{"\n"}{curShow!=null && days[(curShow.day+11)%7]}</Text>
                <Text style={styles.date}>13{"\n"}{curShow!=null && days[(curShow.day+12)%7]}</Text>
                <Text style={styles.date}>14{"\n"}{curShow!=null && days[(curShow.day+13)%7]}</Text>
                <Text style={styles.date}>15{"\n"}{curShow!=null && days[(curShow.day+14)%7]}</Text>
            </View>
              <View style={{flexDirection:"row"}}>
                <Text style={styles.date}>16{"\n"}{curShow!=null && days[(curShow.day+15)%7]}</Text>
                <Text style={styles.date}>17{"\n"}{curShow!=null && days[(curShow.day+16)%7]}</Text>
                <Text style={styles.date}>18{"\n"}{curShow!=null && days[(curShow.day+17)%7]}</Text>
                <Text style={styles.date}>19{"\n"}{curShow!=null && days[(curShow.day+18)%7]}</Text>
                <Text style={styles.date}>20{"\n"}{curShow!=null && days[(curShow.day+19)%7]}</Text>
            </View>
              <View style={{flexDirection:"row"}}>
                <Text style={styles.date}>21{"\n"}{curShow!=null && days[(curShow.day+20)%7]}</Text>
                <Text style={styles.date}>22{"\n"}{curShow!=null && days[(curShow.day+21)%7]}</Text>
                <Text style={styles.date}>23{"\n"}{curShow!=null && days[(curShow.day+22)%7]}</Text>
                <Text style={styles.date}>24{"\n"}{curShow!=null && days[(curShow.day+23)%7]}</Text>
                <Text style={styles.date}>25{"\n"}{curShow!=null && days[(curShow.day+24)%7]}</Text>
            </View>
              <View style={{flexDirection:"row"}}>
                <Text style={styles.date}>26{"\n"}{curShow!=null && days[(curShow.day+25)%7]}</Text>
                <Text style={styles.date}>27{"\n"}{curShow!=null && days[(curShow.day+26)%7]}</Text>
                <Text style={styles.date}>28{"\n"}{curShow!=null && days[(curShow.day+27)%7]}</Text>
                {curShow && curShow.noOfdays>=29 &&<Text style={styles.date}>29{"\n"}{curShow!=null && days[(curShow.day+28)%7]}</Text>}
                {curShow && curShow.noOfdays>=30 && <Text style={styles.date}>30{"\n"}{curShow!=null && days[(curShow.day+29)%7]}</Text>}
                 {curShow && curShow.noOfdays>=31 && <Text style={styles.date}>31{"\n"}{curShow!=null && days[(curShow.day+30)%7]}</Text>}
            </View>
              
  
            {/* <FlatList data={array} numColumns="4"  renderItem={({item})=>(
                // if(index+1>curShow.noOfdays) return(
                //     <View>
                       
                //         </View>
                // )
                // if(index+1<=curShow.noOfdays)
              
               <Text key={index} style={{backgroundColor:"green"}} >
                1</Text>
    )
           
        
        }/> */}
            
            

        </View>
    );
    
}
export default DateScreen;

const styles = StyleSheet.create({
    date:{
        width: "11%",
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
        
    }
})