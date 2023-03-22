db.produtos.find({ $nor: [{ nome: /Big Mac/ }, { nome: /McChicken/ }] },
    { nome: 1, valoresNutricionais: 1, ingredientes: 1, _id: 0 });