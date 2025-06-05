var commandes = {
    com1:{
        com2:{
            com3:{
                fun: () => console.log("com3")
            },
            fun: () => console.log("com2")
        },
        fun: () => console.log("com1")
    }
}

commandes["com1"]["com2"].fun()