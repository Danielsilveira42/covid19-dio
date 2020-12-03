importar  estilizado  de  'componentes estilizados'
importar  {  CardContent ,  Typography  }  de  '../../../components'

export  const  LabelStyled  =  styled ( Typography ) `
  peso da fonte: 500;
  tamanho da fonte: 1.5rem;
`

export  const  ValueStyled  =  styled ( Typography ) `
  peso da fonte: 400;
  tamanho da fonte: 2,5 rem;
`

export  const  CardContentStyled  =  styled ( CardContent ) `
  borda esquerda: sólido 8px $ { ( {  color  } )  =>  cor  ||  '# 5d78ff' } ;
`

export  const  CardPanelContentStyled  =  styled ( CardContent ) `
  display: flex;
  justify-content: espaço entre;
  preenchimento: 25px;
`

exportar  const  ItemStyled  =  estilizado . div `
  display: flex;
  justify-content: espaço entre;
  largura mínima: 150px;
`