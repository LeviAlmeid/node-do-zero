import 'dotenv/config'
import { neon } from '@neondatabase/serverless';


export const sql = neon(process.env.DATABASE_URL);



// const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID} = process.env
// const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`

// export const sql = postgres(URL, {ssl: 'require'})