import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@mui/material';
import './servicios.css'
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        JMlab
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Soporte técnico y reparaciones',
    descripcion:'Cotiza una reparacion o mejora para tus equipos',
    buttonText: 'Cotiza',
    buttonVariant: 'outlined',
  },
  {
    title: 'Digitaliza tu negocio',
    /* subheader: 'Most popular', */
    descripcion:'Registra tu negocio en maps, acepta pagos con tarjeta digitaliza tu negocio, te ayudamos a promocionarte en redes llega a mas clientese incrementa tus ventas.',
    buttonText: 'Cotiza',
    buttonVariant: 'contained',
  },
  {
    title: '¿Necesitas una pagina web?',
    descripcion:'Creacion de paginas web estaticas y app web, cotiza un proyecto.',
    buttonText: 'Contactanos',
    buttonVariant: 'outlined',
  },
];



function PricingContent() {
const navigate = useNavigate()
function handleClick(e) {
    e.preventDefault();
    window.location.href = "https://wa.me/5533996830";
  } 


  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
  
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 3, pb: 3 }}>
     
        
      </Container> */
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  /* subheader={tier.subheader} */
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h5" variant="h5" color="text.primary">
                      {tier.descripcion}
                    </Typography>
                    
                  </Box>
                  {/* <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul> */}
                </CardContent>
                <CardActions>
                  <Button onClick={handleClick} fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
       
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Servicios() {
  return <PricingContent />;
}
