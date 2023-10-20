import { StyleSheet} from 'react-native';



const Estilo = StyleSheet.create({
    boxTitle:{
        width: "100%",
       
        alignItems: "center",
        justifyContent: "space-evenly",
       gap: 20
    },
    boxTitle1:{
        width: "100%",
       
        alignItems: "center",
        justifyContent: "space-evenly",
       
    },
    textTitle:{
        width: "80%",
        height: "50",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-evenly",
       
        borderRadius: 50,
        color: "#FAF3F3",
        backgroundColor:'#ffa86c',
        fontSize: 28,
       
        fontWeight: "bold",
        shadowColor: "#ffa500",
        shadowOffset: {
	        width: 5,
	        height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10.78,
        elevation: 20,
    },
})

export default Estilo