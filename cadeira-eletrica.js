import conn from "./conn.js";

const Schema = conn.Schema;

const americanoMedioSchema = new Schema({
    nome: {
    type: Schema.Types.String,
    required: true,
    },
    dataNascimento: {
    type: Schema.Types.String,
    required: true,
    },
});

const cadeiraEletrica = new Schema({
    voltagem: {
    type: Schema.Types.Number,
    required: true,
    },
    americano: americanoMedioSchema,
});

const CadeiraEletrica = conn.model("CadeiraEletrica", cadeiraEletrica);

const inserir = async () => {
    try {
    const cadeira = await CadeiraEletrica.create({
        americano: {
        nome: "John Peterson",
        dataNascimento: "2000/10/05",
        },
        voltagem: 380,
    });

    console.log(cadeira);
    } catch (error) {
    console.log(error);
    }
};

inserir();

export default CadeiraEletrica;