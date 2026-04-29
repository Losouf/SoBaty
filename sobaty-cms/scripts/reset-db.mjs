import 'dotenv/config'
import pg from 'pg'

const { Client } = pg

const url = process.env.DATABASE_URL
if (!url) {
  console.error('DATABASE_URL not set')
  process.exit(1)
}

const client = new Client({ connectionString: url })

await client.connect()
console.log('Connected. Dropping schema public...')

await client.query('DROP SCHEMA IF EXISTS public CASCADE;')
await client.query('CREATE SCHEMA public;')
await client.query('GRANT ALL ON SCHEMA public TO public;')

console.log('Schema reset complete. You can now run `npm run dev` and the schema will be recreated fresh.')
await client.end()
