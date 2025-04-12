import { createRouter,  createWebHashHistory } from "vue-router";

//agregando paginas de la aplicacion 
import Home from "../Pages/Home.vue";
import About from "../Pages/About.vue";
import CalculadoraV1 from "../Pages/Calculadora/CalculadoraV1.vue";
import CalculadoraV2 from "../Pages/Calculadora/CalculadoraV2.vue";
import HorarioV1 from "../Pages/Horario/HorarioV1.vue";
import HorarioV2 from "../Pages/Horario/HorarioV2.vue";
import RecorridoV1 from "../Pages/Ciclos/RecorridoV1.vue";
import RecorridoV2 from "../Pages/Ciclos/RecorridoV2.vue";
import EventosV1 from "../Pages/Eventos/EventosV1.vue";
import Padre from "../Pages/Props/Padre.vue";
import Hijo1 from "../Pages/Props/Hijo1.vue";
import Hijo2 from "../Pages/Props/Hijo2.vue";
import CardV1 from "../Pages/Card/CardV1.vue";
import Replica from "../Pages/PaginaWeb/Replica.vue";






const routes =[
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/Calculadorav1",
        name: "Calculadorav1",
        component: CalculadoraV1
    },
    {
        path: "/Calculadorav2",
        name: "Calculadorav2",
        component: CalculadoraV2
    },
    {
        path: "/Horariov1",
        name: "Horariov1",
        component: HorarioV1
    },
    {
        path: "/Horariov2",
        name: "Horariov2",
        component: HorarioV2
    },
    {
        path: "/Recorridov1",
        name: "Recorridov1",
        component: RecorridoV1
    },
    {
        path: "/Recorridov2",
        name: "Recorridov2",    
        component: RecorridoV2
    },
    {
        path: "/Eventosv1",
        name: "Eventosv1",
        component: EventosV1    
    },
    {
        path: "/Padre",
        name: "Padre",
        component: Padre
    },
    {
        path: "/Hijo1",
        name: "Hijo1",
        component: Hijo1
    },
    {
        path: "/Hijo2",
        name: "Hijo2",
        component: Hijo2
    },
    {
        path: "/Cardv1",
        name: "Cardv1",
        component: CardV1
    },
    { 
        path: "/Replica",
        name: "Replica",
        component: Replica,
    }
   
  
    
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),    
    routes,
});          

export default router;