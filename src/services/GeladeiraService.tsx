import axios from "axios";
import type { Geladeira } from '../types/Geladeira';

export const getGeladeiras = async (): Promise<Geladeira[]> => {
    try {
        const resposta = await axios.get("http://localhost:3000/geladeiras")
        return resposta.data
    } catch (error) {
        console.error("Erro ao buscar os dados: ", error);
        throw error;
    }
}
