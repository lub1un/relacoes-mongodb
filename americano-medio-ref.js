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

const AmericanoMedio = conn.model("AmericanoMedio", americanoMedioSchema)

export default AmericanoMedio;