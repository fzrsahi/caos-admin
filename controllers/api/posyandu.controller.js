const model = require("../../models/index");

module.exports = {
  getAllPosyandu: async (req, res) => {
    const data = await model.Posyandus.findAll();
    res.status(200).json({
      status: "Success",
      message: "Fetch data berhasil",
      data,
    });
  },
  getSpesificPosyandu: async (req, res) => {
    const data = await model.Posyandus.findOne({
      where: {
        uuid: req.params.uuid,
      },
    });

    if (!data)
      return res.status(404).json({
        status: "Failed",
        message: "Data tidak ditemukan",
      });

    res.status(200).json({
      status: "Success",
      message: "Fetch data sukses",
      data,
    });
  },
};
