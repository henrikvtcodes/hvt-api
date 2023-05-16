import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum LiveStreamPlatform {
  YOUTUBE = "youtube",
  TWITCH = "twitch",
  OTHER = "other"
}

registerEnumType(LiveStreamPlatform, {
  name: 'LiveStreamPlatform',
  description: 'The platform where the live stream is hosted'
});

@ObjectType({ description: 'Instance of a Live Stream' })
export class LiveStream {
  @Field(_type => ID)
  streamId: string;

  @Field(_type => LiveStreamPlatform)
  platform: LiveStreamPlatform;

  @Field()
  started: Date;

  @Field()
  url: string;

  @Field()
  isScheduled: boolean;

  @Field()
  isLive: boolean;

  @Field({ nullable: true })
  title: string;

}