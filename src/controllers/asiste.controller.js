import asisteService from "../services/asiste.service";
import denunciaService from "../services/denuncia.service";
export default{
    listar:async (req,res)=>{
        try {
            const asistencias = await asisteService.listarAsiste();
            return res.status(200).json({data:asistencias});
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },

    agrega: async (req,res)=>{
        try{
            // console.log("entro aqui1 ")
            const nuevo_asiste= req.body;
            const asiste = await asisteService.agregarAsiste(
                nuevo_asiste
            )
            console.log("llego al if")
            if (asiste) {
                console.log(asiste)
                const verfica=await denunciaService.editarAsistencia_Denuncia(
                    nuevo_asiste.id_denuncia,
                    true
                )
                if(verfica){console.log("se cambio el estado de la denuncia")}
                else{console.log("no se cambio el estado de la denuncia")}
                return res.status(200).json({
                    message:"El administrador a asistido a la denuncia: ",
                    estado:"se agrego en la tabla la asitencia de la denuncia: ",
                    data: asiste
                })
                
            } else {
                return res.status(400).json({
                    error: "La asitencia no se ha agregado: ",
            });
        }
        }catch(error){
            return res.status(500).json({ 
                message: error.message ,
                estado:"algo salio mal al agregar"
            });
        }
    },
    borrar: async (req, res) => {
        try {
          let can = await asisteService.borrarAsiste(req.params.id);
          console.log(can)
          if (can){
                const verfica=await denunciaService.editarAsistencia_Denuncia(
                    req.params.id_denuncia,
                    false
                )
                if(verfica){console.log("se cambio el estado de la denuncia")}
                else{console.log("no se cambio el estado de la denuncia")}
            return res
              .status(200)
              .json({ message: "Se borro la asistencia de la denuncia" });
            }
          return res.status(404).json({ message: "la asisntencia no existe" });
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      },
    //   asistir_denuncia: async (req,res)=>{
    //     try {
    //       const atender= await administradorService.asistir_denuncia(
    //         req.body
    //       );
    
    //       if (atender) {
    //         return res.status(200).json({
    //           message: "El administrador se ha agregado: ",
    //           data: administrador,
    //         });
    //       } else {
    //         return res.status(400).json({
    //           error: "El administrador no se ha agregado: ",
    //         });
    //       }
    //     } catch (error) {
    //       return res.status(500).json({ 
    //         message: error.message,
    //         mensaje:"no encontre una repuesta valida"
    //       });
    //     }
    //   },
    //   admi_asiste_denuncia: async (req,res) =>{
    //     try{
    //       // aqui creamos la ruta
    //       const admi_den = await asisteService.admi_asiste_denucia(
    //         req.params.id_administrador,req.params.id_denuncia
    //       );
    //       const respuestaJSON = { resultado: admi_den };
    //       return res.status(200).json({respuestaJSON});
    //     }catch (error){
    //       return res.status(500).json({ 
    //         message: error.message,
    //         mensaje:"no encontre una repuesta valida"
    //       });
    //     }
    //   }
}