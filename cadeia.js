import conn from "./conn.js";

const Schema = conn.Schema;

const prisioneiroSchema = new Schema({
    nome: {
    type: Schema.Types.String,
    required: true,
    },
});

const celaSchema = new Schema({
    altura: {
    type: Schema.Types.Number,
    required: true,
    },
    comprimento: {
    type: Schema.Types.Number,
    required: true,
    },
    largura: {
    type: Schema.Types.Number,
    required: true,
    },
    prisioneiros: [prisioneiroSchema],
});

const cadeiaSchema = new Schema({
    postalCode: {
    type: Schema.Types.String,
    required: true,
    },
    tipo: {
    type: Schema.Types.String,
    enum: ["MUNICIPAL", "ESTADUAL", "FEDERAL"],
    default: "MUNICIPAL",
    },
    celas: [celaSchema],
});

const Cadeia = conn.model("Cadeia", cadeiaSchema);

Cadeia.create({
    postalCode: "88833311",
    tipo: "FEDERAL",
    celas: [
    {
        altura: 2,
        largura: 5,
        comprimento: 5,
        prisioneiros: [
        {
            nome: "teste1",
        },
        {
            nome: "teste2",
        },
        ],
    },
    {
        altura: 2,
        largura: 10,
        comprimento: 5,
        prisioneiros: [
        {
            nome: "teste1",
        },
        {
            nome: "teste2",
        },
        {
            nome: "teste3",
        },
        ],
    },
    ],
});

export default Cadeia;