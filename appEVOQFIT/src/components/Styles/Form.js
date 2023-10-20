import { StyleSheet} from 'react-native';

const Estilo = StyleSheet.create({
    formContext:{
        width:"100%",
        height: "100%",
        bottom: 0,
        backgroundColor:"#121212" ,
        alignItems:"center" ,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop: 30,
    },
    boxTitle1:{
       
        fontSize: 25,
        alignItems: "center",
        borderRadius: 50,
 
        justifyContent: "center",
        width: "50%",
        backgroundColor: "#f4f4f4",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 85,
        marginTop: 30,
    },
    form:{
        height: "auto",
        width: "100%",
        marginTop: 30,
        padding: 10,
    },
    formLabel:{
        color: "#f4f4f4",
        fontSize: 18,
        paddingLeft: 20,
    },
    input:{
        width: "90%",
        height: 40,
        borderRadius: 50,
        backgroundColor: "#f4f4f4",
        margin: 12,
        paddingLeft: 10,
    },
    button:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#fc5723",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft:12,
        marginTop: 30,
    },
    textButton:{
        color: "#ffffff",
        fontSize: 20,
    },
    errorMessage:{
        fontSize: 12,
        fontWeight: "bold",
        color: "red",
        paddingLeft: 20,
    }
})

export default Estilo