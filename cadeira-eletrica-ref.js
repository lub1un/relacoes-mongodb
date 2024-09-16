import conn from "./conn.js";
import AmericanoMedio from "./americano-medio-ref.js";

const Schema = conn.Schema;

const cadeiraEletrica = new Schema({
    voltagem: {
    type: Schema.Types.Number,
    required: true,
    },
    americano: {
    type: Schema.Types.ObjectId,
    ref: "AmericanoMedio"
    },
});

const CadeiraEletricaRef = conn.model("CadeiraEletricaRef", cadeiraEletrica);

const inserir = async () => {
    try {
    const americano = await AmericanoMedio.create({
        nome: "John Peterson",
        dataNascimento: "2000/10/05",
    })

    const cadeira = await CadeiraEletricaRef.create({
        americano: americano._id,
        voltagem: 380,
    });

    console.log(americano, cadeira);

    const content = await CadeiraEletricaRef.find().exec()

    console.log(content)

    const contentPopulate = await CadeiraEletricaRef
        .find()
        .populate("americano")
        .exec()

    console.log(contentPopulate)

    } catch (error) {
    console.log(error);
    }
};

inserir();

export default CadeiraEletricaRef;