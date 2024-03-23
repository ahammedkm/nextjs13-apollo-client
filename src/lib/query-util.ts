import { client } from "@/lib/client";

export async function queryUtil(query: any) {
    let data, error;
    try {
         data = await client.query<Response>({
            query,
          });
    } catch (e) {
        error = e;
    } finally {
        return {
            data,
            error
        }
    }
    
   
}

