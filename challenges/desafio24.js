db.produtos.updateMany(
    {},
    {
        valoresNutricionais: {
                $each: ["combo", "tasty"],
                $sort: 1,
            },
    },
);