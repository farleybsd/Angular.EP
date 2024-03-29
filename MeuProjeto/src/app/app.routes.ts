import { Routes } from "@angular/router";
import { DataBidingComponent } from "./demos/data-biding/data-biding.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { ListarProdutoComponent } from "./produtos/listar-produto/listar-produto.component";

export const rootRouterConfig : Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'contato',component:ContatoComponent},
    {path:'sobre',component:SobreComponent},
    {path:'feature',component:DataBidingComponent},
    {path:'produtos',component:ListarProdutoComponent},
    { path: 'produto-detalhe/:id', component: ListarProdutoComponent }
];