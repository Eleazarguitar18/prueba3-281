import {Asiste} from "../database/models"

export default {
    listarAsiste: async () => {
        return await Asiste.findAll();
    },
    agregarAsiste: async (nuevoAsiste) => {
        return await Asiste.create(nuevoAsiste);
    },
    obtenerAsiste: async (id) => {
        return await Asiste.findByPk(id);
    },
    editarAsiste: async (id, editAsiste) => {
        const asiste = await Asiste.findByPk(id);
        if (!asiste) return false;
        editAsiste.hora = convertHora(editAsiste.hora);
        await Asiste.update(editAsiste,{
            where: {
                id_asiste: id
            },
        });
        return true;
    },
    borrarAsiste: async (id) => {
        const asiste = await Asiste.findByPk(id);
        if (!asiste) return false;
        await Asiste.destroy({
            where: {
                id_asiste: id
            },
        });
        return true;
    },
    // borrarAsiste: async (id) => {
    //     console.log("borrando el ",id)
    //     const asiste = await Asiste.findByPk(id);
    //     console.log(asiste)
    //     if (!asiste) return false;
    //     await Asiste.destroy({
    //         where: {
    //             id_asiste: id
    //         },
    //     });
    //     return true;
    // },
    // lo que de abajo son otras opciones de hacer peticiones de asistencia
    asistir_denuncia: async(id_admi,id_den)=>{
        const atencion={
            id_administrador: id_admi,
            id_denuncia:id_den
        };
        console.log(atencion)
       return await agregarAsiste(atencion)
      },
    //   admi_asiste_denucia: async(id_admi,id_den) =>{
    //     let busca = await Administrador.findAll({
    //       include: [
    //         {
    //           model: Asiste,
    //           where:{
    //             id_denuncia:id_den,
    //             id_administrador: id_admi,
    //           }
    //         }
    //       ]
    //     });
    //     const admin= busca[0];
    //     // variable !== null && typeof variable === 'object'
    //     if (admin!=null && typeof admin === 'object') {
    //       return true
    //     }else{return false}
    //   },
};