// import dotenv
// import {CSVLoader} from "@langchain.document_loaders.csv_loader"
import {Chroma} from "@langchain/community/vectorstores/chroma" 
import {OpenAIEmbeddings} from "@langchain/openai"

const REVIEWS_CSV_PATH = "data/reviews.csv"
const REVIEWS_CHROMA_PATH = "chroma_data"

// dotenv.load_dotenv()

const embeddings = new OpenAIEmbeddings({
    model: "text-embedding-3-small",
    apiKey:"RgegjZoxKC4On1wGCaNVKWng8Nf_Z1lBixIy5TcbWwNcGfF8mI49gbt8biAeIrnZdTBHM6G436T3BlbkFJGryuU1iGVo2T9BVMp5cHQ05EnQ72u03M2DVuUtzg"
    })

import { MemoryVectorStore } from "langchain/vectorstores/memory";

const vectorStore = new MemoryVectorStore(embeddings);

import {Document} from "@langchain/core/documents" 

const docs = [
    new Document({ pageContent: "Harrison went to Harvard." }),
    new Document({ pageContent: "Ankush went to Princeton." }),
];

vectorStore.addDocuments(docs).then((vs)=>{
    vectorStore.similaritySearch("Princeton").then(()=>{
        
    })
})

// const loader = CSVLoader(file_path=REVIEWS_CSV_PATH, source_column="review")
// const reviews = loader.load()

// const reviews_vector_db = Chroma.fromDocuments(
//     reviews, OpenAIEmbeddings(), persist_directory=REVIEWS_CHROMA_PATH
// )

// const reviews_vector_db1 = new Chroma(
//     embeddings,
//     {
//         url:"",
//         collectionName:""
//     }
//     )