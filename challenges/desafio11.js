db.produtos.find({ $and: [{ nome: { $not: /Big Mac/ } }, { nome: { $not: /McChicken/ } }] },
    { nome: 1, curtidas: 1, vendidos: 1, _id: 0 });