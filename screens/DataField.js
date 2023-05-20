export default function DataField(){
    return(
        [
            {
                id: 1 ,
                name: 'À la découverte de la Culture' ,
                sousItems: true ,
                items :[
                    {
                        name:'Histoire sur les royaume' ,
                        number_level: 50
                    },
                    {
                        name:'Les recettes de chez nous',
                        number_level: 20 ,
                    } ,
                    {
                        name:'Nos danses' ,
                        number_level: 20 ,
                    },
                    {
                        name:'Quelques panygériques' ,
                        number_level: 30 ,
                    }
                ]
            },
            {
                id: 2 ,
                name: 'Le Tourisme' ,
                sousItems: false ,
                number_level: 30 ,
            },
            {
                id: 3 ,
                name: "À la découverte de L' Art" ,
                sousItems: false ,
                number_level: 30 ,
            } 
        ]
    )
}
