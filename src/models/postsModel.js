
import 'dotenv/config';
// Importa a função para conectar ao banco de dados MongoDB
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
// Conecta ao banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Função assíncrona para obter todos os posts da coleção "posts"
export async function getTodosPosts() {
    // Obtém o banco de dados "imersao-instabyte"
    const db = conexao.db("imersao-instabyte");
  
    // Obtém a coleção "posts"
    const colecao = db.collection("posts");
  
    // Busca todos os documentos da coleção e retorna como um array
    return colecao.find().toArray();
  }
  export  async function criarPost(novoPost){
    const db = conexao.db("imersao-instabyte");
    const colecao = db.collection("posts");    
    return colecao.insertOne(novoPost);

  }
  export  async function atualizarPost(id,novoPost){
    const db = conexao.db("imersao-instabyte");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);

    return colecao.updateOne({_id:new ObjectId(objID)},{$set:novoPost});

  }
  