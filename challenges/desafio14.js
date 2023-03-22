db.produtos.find(
    { ingredientes: { $all: ["picles"] } },
    { ingredientes: 1, nome: 1, valoresNutricionais: { $slice: 3 }, _id: 0 },
    );