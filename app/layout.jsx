import './general.scss'

export const metadata = {
  title: 'Portfolio',
  description: 'Generated by Santiago Romero',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
/* 
  Este ultimo componente envuelve el contenido de la página web y le incrusta las propiedades definicdas 
  en el metadata al head
*/