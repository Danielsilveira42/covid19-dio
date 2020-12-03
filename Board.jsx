import  React , { memo } de  ' react '
importar  PropTypes  de  ' prop-types '
import { Grid , Skeleton } from  ' ../../../components '
importar  cartão  de  ' ./Card '

function  Board ({ data }) {
  const { casos , todayDeaths , recuperados , mortes , todayCases } =  dados

  const  getValue  = ( value ) =>  value  ?  valor : < Skeleton  variant = " text "  width = { 182 }  height = { 60 } />

  return (
    < Espaçamento do contêiner da grade  = { 4 } > 
      < Item da grade  xs = { 12 } md = { 3 } >  
        < Card  value = { getValue ( cases ) }  label = " Total de casos "  color = " # 5d78ff " />
      </ Grid >
      < Item da grade  xs = { 12 } md = { 3 } >  
        < Card  value = { getValue ( todayDeaths ) }  label = " Óbitos hoje "  color = " # F7B829 " />
      </ Grid >
      < Item da grade  xs = { 12 } md = { 3 } >  
        < Card  value = { getValue ( todayCases ) }  label = " Casos hoje "  color = " # 000 " />
      </ Grid >
      < Item da grade  xs = { 12 } md = { 3 } >  
        < Card  value = { getValue ( mortes ) }  label = " Total de mortos "  color = " # E95078 " />
      </ Grid >
      < Item da grade  xs = { 12 } md = { 3 } >  
        < Cartão  valor = { getValue ( recuperado ) }  etiqueta = " total de recuperados "  cor = " # 67C887 " />
      </ Grid >
    </ Grid >
  )
}

exportar  memorando padrão  ( Quadro )