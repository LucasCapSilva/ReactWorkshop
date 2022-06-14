import { Box, Grid, Switch, Typography } from '@mui/material'
import CardProdutos from '../../components/cards/cardsProduto/CardProdutos'

const Produtos = () => {


  const styleBackgroud = {
    bgcolor: '#EDEDED',
  }

  const commonStyles = {
    bgcolor: '#FFFFFF',
    m: 1,
    border: 1,
    width: '60%',
    height: '30%',
  }




  return (
    <>
      <Box sx={{ ...styleBackgroud }}>
        <Grid container >
          <Grid item xs={3} >

            <Box margin={2} marginLeft={9}>
              <Typography variant="body1" textAlign="start" color="initial">
                Instrumentos Musicais &gt; Instrumentos de Corda
              </Typography>
            </Box>
            <Box margin={2} marginLeft={9}>
              <Typography variant="h5" style={{ fontWeight: "bold" }} textAlign="start" color="initial">
                Violoncelo</Typography>
            </Box>

            <Box display="flex" justifyContent="center">
              <Box sx={{ ...commonStyles, borderRadius: '5px', borderColor: '#cecece', padding: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                <Typography variant="body1" style={{ fontWeight: "bold" }} textAlign="start" color="initial">
                  Chegam amanhã</Typography>
                <Switch />
              </Box>

            </Box>

            <Box display="flex" justifyContent="center">
              <Box sx={{ ...commonStyles, borderRadius: '5px', borderColor: '#cecece', padding: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                <Typography variant="body1" style={{ fontWeight: "bold" }} textAlign="start" color="initial">
                  Frete grátis</Typography>
                <Switch />
              </Box>

            </Box>

            <Box marginY={3} marginLeft={9}>
              <Typography variant="h6" style={{ fontWeight: "bold" }} textAlign="start" color="initial">
                Condição</Typography>
              <Typography variant="body2" textAlign="start" color="initial">
                Novo (4)</Typography>
              <Typography variant="body2" textAlign="start" color="initial">
                Usado
                (4)</Typography>

            </Box>

            <Box marginY={3} marginLeft={9}>


            </Box>

          </Grid>
          <Grid item xs={9}>

            <CardProdutos />

          </Grid>

        </Grid>


      </Box>

    </>

  )
}

export default Produtos