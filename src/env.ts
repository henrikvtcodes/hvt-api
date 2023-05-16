import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

const boolTransform = (v:string) => v === "true" ? true : false;
const intTransform = (v:string) => parseInt(v, 10);

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('production'),
    PORT: z
      .string()
      .optional()
      .transform(intTransform)
      .pipe(z.number().default(3000)),
    GRAPHIQL: z.string().optional().transform(boolTransform).pipe(z.boolean().default(false)),
  },
  isServer: true,
  runtimeEnv: process.env,
  // Client stuff is just here to satisfy the type checker
  clientPrefix: '',
  client: {},
});
