
import React from "react";

const Footer = () => {
  return (

    <footer>
      <div className="container-footer">
    
           <div className="container-principal">

              <div className="column">
                <div className="title"><h2>Nuestros Productos</h2></div>
                <br></br>

                <div className="item">
                  <a href="#" id=""  > <p>Espejos Circulares</p> </a>
                  <br></br>
                  <a href="#" id="" > <p>Espejos Medio Punto</p></a>
                    <br></br>
                  <a href="#" id=""> <p>Espejos Rectangulares</p></a>
                </div>
              </div>


              <div className="column">
                <div className="title"><h2>Medios de Pago</h2></div>
                <br></br>
                <div className="item">
                    <p> Mercado Pago </p>
                    <br></br>
                    <p>Efectivo/Transferencia</p> 
                    <br></br>
                    <p> Tarjeta de débito y crédito</p>
                </div>
              </div>

               <div className="column">
                <div className="title"><h2>Contacto</h2></div>
                <br></br>
                    <div className="item"> 
                       <p>
                       <img src='./image/instagram.png'/> 
                          PrismaDeco_
                        </p>
                        <br></br>
                    </div>
                    
                    <div className="item"> 
                        <p>
                        <img src='./image/facebook.png'/>
                            PrismaDeco 
                        </p>
                        <br></br>
                    </div>
                        
                    <div className="item">     
                       <p>
                       <img src='./image/whatsapp.png'/>  
                          11 152 1823 456 
                        </p>
                        <br></br>
                    </div>

                    
              </div>
    
            </div> 

            <div className="container-copyright"></div>
           <div className="copyright" >
            Copyright © 2024 prismadeco | Diseño PRISMA
           </div>
         
            
        </div>

        
     


         <style jsx>{`

          /* Estilos para el footer */

        .container-footer{
          width:100%;
          height: 320px;
          padding:30px;
          background-color: #686D67;
          font-family: 'Montserrat', sans-serif;
          color:white;
          
        }  

        .container-principal {
            display:flex;
            justify-content: space-evenly;
        }


        .column{
          max-width:400px;

        }

        .title {
          font-size: 23px;
          font-weight:bold;
          margin-top: 5px;

        }


        h2{
          font-size: 20px;
          font-weight:bold;
        }


        p {
          font-size: 16px;
          
        }

        img {
          width: 24px;
          height:24px;
          float: left;
          border: 1px solid #686D67;
        }
       

       .container-copyright{
          margin-top:35px;
          width: 100%;
          display: flex;
          padding: 5px;
          justify-content: center;
          background-color: #686D67;
          color: white;
          
       }

       .copyright {
        color: white;
        background-color: #686D67;
        text-align:center;
        font-size: 14px;
        font-family: 'Montserrat', sans-serif;
          
        }


       @media screen and (max-width: 768px) {

        .container-footer{
          padding: 0px; 
        }

        .container-principal {
           width: 100%;
           padding-left: 30px;
           flex-wrap: wrap;
           background-color:#686D67;
           padding:30px;
           
        }

        .column {
          margin: 10px;
          padding:0px;
        }

        .container-copyright{
          margin-top:0px;
          text-align:left;
          
        }
        }

        @media screen and (max-width: 480px) {
          .container-footer{
            padding: 0px; 
            align-items:center;
            
          }

          .container-principal {
            width: 100%;
            flex-direction: column;
            background-color:#686D67;
         }
              
        }

       }

      `}
      </style>

    </footer>
  )
}

export default Footer