  
import  React , { memo } de  ' react '
importar  PropTypes  de  ' prop-types '
importar { Card  as  CardUI } de  ' ../../../components '
import {
  LabelStyled ,
  ValueStyled ,
  CardContentStyled
} de  ' ./style '

 cartão de função ({ valor , rótulo , cor }) {
  return (
    < CardUI >
      < CardContentStyled  color = { color } >
        < ValueStyled > { value } </ ValueStyled >
        < LabelStyled > { label } </ LabelStyled >
      </ CardContentStyled >
    </ CardUI >
  )
}

exportar  memorando padrão  ( cartão )