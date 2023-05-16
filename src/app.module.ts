import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { env } from './env';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { LiveModule } from './live/live.module';

@Module({
  imports: [
    DevtoolsModule.register({
      http: env.NODE_ENV !== 'production',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/autoSchema.gql'),
      playground: env.GRAPHIQL,
    }),
    LiveModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
