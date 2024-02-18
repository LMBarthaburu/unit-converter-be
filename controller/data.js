const Conversion = require('../model/data')

const getData = async (req,res)=>{
  const conversiones = await Conversion.find({})
  try {
    res.json({
      conversiones
    })
  } catch (error) {
    res.json({
      message: 'No se encontro data'
    })
  }
}


const createConversiones = async (req, res) => {
  const { value1, value2, text1, text2 } = req.body
  // if (!value1 || !value2 || !text1 || !text2) {
  //   res.json({
  //     message: 'Introduzca un valor válido en todos los campos'
  //   })
  // } else {
    const newData = new Conversion({
      value1,
      value2,
      text1,
      text2,
    })
    try {
      await newData.save()
      res.json({
        message: "Datos cargados correctamente"
      })
    } catch (error) {
      res.json({
        message: 'Error al cargar los datos'
      })
    }
  }
// }

const deleteData= async (req, res)=>{
  const {_id} = req.body
  try{
    const dataDeleted = await Conversion.findByIdAndDelete(_id)
    if(dataDeleted){
      res.json({
        message: 'data eliminado correctamente',
      })
    }else{
      res.json({
        message: 'No se encontro data'
      })
    }
  } catch (error) {
    res.json({
      message: 'Error al eliminar'
    })
  }
}


module.exports = {getData, deleteData, createConversiones}