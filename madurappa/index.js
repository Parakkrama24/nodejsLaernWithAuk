import {dirname,join} from  "node:path";
import { fileURLToPath } from "url";
import { readFile } from "node:fs";
import { isUtf8 } from "node:buffer";

const _filename = fileURLToPath(import.meta.url);
const __dirname = dirname(_filename);

readFile(join(__dirname,'myname.txt'),'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});